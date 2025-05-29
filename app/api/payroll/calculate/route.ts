import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { verifyToken } from "@/lib/auth"
import { calculateEPF, calculateSOCSO, calculateIncomeTax } from "@/lib/malaysian-compliance"

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")
    const token = authHeader?.replace("Bearer ", "")

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const decoded = verifyToken(token)
    if (!decoded) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }

    const body = await request.json()
    const {
      employeeId,
      payPeriodStart,
      payPeriodEnd,
      basicSalary,
      allowances = 0,
      overtimePay = 0,
      employeeAge = 30,
    } = body

    // Validate required fields
    if (!employeeId || !payPeriodStart || !payPeriodEnd || !basicSalary) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Get employee details
    const employees = await sql`
      SELECT * FROM employees 
      WHERE id = ${employeeId} AND company_id = ${decoded.companyId}
    `

    if (employees.length === 0) {
      return NextResponse.json({ error: "Employee not found" }, { status: 404 })
    }

    const employee = employees[0]

    // Calculate gross pay
    const grossPay = basicSalary + allowances + overtimePay

    // Calculate EPF
    const epf = calculateEPF(grossPay, employeeAge)

    // Calculate SOCSO
    const socso = calculateSOCSO(grossPay)

    // Calculate income tax (simplified monthly calculation)
    const annualSalary = grossPay * 12
    const annualTax = calculateIncomeTax(annualSalary)
    const monthlyTax = annualTax / 12

    // Calculate net pay
    const totalDeductions = epf.employeeContribution + socso.employee + socso.eis + monthlyTax
    const netPay = grossPay - totalDeductions

    // Create payroll record
    const payrollRecords = await sql`
      INSERT INTO payroll_records (
        company_id, employee_id, pay_period_start, pay_period_end,
        basic_salary, allowances, overtime_pay, gross_pay,
        epf_employee, epf_employer, socso_employee, socso_employer,
        eis_employee, eis_employer, income_tax, net_pay, status
      ) VALUES (
        ${decoded.companyId}, ${employeeId}, ${payPeriodStart}, ${payPeriodEnd},
        ${basicSalary}, ${allowances}, ${overtimePay}, ${grossPay},
        ${epf.employeeContribution}, ${epf.employerContribution},
        ${socso.employee}, ${socso.employer}, ${socso.eis}, ${socso.eis},
        ${monthlyTax}, ${netPay}, 'pending'
      )
      RETURNING *
    `

    const payrollRecord = payrollRecords[0]

    // Log AI agent activity
    await sql`
      INSERT INTO ai_agent_activities (
        company_id, agent_name, activity_type, description, status, metadata
      ) VALUES (
        ${decoded.companyId}, 'Payroll Orchestrator', 'payroll_calculated', 
        'Payroll calculated for employee ${employee.first_name} ${employee.last_name}',
        'completed', ${JSON.stringify({
          employeeId: employee.employee_id,
          grossPay,
          netPay,
          epfTotal: epf.totalContribution,
          socsoTotal: socso.employee + socso.employer,
        })}
      )
    `

    return NextResponse.json({
      success: true,
      payrollRecord,
      calculations: {
        grossPay,
        epf,
        socso: {
          employee: socso.employee,
          employer: socso.employer,
          eis: socso.eis,
        },
        incomeTax: monthlyTax,
        netPay,
        totalDeductions,
      },
    })
  } catch (error) {
    console.error("Payroll calculation error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
