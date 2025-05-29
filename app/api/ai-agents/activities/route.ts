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

    const { searchParams } = new URL(request.url)
    const agentName = searchParams.get("agent")
    const limit = Number.parseInt(searchParams.get("limit") || "50")

    let query = sql`
      SELECT * FROM ai_agent_activities 
      WHERE company_id = ${decoded.companyId}
    `

    if (agentName) {
      query = sql`
        SELECT * FROM ai_agent_activities 
        WHERE company_id = ${decoded.companyId} AND agent_name = ${agentName}
      `
    }

    const activities = await sql`
      ${query}
      ORDER BY created_at DESC
      LIMIT ${limit}
    `

    // Get agent summary stats
    const agentStats = await sql`
      SELECT 
        agent_name,
        COUNT(*) as total_activities,
        COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed,
        COUNT(CASE WHEN status = 'failed' THEN 1 END) as failed,
        COUNT(CASE WHEN created_at >= CURRENT_TIMESTAMP - INTERVAL '24 hours' THEN 1 END) as last_24h
      FROM ai_agent_activities 
      WHERE company_id = ${decoded.companyId}
      GROUP BY agent_name
      ORDER BY total_activities DESC
    `

    return NextResponse.json({
      success: true,
      activities,
      agentStats,
    })
  } catch (error) {
    console.error("AI agent activities error:", error)
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
    const { agentName, activityType, description, status, metadata } = body

    const activities = await sql`
      INSERT INTO ai_agent_activities (
        company_id, agent_name, activity_type, description, status, metadata
      ) VALUES (
        ${decoded.companyId}, ${agentName}, ${activityType}, 
        ${description}, ${status || "pending"}, ${JSON.stringify(metadata || {})}
      )
      RETURNING *
    `

    return NextResponse.json({
      success: true,
      activity: activities[0],
    })
  } catch (error) {
    console.error("Create AI agent activity error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
