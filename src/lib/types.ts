/**
 * Represents an employee within the company.
 */
export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  salary: number;
  startDate: Date | string; // Accepts Date object or ISO string
  // Add other optional fields as needed, e.g.:
  // email?: string;
  // status?: 'active' | 'inactive';
  [key: string]: any; // For extensibility
}

/**
 * Represents payroll data for a specific pay period.
 */
export interface PayrollData {
  employeeId: string;
  period: string; // e.g. '2025-07'
  grossSalary: number;
  deductions: number;
  netSalary: number;
  paymentMethod: 'crypto' | 'bank' | 'check';
  walletAddress?: string;
  // Optionally add bank account fields if needed
}

/**
 * Represents a compliance report.
 */
export interface ComplianceReport {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'approved' | 'rejected';
  created: Date | string;
  updated: Date | string;
  // Add additional fields as needed
}
