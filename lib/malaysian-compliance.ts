// Malaysian Employment Law Compliance Utilities

// --- Constants ---
const MINIMUM_WAGE = 1700; // Minimum wage RM 1,700 as of 2024
const MAX_EIS_SALARY = 4000;
const EIS_RATE = 0.002;
const MAX_EIS_CONTRIBUTION = 8.0;

// --- Interfaces ---
export interface EPFCalculation {
  employeeContribution: number;
  employerContribution: number;
  totalContribution: number;
}

export interface SOCSOContributions {
  employee: number;
  employer: number;
  eis: number;
}

export interface Employee {
  employee_id: string | number;
  salary: number;
  employment_type: 'full-time' | 'part-time' | string;
  ic_number?: string;
  passport_number?: string;
  epf_number?: string;
  socso_number?: string;
  [key: string]: any;
}

export interface PayrollRecord {
  employee_id: string | number;
  salary: number;
  // Extend as needed
}

export interface ComplianceReport {
  companyId: number;
  generatedAt: string; // ISO
  totalEmployees: number;
  complianceScore: number;
  violations: string[];
  epfCompliance: {
    compliant: number;
    violations: number;
    totalContributions: number;
  };
  socsoCompliance: {
    compliant: number;
    violations: number;
    totalContributions: number;
  };
  employmentActCompliance: {
    compliant: number;
    violations: number;
  };
}

// --- EPF Calculation ---
export function calculateEPF(salary: number, employeeAge: number): EPFCalculation {
  // EPF rates as of 2024
  const employeeRate = employeeAge >= 60 ? 0 : 0.11; // 11% for under 60
  const employerRate = employeeAge >= 60 ? 0.04 : 0.12; // 12% for under 60, 4% for 60+

  const employeeContribution = Math.round(salary * employeeRate * 100) / 100;
  const employerContribution = Math.round(salary * employerRate * 100) / 100;

  return {
    employeeContribution,
    employerContribution,
    totalContribution: employeeContribution + employerContribution,
  };
}

// --- SOCSO Calculation ---
const socsoTable: { max: number; employee: number; employer: number }[] = [
  { max: 30, employee: 0.1, employer: 0.4 },
  { max: 50, employee: 0.2, employer: 0.7 },
  { max: 70, employee: 0.3, employer: 1.1 },
  { max: 100, employee: 0.4, employer: 1.5 },
  { max: 140, employee: 0.6, employer: 2.1 },
  { max: 200, employee: 0.85, employer: 2.95 },
  { max: 300, employee: 1.25, employer: 4.35 },
  { max: 400, employee: 1.75, employer: 6.15 },
  { max: 500, employee: 2.25, employer: 7.85 },
  { max: 600, employee: 2.75, employer: 9.65 },
  { max: 700, employee: 3.25, employer: 11.35 },
  { max: 800, employee: 3.75, employer: 13.15 },
  { max: 900, employee: 4.25, employer: 14.85 },
  { max: 1000, employee: 4.75, employer: 16.65 },
  { max: 1100, employee: 5.25, employer: 18.35 },
  { max: 1200, employee: 5.75, employer: 20.15 },
  { max: 1300, employee: 6.25, employer: 21.85 },
  { max: 1400, employee: 6.75, employer: 23.65 },
  { max: 1500, employee: 7.25, employer: 25.35 },
  { max: 1600, employee: 7.75, employer: 27.15 },
  { max: 1700, employee: 8.25, employer: 28.85 },
  { max: 1800, employee: 8.75, employer: 30.65 },
  { max: 1900, employee: 9.25, employer: 32.35 },
  { max: 2000, employee: 9.75, employer: 34.15 },
  { max: 2100, employee: 10.25, employer: 35.85 },
  { max: 2200, employee: 10.75, employer: 37.65 },
  { max: 2300, employee: 11.25, employer: 39.35 },
  { max: 2400, employee: 11.75, employer: 41.15 },
  { max: 2500, employee: 12.25, employer: 42.85 },
  { max: 2600, employee: 12.75, employer: 44.65 },
  { max: 2700, employee: 13.25, employer: 46.35 },
  { max: 2800, employee: 13.75, employer: 48.15 },
  { max: 2900, employee: 14.25, employer: 49.85 },
  { max: 3000, employee: 14.75, employer: 51.65 },
  { max: 3500, employee: 17.25, employer: 60.4 },
  { max: 4000, employee: 19.75, employer: 69.15 },
];

export function calculateSOCSO(salary: number): SOCSOContributions {
  let employeeSOCSO = 19.75;
  let employerSOCSO = 69.15;

  for (const bracket of socsoTable) {
    if (salary <= bracket.max) {
      employeeSOCSO = bracket.employee;
      employerSOCSO = bracket.employer;
      break;
    }
  }

  // EIS calculation
  const eisContribution =
    salary <= MAX_EIS_SALARY
      ? Math.round(salary * EIS_RATE * 100) / 100
      : MAX_EIS_CONTRIBUTION;

  return {
    employee: employeeSOCSO,
    employer: employerSOCSO,
    eis: eisContribution,
  };
}

// --- Income Tax Calculation ---
export function calculateIncomeTax(annualSalary: number, reliefs = 0): number {
  const taxableIncome = Math.max(0, annualSalary - reliefs);
  let tax = 0;

  if (taxableIncome <= 5000) tax = 0;
  else if (taxableIncome <= 20000) tax = (taxableIncome - 5000) * 0.01;
  else if (taxableIncome <= 35000) tax = 150 + (taxableIncome - 20000) * 0.03;
  else if (taxableIncome <= 50000) tax = 600 + (taxableIncome - 35000) * 0.08;
  else if (taxableIncome <= 70000) tax = 1800 + (taxableIncome - 50000) * 0.13;
  else if (taxableIncome <= 100000) tax = 4400 + (taxableIncome - 70000) * 0.21;
  else if (taxableIncome <= 250000) tax = 10700 + (taxableIncome - 100000) * 0.24;
  else if (taxableIncome <= 400000) tax = 46700 + (taxableIncome - 250000) * 0.245;
  else if (taxableIncome <= 600000) tax = 83450 + (taxableIncome - 400000) * 0.25;
  else if (taxableIncome <= 1000000) tax = 133450 + (taxableIncome - 600000) * 0.26;
  else tax = 237450 + (taxableIncome - 1000000) * 0.28;

  return Math.round(tax * 100) / 100;
}

// --- Employment Act Compliance ---
export function validateEmploymentActCompliance(employee: Employee): string[] {
  const violations: string[] = [];
  if (employee.salary < MINIMUM_WAGE) {
    violations.push(`Salary below minimum wage of RM ${MINIMUM_WAGE}`);
  }
  if (!employee.ic_number && !employee.passport_number) {
    violations.push("Missing IC number or passport number");
  }
  if (!employee.epf_number && employee.employment_type === "full-time") {
    violations.push("Missing EPF number for full-time employee");
  }
  if (!employee.socso_number && employee.employment_type === "full-time") {
    violations.push("Missing SOCSO number for full-time employee");
  }
  return violations;
}

// --- Compliance Report ---
export function generateComplianceReport(
  companyId: number,
  employees: Employee[],
  payrollRecords: PayrollRecord[]
): ComplianceReport {
  const report: ComplianceReport = {
    companyId,
    generatedAt: new Date().toISOString(),
    totalEmployees: employees.length,
    complianceScore: 0,
    violations: [],
    epfCompliance: { compliant: 0, violations: 0, totalContributions: 0 },
    socsoCompliance: { compliant: 0, violations: 0, totalContributions: 0 },
    employmentActCompliance: { compliant: 0, violations: 0 },
  };

  for (const employee of employees) {
    const violations = validateEmploymentActCompliance(employee);
    if (violations.length === 0) report.employmentActCompliance.compliant++;
    else {
      report.employmentActCompliance.violations++;
      report.violations.push(...violations.map((v) => `Employee ${employee.employee_id}: ${v}`));
    }

    // Only check EPF/SOCSO for full-time
    if (employee.employment_type === "full-time" && employee.epf_number) {
      report.epfCompliance.compliant++;
    } else if (employee.employment_type === "full-time") {
      report.epfCompliance.violations++;
    }

    if (employee.employment_type === "full-time" && employee.socso_number) {
      report.socsoCompliance.compliant++;
    } else if (employee.employment_type === "full-time") {
      report.socsoCompliance.violations++;
    }
  }

  const totalChecks = employees.length * 3;
  const totalCompliant =
    report.epfCompliance.compliant +
    report.socsoCompliance.compliant +
    report.employmentActCompliance.compliant;
  report.complianceScore = totalChecks > 0 ? Math.round((totalCompliant / totalChecks) * 100) : 100;

  return report;
}
