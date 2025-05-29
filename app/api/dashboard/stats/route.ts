import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { verifyToken } from "@/lib/auth"

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

    // Get company info
    const companies = await sql`
      SELECT * FROM companies WHERE id = ${decoded.companyId}
    `
    const company = companies[0]

    // Get employee count
    const employeeCount = await sql`
      SELECT COUNT(*) as count FROM employees 
      WHERE company_id = ${decoded.companyId} AND status = 'active'
    `

    // Get recent payroll total
    const payrollTotal = await sql`
      SELECT COALESCE(SUM(gross_pay), 0) as total 
      FROM payroll_records 
      WHERE company_id = ${decoded.companyId}
      AND pay_period_start >= CURRENT_DATE - INTERVAL '1 month'
    `

    // Get compliance score
    const complianceViolations = await sql`
      SELECT COUNT(*) as count FROM compliance_records 
      WHERE company_id = ${decoded.companyId} 
      AND status = 'violation' 
      AND resolved_at IS NULL
    `

    // Get AI agent activities (last 24 hours)
    const recentActivities = await sql`
      SELECT agent_name, activity_type, description, created_at
      FROM ai_agent_activities 
      WHERE company_id = ${decoded.companyId}
      AND created_at >= CURRENT_TIMESTAMP - INTERVAL '24 hours'
      ORDER BY created_at DESC
      LIMIT 10
    `

    // Calculate compliance score
    const totalEmployees = Number.parseInt(employeeCount[0].count)
    const violations = Number.parseInt(complianceViolations[0].count)
    const complianceScore = totalEmployees > 0 ? Math.max(0, 100 - violations * 10) : 100

    // Get subscription info
    const subscriptionInfo = {
      plan: company.subscription_plan,
      status: company.subscription_status,
      trialEndsAt: company.trial_ends_at,
    }

    return NextResponse.json({
      success: true,
      stats: {
        company: {
          name: company.name,
          employeeCount: totalEmployees,
          industry: company.industry,
        },
        payroll: {
          monthlyTotal: Number.parseFloat(payrollTotal[0].total),
          currency: "MYR",
        },
        compliance: {
          score: complianceScore,
          violations: violations,
          status: violations === 0 ? "compliant" : "needs_attention",
        },
        subscription: subscriptionInfo,
        recentActivities: recentActivities,
      },
    })
  } catch (error) {
    console.error("Dashboard stats error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
