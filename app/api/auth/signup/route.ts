import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { createUser, generateToken } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, password, companyName, industry, employeeCount, phone } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !password || !companyName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if user already exists
    const existingUsers = await sql`
      SELECT id FROM users WHERE email = ${email}
    `

    if (existingUsers.length > 0) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 })
    }

    // Create company first
    const companies = await sql`
      INSERT INTO companies (
        name, industry, employee_count, phone, email, 
        subscription_plan, subscription_status, trial_ends_at
      ) VALUES (
        ${companyName}, ${industry || "Technology"}, ${employeeCount || 0}, 
        ${phone}, ${email}, 'professional', 'trial', 
        ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)} -- 30 days trial
      )
      RETURNING id, name, subscription_plan, subscription_status, trial_ends_at
    `

    const company = companies[0]

    // Create user
    const user = await createUser({
      email,
      password,
      firstName,
      lastName,
      companyId: company.id,
      role: "admin",
    })

    // Generate JWT token
    const token = generateToken(user.id, company.id)

    // Log the signup activity
    await sql`
      INSERT INTO ai_agent_activities (
        company_id, agent_name, activity_type, description, status
      ) VALUES (
        ${company.id}, 'System', 'company_signup', 
        'New company registered: ${companyName}', 'completed'
      )
    `

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        role: user.role,
      },
      company: {
        id: company.id,
        name: company.name,
        subscriptionPlan: company.subscription_plan,
        subscriptionStatus: company.subscription_status,
        trialEndsAt: company.trial_ends_at,
      },
      token,
    })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
