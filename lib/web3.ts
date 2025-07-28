import { createPublicClient, http, parseEther, formatEther } from "viem";
import { mainnet, polygon, bsc } from "viem/chains";
import { privateKeyToAccount, createWalletClient as viemCreateWalletClient } from "viem/accounts";
import Web3 from "web3";

// Web3 Configuration
export const SUPPORTED_CHAINS = {
  ethereum: mainnet,
  polygon: polygon,
  bsc: bsc,
} as const;

export type SupportedChain = keyof typeof SUPPORTED_CHAINS;

// Create public client for reading blockchain data
export function createWeb3Client(chain: SupportedChain = "polygon") {
  return createPublicClient({
    chain: SUPPORTED_CHAINS[chain],
    transport: http(),
  });
}

// Create wallet client for transactions (fixed: use imported viemCreateWalletClient)
export function createWalletClient(privateKey: string, chain: SupportedChain = "polygon") {
  const account = privateKeyToAccount(privateKey as `0x${string}`);
  return viemCreateWalletClient({
    account,
    chain: SUPPORTED_CHAINS[chain],
    transport: http(),
  });
}

// Smart Contract ABIs
export const EMPLOYMENT_CONTRACT_ABI = [
  {
    inputs: [
      { name: "employee", type: "address" },
      { name: "employer", type: "address" },
      { name: "salary", type: "uint256" },
      { name: "startDate", type: "uint256" },
    ],
    name: "createEmploymentContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ name: "contractId", type: "uint256" }],
    name: "terminateContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { name: "contractId", type: "uint256" },
      { name: "amount", type: "uint256" },
    ],
    name: "payEmployee",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ name: "contractId", type: "uint256" }],
    name: "getContract",
    outputs: [
      { name: "employee", type: "address" },
      { name: "employer", type: "address" },
      { name: "salary", type: "uint256" },
      { name: "startDate", type: "uint256" },
      { name: "isActive", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export const PAYROLL_TOKEN_ABI = [
  {
    inputs: [
      { name: "to", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

// Contract addresses (replace with actual deployed addresses)
export const CONTRACT_ADDRESSES = {
  polygon: {
    employmentContract: "0x1234567890123456789012345678901234567890" as `0x${string}`,
    payrollToken: "0x0987654321098765432109876543210987654321" as `0x${string}`,
  },
  ethereum: {
    employmentContract: "0x1111111111111111111111111111111111111111" as `0x${string}`,
    payrollToken: "0x2222222222222222222222222222222222222222" as `0x${string}`,
  },
  bsc: {
    employmentContract: "0x3333333333333333333333333333333333333333" as `0x${string}`,
    payrollToken: "0x4444444444444444444444444444444444444444" as `0x${string}`,
  },
};

// Utility functions
export function formatCrypto(amount: bigint, decimals = 18): string {
  // Optionally use decimals param for more token types
  return formatEther(amount);
}

export function parseCrypto(amount: string): bigint {
  return parseEther(amount);
}

// Malaysian Ringgit to Crypto conversion (mock rates)
export const CRYPTO_RATES = {
  ETH: 10500, // 1 ETH = 10,500 MYR
  MATIC: 3.2, // 1 MATIC = 3.2 MYR
  BNB: 1200, // 1 BNB = 1,200 MYR
  USDC: 4.5, // 1 USDC = 4.5 MYR
};

export function convertMYRToCrypto(myrAmount: number, cryptoSymbol: keyof typeof CRYPTO_RATES): number {
  return myrAmount / CRYPTO_RATES[cryptoSymbol];
}

export function convertCryptoToMYR(cryptoAmount: number, cryptoSymbol: keyof typeof CRYPTO_RATES): number {
  return cryptoAmount * CRYPTO_RATES[cryptoSymbol];
}

declare global {
  interface Window {
    ethereum?: any;
    web3?: any;
  }
}

/**
 * Returns an initialized web3 instance using the browser's provider.
 */
export const getWeb3 = async (): Promise<Web3> => {
  if (typeof window !== "undefined" && window.ethereum) {
    try {
      await window.ethereum.request?.({ method: "eth_requestAccounts" });
      return new Web3(window.ethereum);
    } catch (error) {
      console.error("User denied account access", error);
      throw new Error("User denied account access");
    }
  } else if (typeof window !== "undefined" && window.web3) {
    return new Web3(window.web3.currentProvider);
  } else {
    throw new Error("No Ethereum provider detected");
  }
};

export const getAccounts = async (): Promise<string[]> => {
  const web3 = await getWeb3();
  return web3.eth.getAccounts();
};

export const sendTransaction = async (from: string, to: string, amount: string) => {
  const web3 = await getWeb3();
  const value = web3.utils.toWei(amount, "ether");
  return web3.eth.sendTransaction({
    from,
    to,
    value,
  });
};
