// lib/types.ts
export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  salary: number;
  startDate: Date;
  // Add other fields as needed
}

export interface PayrollData {
  employeeId: string;
  period: string;
  grossSalary: number;
  deductions: number;
  netSalary: number;
  paymentMethod: 'crypto' | 'bank' | 'check';
  walletAddress?: string;
}

export interface ComplianceReport {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'approved' | 'rejected';
  created: Date;
  updated: Date;
}