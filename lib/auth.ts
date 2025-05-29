import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { sql } from "./database"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export function generateToken(userId: number, companyId: number): string {
  return jwt.sign({ userId, companyId }, JWT_SECRET, { expiresIn: "7d" })
}

export function verifyToken(token: string): { userId: number; companyId: number } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: number; companyId: number }
  } catch {
    return null
  }
}

export async function createUser(userData: {
  email: string
  password: string
  firstName: string
  lastName: string
  companyId: number
  role?: string
}) {
  const hashedPassword = await hashPassword(userData.password)

  const result = await sql`
    INSERT INTO users (
      company_id, email, password_hash, first_name, last_name, role
    ) VALUES (
      ${userData.companyId}, ${userData.email}, ${hashedPassword}, 
      ${userData.firstName}, ${userData.lastName}, ${userData.role || "user"}
    )
    RETURNING id, email, first_name, last_name, role, company_id, created_at
  `

  return result[0]
}

export async function authenticateUser(email: string, password: string) {
  const users = await sql`
    SELECT u.*, c.name as company_name, c.subscription_plan, c.subscription_status
    FROM users u
    JOIN companies c ON u.company_id = c.id
    WHERE u.email = ${email} AND u.is_active = true
  `

  if (users.length === 0) {
    return null
  }

  const user = users[0]
  const isValid = await verifyPassword(password, user.password_hash)

  if (!isValid) {
    return null
  }

  // Update last login
  await sql`
    UPDATE users 
    SET last_login = CURRENT_TIMESTAMP 
    WHERE id = ${user.id}
  `

  return {
    id: user.id,
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
    role: user.role,
    companyId: user.company_id,
    companyName: user.company_name,
    subscriptionPlan: user.subscription_plan,
    subscriptionStatus: user.subscription_status,
  }
}
