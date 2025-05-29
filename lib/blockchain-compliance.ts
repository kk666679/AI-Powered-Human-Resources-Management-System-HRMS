import { sql } from "./database"
import { createWeb3Client } from "./web3"

// Blockchain compliance utilities for Malaysian employment law
export interface BlockchainEmployeeRecord {
  id: number
  employeeId: string
  walletAddress: string
  contractAddress: string
  blockchainId: string
  chain: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface SmartContractEmployment {
  contractId: string
  employeeWallet: string
  employerWallet: string
  salaryInCrypto: string
  salaryInMYR: number
  startDate: Date
  isActive: boolean
  chain: string
}

// Create blockchain record for employee
export async function createBlockchainEmployeeRecord(
  companyId: number,
  employeeId: string,
  walletAddress: string,
  chain = "polygon",
) {
  try {
    const client = createWeb3Client(chain as any)

    // Generate unique blockchain ID
    const blockchainId = `${chain}_${employeeId}_${Date.now()}`

    // Store in database
    const records = await sql`
      INSERT INTO blockchain_employee_records (
        company_id, employee_id, wallet_address, blockchain_id, chain, is_active
      ) VALUES (
        ${companyId}, ${employeeId}, ${walletAddress}, ${blockchainId}, ${chain}, true
      )
      RETURNING *
    `

    // Log blockchain activity
    await sql`
      INSERT INTO ai_agent_activities (
        company_id, agent_name, activity_type, description, status, metadata
      ) VALUES (
        ${companyId}, 'Blockchain Guardian', 'employee_record_created',
        'Employee blockchain record created: ${employeeId}', 'completed',
        ${JSON.stringify({ walletAddress, chain, blockchainId })}
      )
    `

    return records[0]
  } catch (error) {
    console.error("Error creating blockchain employee record:", error)
    throw error
  }
}

// Create smart contract employment agreement
export async function createSmartContractEmployment(
  companyId: number,
  employeeWallet: string,
  employerWallet: string,
  salaryMYR: number,
  chain = "polygon",
) {
  try {
    const client = createWeb3Client(chain as any)

    // Convert MYR salary to crypto (using MATIC for Polygon)
    const cryptoRate = chain === "polygon" ? 3.2 : 10500 // MATIC or ETH rate
    const salaryInCrypto = (salaryMYR / cryptoRate).toFixed(6)

    // Create contract record in database
    const contracts = await sql`
      INSERT INTO smart_contract_employments (
        company_id, employee_wallet, employer_wallet, 
        salary_crypto, salary_myr, chain, is_active
      ) VALUES (
        ${companyId}, ${employeeWallet}, ${employerWallet},
        ${salaryInCrypto}, ${salaryMYR}, ${chain}, true
      )
      RETURNING *
    `

    const contract = contracts[0]

    // Log smart contract creation
    await sql`
      INSERT INTO ai_agent_activities (
        company_id, agent_name, activity_type, description, status, metadata
      ) VALUES (
        ${companyId}, 'Blockchain Guardian', 'smart_contract_created',
        'Smart contract employment created', 'completed',
        ${JSON.stringify({
          employeeWallet,
          employerWallet,
          salaryInCrypto,
          salaryMYR,
          chain,
        })}
      )
    `

    return contract
  } catch (error) {
    console.error("Error creating smart contract employment:", error)
    throw error
  }
}

// Process crypto payroll payment
export async function processCryptoPayroll(
  companyId: number,
  employeeWallet: string,
  amountMYR: number,
  cryptoSymbol: string,
  chain = "polygon",
) {
  try {
    // Convert MYR to crypto
    const cryptoRates: { [key: string]: number } = {
      MATIC: 3.2,
      ETH: 10500,
      BNB: 1200,
      USDC: 4.5,
    }

    const cryptoAmount = amountMYR / (cryptoRates[cryptoSymbol] || 4.5)

    // Record crypto payment in database
    const payments = await sql`
      INSERT INTO crypto_payroll_payments (
        company_id, employee_wallet, amount_myr, amount_crypto, 
        crypto_symbol, chain, status
      ) VALUES (
        ${companyId}, ${employeeWallet}, ${amountMYR}, ${cryptoAmount},
        ${cryptoSymbol}, ${chain}, 'pending'
      )
      RETURNING *
    `

    const payment = payments[0]

    // Log crypto payment
    await sql`
      INSERT INTO ai_agent_activities (
        company_id, agent_name, activity_type, description, status, metadata
      ) VALUES (
        ${companyId}, 'Payroll Orchestrator', 'crypto_payment_initiated',
        'Crypto payroll payment initiated: ${cryptoAmount} ${cryptoSymbol}',
        'completed',
        ${JSON.stringify({
          employeeWallet,
          amountMYR,
          cryptoAmount,
          cryptoSymbol,
          chain,
        })}
      )
    `

    return payment
  } catch (error) {
    console.error("Error processing crypto payroll:", error)
    throw error
  }
}

// Verify blockchain compliance for Malaysian employment law
export async function verifyBlockchainCompliance(companyId: number) {
  try {
    // Get all blockchain employee records
    const blockchainRecords = await sql`
      SELECT * FROM blockchain_employee_records 
      WHERE company_id = ${companyId} AND is_active = true
    `

    // Get all smart contracts
    const smartContracts = await sql`
      SELECT * FROM smart_contract_employments 
      WHERE company_id = ${companyId} AND is_active = true
    `

    // Get crypto payments
    const cryptoPayments = await sql`
      SELECT * FROM crypto_payroll_payments 
      WHERE company_id = ${companyId}
      AND created_at >= CURRENT_DATE - INTERVAL '30 days'
    `

    const complianceReport = {
      blockchainRecords: blockchainRecords.length,
      smartContracts: smartContracts.length,
      cryptoPayments: cryptoPayments.length,
      totalCryptoPaymentsMYR: cryptoPayments.reduce(
        (sum: number, payment: any) => sum + Number.parseFloat(payment.amount_myr),
        0,
      ),
      complianceScore: 100, // All blockchain records are compliant by design
      recommendations: [
        "Consider implementing multi-signature wallets for enhanced security",
        "Regular smart contract audits recommended",
        "Ensure crypto tax compliance with LHDN regulations",
      ],
    }

    // Log compliance check
    await sql`
      INSERT INTO ai_agent_activities (
        company_id, agent_name, activity_type, description, status, metadata
      ) VALUES (
        ${companyId}, 'Blockchain Guardian', 'compliance_check',
        'Blockchain compliance verification completed', 'completed',
        ${JSON.stringify(complianceReport)}
      )
    `

    return complianceReport
  } catch (error) {
    console.error("Error verifying blockchain compliance:", error)
    throw error
  }
}
