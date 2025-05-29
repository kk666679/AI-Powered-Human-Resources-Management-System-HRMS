import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.NEON_DATABASE_URL!);

export { sql };

// Database types
export interface Company {
  id: number
  name: string
  registration_number?: string
  industry?: string
  employee_count: number
  address?: string
  city?: string
  state?: string
  postal_code?: string
  phone?: string
  email?: string
  subscription_plan: "starter" | "professional" | "enterprise"
  subscription_status: "trial" | "active" | "cancelled" | "expired"
  trial_ends_at?: Date
  created_at: Date
  updated_at: Date
}

export interface User {
  id: number
  company_id: number
  email: string
  first_name: string
  last_name: string
  role: "admin" | "hr_manager" | "user"
  phone?: string
  is_active: boolean
  last_login?: Date
  created_at: Date
  updated_at: Date
}

export interface Employee {
  id: number
  company_id: number
  employee_id: string
  ic_number?: string
  passport_number?: string
  first_name: string
  last_name: string
  email?: string
  phone?: string
  position?: string
  department?: string
  hire_date?: Date
  employment_type: "full-time" | "part-time" | "contract"
  salary?: number
  epf_number?: string
  socso_number?: string
  tax_number?: string
  bank_account?: string
  bank_name?: string
  status: "active" | "inactive" | "terminated"
  created_at: Date
  updated_at: Date
}

export interface PayrollRecord {
  id: number
  company_id: number
  employee_id: number
  pay_period_start: Date
  pay_period_end: Date
  basic_salary: number
  allowances: number
  overtime_pay: number
  gross_pay: number
  epf_employee: number
  epf_employer: number
  socso_employee: number
  socso_employer: number
  eis_employee: number
  eis_employer: number
  income_tax: number
  net_pay: number
  status: "pending" | "processed" | "paid"
  processed_at?: Date
  created_at: Date
}

export interface ComplianceRecord {
  id: number
  company_id: number
  compliance_type: string
  status: "compliant" | "violation" | "pending"
  description?: string
  violation_details?: string
  penalty_amount?: number
  due_date?: Date
  resolved_at?: Date
  ai_agent?: string
  created_at: Date
  updated_at: Date
}

export interface AIAgentActivity {
  id: number
  company_id: number
  agent_name: string
  activity_type: string
  description?: string
  status?: string
  metadata?: any
  created_at: Date
}
