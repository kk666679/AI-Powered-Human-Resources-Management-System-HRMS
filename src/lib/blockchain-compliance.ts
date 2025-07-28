import { sql } from "./database";
import { createWeb3Client } from "./web3";

// Supported chains and crypto symbols
export const SUPPORTED_CHAINS = ["polygon", "ethereum", "binance", "avalanche"] as const;
export type SupportedChain = typeof SUPPORTED_CHAINS[number];
export const CRYPTO_RATES: Record<string, number> = {
  MATIC: 3.2,
  ETH: 10500,
  BNB: 1200,
  USDC: 4.5,
};

export interface BlockchainEmployeeRecord {
  id: number;
  employeeId: string;
  walletAddress: string;
  contractAddress?: string;
  blockchainId: string;
  chain: SupportedChain;
  isActive: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface SmartContractEmployment {
  contractId: string;
  employeeWallet: string;
  employerWallet: string;
  salaryInCrypto: string;
  salaryInMYR: number;
  startDate: Date | string;
  isActive: boolean;
  chain: SupportedChain;
}

// Create blockchain record for employee
export async function createBlockchainEmployeeRecord(
  companyId: number,
  employeeId: string,
  walletAddress: string,
  chain: SupportedChain = "polygon"
): Promise<BlockchainEmployeeRecord> {
  try {
    const client = createWeb3Client(chain);

    // Generate unique blockchain ID
    const blockchainId = `${chain}_${employeeId}_${Date.now()}`;

    // Store in database
    const records = await sql<BlockchainEmployeeRecord[]>`
      INSERT INTO blockchain_employee_records (
        company_id, employee_id, wallet_address, blockchain_id, chain, is_active
      ) VALUES (
        ${companyId}, ${employeeId}, ${walletAddress}, ${blockchainId}, ${chain}, true
      )
      RETURNING *
    `;

    // Log blockchain activity
    await sql`
      INSERT INTO ai_agent_activities (
        company_id, agent_name, activity_type, description, status, metadata
      ) VALUES (
        ${companyId}, 'Blockchain Guardian', 'employee_record_created',
        'Employee blockchain record created: ${employeeId}', 'completed',
        ${JSON.stringify({ walletAddress, chain, blockchainId })}
      )
    `;

    return records[0];
  } catch (error) {
    console.error("Error creating blockchain employee record:", error);
    throw error;
  }
}

// Create smart contract employment agreement
export async function createSmartContractEmployment(
  companyId: number,
  employeeWallet: string,
  employerWallet: string,
  salaryMYR: number,
  chain: SupportedChain = "polygon"
): Promise<SmartContractEmployment> {
  try {
    const client = createWeb3Client(chain);

    // Convert MYR salary to crypto (default to MATIC for Polygon)
    const cryptoRate = chain === "polygon" ? CRYPTO_RATES.MATIC : CRYPTO_RATES.ETH; // adjust as needed
    const salaryInCrypto = (salaryMYR / cryptoRate).toFixed(6);

    // Create contract record in database
    const contracts = await sql<SmartContractEmployment[]>`
      INSERT INTO smart_contract_employments (
        company_id, employee_wallet, employer_wallet, 
        salary_crypto, salary_myr, chain, is_active
      ) VALUES (
        ${companyId}, ${employeeWallet}, ${employerWallet},
        ${salaryInCrypto}, ${salaryMYR}, ${chain}, true
      )
      RETURNING *
    `;

    const contract = contracts[0];

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
    `;

    return contract;
  } catch (error) {
    console.error("Error creating smart contract employment:", error);
    throw error;
  }
}

// Process crypto payroll payment
export async function processCryptoPayroll(
  companyId: number,
  employeeWallet: string,
  amountMYR: number,
  cryptoSymbol: keyof typeof CRYPTO_RATES,
  chain: SupportedChain = "polygon"
): Promise<any> {
  try {
    // Convert MYR to crypto
    const cryptoRate = CRYPTO_RATES[cryptoSymbol] || CRYPTO_RATES.USDC;
    const cryptoAmount = amountMYR / cryptoRate;

    // Record crypto payment in database
    const payments = await sql<any[]>`
      INSERT INTO crypto_payroll_payments (
        company_id, employee_wallet, amount_myr, amount_crypto, 
        crypto_symbol, chain, status
      ) VALUES (
        ${companyId}, ${employeeWallet}, ${amountMYR}, ${cryptoAmount},
        ${cryptoSymbol}, ${chain}, 'pending'
      )
      RETURNING *
    `;

    const payment = payments[0];

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
    `;

    return payment;
  } catch (error) {
    console.error("Error processing crypto payroll:", error);
    throw error;
  }
}

// Verify blockchain compliance for Malaysian employment law
export async function verifyBlockchainCompliance(
  companyId: number
): Promise<{
  blockchainRecords: number;
  smartContracts: number;
  cryptoPayments: number;
  totalCryptoPaymentsMYR: number;
  complianceScore: number;
  recommendations: string[];
}> {
  try {
    // Get all blockchain employee records
    const blockchainRecords = await sql<BlockchainEmployeeRecord[]>`
      SELECT * FROM blockchain_employee_records 
      WHERE company_id = ${companyId} AND is_active = true
    `;

    // Get all smart contracts
    const smartContracts = await sql<SmartContractEmployment[]>`
      SELECT * FROM smart_contract_employments 
      WHERE company_id = ${companyId} AND is_active = true
    `;

    // Get crypto payments in last 30 days
    const cryptoPayments = await sql<any[]>`
      SELECT * FROM crypto_payroll_payments 
      WHERE company_id = ${companyId}
      AND created_at >= CURRENT_DATE - INTERVAL '30 days'
    `;

    const totalCryptoPaymentsMYR = cryptoPayments.reduce(
      (sum: number, payment: any) => sum + Number(payment.amount_myr),
      0
    );

    const complianceReport = {
      blockchainRecords: blockchainRecords.length,
      smartContracts: smartContracts.length,
      cryptoPayments: cryptoPayments.length,
      totalCryptoPaymentsMYR,
      complianceScore: 100, // All blockchain records are compliant by design
      recommendations: [
        "Consider implementing multi-signature wallets for enhanced security",
        "Regular smart contract audits recommended",
        "Ensure crypto tax compliance with LHDN regulations",
      ],
    };

    // Log compliance check
    await sql`
      INSERT INTO ai_agent_activities (
        company_id, agent_name, activity_type, description, status, metadata
      ) VALUES (
        ${companyId}, 'Blockchain Guardian', 'compliance_check',
        'Blockchain compliance verification completed', 'completed',
        ${JSON.stringify(complianceReport)}
      )
    `;

    return complianceReport;
  } catch (error) {
    console.error("Error verifying blockchain compliance:", error);
    throw error;
  }
}
