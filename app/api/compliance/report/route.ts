import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { verifyToken } from "@/lib/auth"
import { generateComplianceReport } from "@/lib/malaysian-compliance"

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

    // Get all employees
    const employees = await sql`
      SELECT * FROM employees WHERE company_id = ${decoded.companyId}
    `

    // Get recent payroll records
    const payrollRecords = await sql`
      SELECT * FROM payroll_records 
      WHERE company_id = ${decoded.companyId}
      AND pay_period_start >= CURRENT_DATE - INTERVAL '3 months'
    `

    // Get compliance records
    const complianceRecords = await sql`
      SELECT * FROM compliance_records 
      WHERE company_id = ${decoded.companyId}
      ORDER BY created_at DESC
      LIMIT 50
    `

    // Generate comprehensive compliance report
    const report = generateComplianceReport(decoded.companyId, employees, payrollRecords)

    // Add recent compliance activities
    report.recentActivities = complianceRecords

    // Calculate compliance metrics
    const totalViolations = complianceRecords.filter((r) => r.status === "violation").length
    const resolvedViolations = complianceRecords.filter((r) => r.status === "violation" && r.resolved_at).length

    report.metrics = {
      totalViolations,
      resolvedViolations,
      pendingViolations: totalViolations - resolvedViolations,
      resolutionRate: totalViolations > 0 ? Math.round((resolvedViolations / totalViolations) * 100) : 100,
    }

    // Log AI agent activity
    await sql`
      INSERT INTO ai_agent_activities (
        company_id, agent_name, activity_type, description, status, metadata
      ) VALUES (
        ${decoded.companyId}, 'Compliance Guardian', 'report_generated', 
        'Compliance report generated', 'completed', ${JSON.stringify({
          complianceScore: report.complianceScore,
          totalEmployees: report.totalEmployees,
          violationsCount: report.violations.length,
        })}
      )
    `

    return NextResponse.json({
      success: true,
      report,
    })
  } catch (error) {
    console.error("Compliance report error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
