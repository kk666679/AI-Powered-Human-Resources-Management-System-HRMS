// Malaysian Employment Law Compliance Utilities

export interface EPFCalculation {
  employeeContribution: number
  employerContribution: number
  totalContribution: number
}

export interface SOCSORates {
  employeeRate: number
  employerRate: number
  eisEmployeeRate: number
  eisEmployerRate: number
}

export function calculateEPF(salary: number, employeeAge: number): EPFCalculation {
  // EPF rates as of 2024
  const employeeRate = employeeAge >= 60 ? 0 : 0.11 // 11% for employees under 60
  const employerRate = employeeAge >= 60 ? 0.04 : 0.12 // 12% for employees under 60, 4% for 60+

  const employeeContribution = Math.round(salary * employeeRate * 100) / 100
  const employerContribution = Math.round(salary * employerRate * 100) / 100

  return {
    employeeContribution,
    employerContribution,
    totalContribution: employeeContribution + employerContribution,
  }
}

export function calculateSOCSO(salary: number): { employee: number; employer: number; eis: number } {
  // SOCSO rates 2024
  let employeeSOCSO = 0
  let employerSOCSO = 0
  let eisContribution = 0

  if (salary <= 30) {
    employeeSOCSO = 0.1
    employerSOCSO = 0.4
  } else if (salary <= 50) {
    employeeSOCSO = 0.2
    employerSOCSO = 0.7
  } else if (salary <= 70) {
    employeeSOCSO = 0.3
    employerSOCSO = 1.1
  } else if (salary <= 100) {
    employeeSOCSO = 0.4
    employerSOCSO = 1.5
  } else if (salary <= 140) {
    employeeSOCSO = 0.6
    employerSOCSO = 2.1
  } else if (salary <= 200) {
    employeeSOCSO = 0.85
    employerSOCSO = 2.95
  } else if (salary <= 300) {
    employeeSOCSO = 1.25
    employerSOCSO = 4.35
  } else if (salary <= 400) {
    employeeSOCSO = 1.75
    employerSOCSO = 6.15
  } else if (salary <= 500) {
    employeeSOCSO = 2.25
    employerSOCSO = 7.85
  } else if (salary <= 600) {
    employeeSOCSO = 2.75
    employerSOCSO = 9.65
  } else if (salary <= 700) {
    employeeSOCSO = 3.25
    employerSOCSO = 11.35
  } else if (salary <= 800) {
    employeeSOCSO = 3.75
    employerSOCSO = 13.15
  } else if (salary <= 900) {
    employeeSOCSO = 4.25
    employerSOCSO = 14.85
  } else if (salary <= 1000) {
    employeeSOCSO = 4.75
    employerSOCSO = 16.65
  } else if (salary <= 1100) {
    employeeSOCSO = 5.25
    employerSOCSO = 18.35
  } else if (salary <= 1200) {
    employeeSOCSO = 5.75
    employerSOCSO = 20.15
  } else if (salary <= 1300) {
    employeeSOCSO = 6.25
    employerSOCSO = 21.85
  } else if (salary <= 1400) {
    employeeSOCSO = 6.75
    employerSOCSO = 23.65
  } else if (salary <= 1500) {
    employeeSOCSO = 7.25
    employerSOCSO = 25.35
  } else if (salary <= 1600) {
    employeeSOCSO = 7.75
    employerSOCSO = 27.15
  } else if (salary <= 1700) {
    employeeSOCSO = 8.25
    employerSOCSO = 28.85
  } else if (salary <= 1800) {
    employeeSOCSO = 8.75
    employerSOCSO = 30.65
  } else if (salary <= 1900) {
    employeeSOCSO = 9.25
    employerSOCSO = 32.35
  } else if (salary <= 2000) {
    employeeSOCSO = 9.75
    employerSOCSO = 34.15
  } else if (salary <= 2100) {
    employeeSOCSO = 10.25
    employerSOCSO = 35.85
  } else if (salary <= 2200) {
    employeeSOCSO = 10.75
    employerSOCSO = 37.65
  } else if (salary <= 2300) {
    employeeSOCSO = 11.25
    employerSOCSO = 39.35
  } else if (salary <= 2400) {
    employeeSOCSO = 11.75
    employerSOCSO = 41.15
  } else if (salary <= 2500) {
    employeeSOCSO = 12.25
    employerSOCSO = 42.85
  } else if (salary <= 2600) {
    employeeSOCSO = 12.75
    employerSOCSO = 44.65
  } else if (salary <= 2700) {
    employeeSOCSO = 13.25
    employerSOCSO = 46.35
  } else if (salary <= 2800) {
    employeeSOCSO = 13.75
    employerSOCSO = 48.15
  } else if (salary <= 2900) {
    employeeSOCSO = 14.25
    employerSOCSO = 49.85
  } else if (salary <= 3000) {
    employeeSOCSO = 14.75
    employerSOCSO = 51.65
  } else if (salary <= 3500) {
    employeeSOCSO = 17.25
    employerSOCSO = 60.4
  } else if (salary <= 4000) {
    employeeSOCSO = 19.75
    employerSOCSO = 69.15
  } else {
    // Maximum contribution for salaries above RM 4,000
    employeeSOCSO = 19.75
    employerSOCSO = 69.15
  }

  // EIS (Employment Insurance System) - 0.2% employee, 0.2% employer, max RM 4,000 salary
  if (salary <= 4000) {
    eisContribution = Math.round(salary * 0.002 * 100) / 100
  } else {
    eisContribution = 8.0 // Max EIS contribution
  }

  return {
    employee: employeeSOCSO,
    employer: employerSOCSO,
    eis: eisContribution,
  }
}

export function calculateIncomeTax(annualSalary: number, reliefs = 0): number {
  // Malaysian income tax calculation 2024
  const taxableIncome = Math.max(0, annualSalary - reliefs)
  let tax = 0

  if (taxableIncome <= 5000) {
    tax = 0
  } else if (taxableIncome <= 20000) {
    tax = (taxableIncome - 5000) * 0.01
  } else if (taxableIncome <= 35000) {
    tax = 150 + (taxableIncome - 20000) * 0.03
  } else if (taxableIncome <= 50000) {
    tax = 600 + (taxableIncome - 35000) * 0.08
  } else if (taxableIncome <= 70000) {
    tax = 1800 + (taxableIncome - 50000) * 0.13
  } else if (taxableIncome <= 100000) {
    tax = 4400 + (taxableIncome - 70000) * 0.21
  } else if (taxableIncome <= 250000) {
    tax = 10700 + (taxableIncome - 100000) * 0.24
  } else if (taxableIncome <= 400000) {
    tax = 46700 + (taxableIncome - 250000) * 0.245
  } else if (taxableIncome <= 600000) {
    tax = 83450 + (taxableIncome - 400000) * 0.25
  } else if (taxableIncome <= 1000000) {
    tax = 133450 + (taxableIncome - 600000) * 0.26
  } else {
    tax = 237450 + (taxableIncome - 1000000) * 0.28
  }

  return Math.round(tax * 100) / 100
}

export function validateEmploymentActCompliance(employee: any): string[] {
  const violations: string[] = []

  // Check minimum wage (RM 1,500 as of 2024)
  if (employee.salary && employee.salary < 1500) {
    violations.push("Salary below minimum wage of RM 1,500")
  }

  // Check required documents
  if (!employee.ic_number && !employee.passport_number) {
    violations.push("Missing IC number or passport number")
  }

  if (!employee.epf_number && employee.employment_type === "full-time") {
    violations.push("Missing EPF number for full-time employee")
  }

  if (!employee.socso_number && employee.employment_type === "full-time") {
    violations.push("Missing SOCSO number for full-time employee")
  }

  return violations
}

export function generateComplianceReport(companyId: number, employees: any[], payrollRecords: any[]) {
  const report = {
    companyId,
    generatedAt: new Date(),
    totalEmployees: employees.length,
    complianceScore: 0,
    violations: [] as string[],
    epfCompliance: {
      compliant: 0,
      violations: 0,
      totalContributions: 0,
    },
    socsoCompliance: {
      compliant: 0,
      violations: 0,
      totalContributions: 0,
    },
    employmentActCompliance: {
      compliant: 0,
      violations: 0,
    },
  }

  // Check each employee for compliance
  employees.forEach((employee) => {
    const employeeViolations = validateEmploymentActCompliance(employee)

    if (employeeViolations.length === 0) {
      report.employmentActCompliance.compliant++
    } else {
      report.employmentActCompliance.violations++
      report.violations.push(...employeeViolations.map((v) => `Employee ${employee.employee_id}: ${v}`))
    }

    // Check EPF compliance
    if (employee.epf_number || employee.employment_type !== "full-time") {
      report.epfCompliance.compliant++
    } else {
      report.epfCompliance.violations++
    }

    // Check SOCSO compliance
    if (employee.socso_number || employee.employment_type !== "full-time") {
      report.socsoCompliance.compliant++
    } else {
      report.socsoCompliance.violations++
    }
  })

  // Calculate compliance score
  const totalChecks = employees.length * 3 // EPF, SOCSO, Employment Act
  const totalCompliant =
    report.epfCompliance.compliant + report.socsoCompliance.compliant + report.employmentActCompliance.compliant
  report.complianceScore = totalChecks > 0 ? Math.round((totalCompliant / totalChecks) * 100) : 100

  return report
}
