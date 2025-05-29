import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { verifyToken } from "@/lib/auth"
import { validateEmploymentActCompliance } from "@/lib/malaysian-compliance"

export async function GET(request: NextRequest) {
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

    const employees = await sql`
      SELECT * FROM employees 
      WHERE company_id = ${decoded.companyId}
      ORDER BY created_at DESC
    `

    return NextResponse.json({ employees })
  } catch (error) {
    console.error("Get employees error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

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
      icNumber,
      passportNumber,
      firstName,
      lastName,
      email,
      phone,
      position,
      department,
      hireDate,
      employmentType,
      salary,
      epfNumber,
      socsoNumber,
      taxNumber,
      bankAccount,
      bankName,
    } = body

    // Validate required fields
    if (!employeeId || !firstName || !lastName || !employmentType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check for duplicate employee ID
    const existingEmployee = await sql`
      SELECT id FROM employees 
      WHERE company_id = ${decoded.companyId} AND employee_id = ${employeeId}
    `

    if (existingEmployee.length > 0) {
      return NextResponse.json({ error: "Employee ID already exists" }, { status: 409 })
    }

    // Create employee
    const employees = await sql`
      INSERT INTO employees (
        company_id, employee_id, ic_number, passport_number, first_name, last_name,
        email, phone, position, department, hire_date, employment_type, salary,
        epf_number, socso_number, tax_number, bank_account, bank_name
      ) VALUES (
        ${decoded.companyId}, ${employeeId}, ${icNumber}, ${passportNumber}, 
        ${firstName}, ${lastName}, ${email}, ${phone}, ${position}, ${department},
        ${hireDate}, ${employmentType}, ${salary}, ${epfNumber}, ${socsoNumber},
        ${taxNumber}, ${bankAccount}, ${bankName}
      )
      RETURNING *
    `

    const employee = employees[0]

    // Check compliance
    const violations = validateEmploymentActCompliance(employee)

    if (violations.length > 0) {
      // Log compliance violations
      await sql`
        INSERT INTO compliance_records (
          company_id, compliance_type, status, description, ai_agent
        ) VALUES (
          ${decoded.companyId}, 'employment_act', 'violation', 
          ${violations.join("; ")}, 'Compliance Guardian'
        )
      `
    }

    // Update company employee count
    await sql`
      UPDATE companies 
      SET employee_count = (
        SELECT COUNT(*) FROM employees WHERE company_id = ${decoded.companyId}
      )
      WHERE id = ${decoded.companyId}
    `

    // Log AI agent activity
    await sql`
      INSERT INTO ai_agent_activities (
        company_id, agent_name, activity_type, description, status
      ) VALUES (
        ${decoded.companyId}, 'Compliance Guardian', 'employee_added', 
        'New employee added: ${firstName} ${lastName} (${employeeId})', 'completed'
      )
    `

    return NextResponse.json({
      success: true,
      employee,
      complianceViolations: violations,
    })
  } catch (error) {
    console.error("Create employee error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
