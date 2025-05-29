"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Wallet, ExternalLink, Copy, CheckCircle, AlertTriangle } from "lucide-react"

interface WalletInfo {
  address: string
  balance: string
  chain: string
  isConnected: boolean
}

export function Web3WalletConnect() {
  const [wallet, setWallet] = useState<WalletInfo | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Mock wallet connection (replace with actual Web3 wallet integration)
  const connectWallet = async () => {
    setIsConnecting(true)
    setError(null)

    try {
      // Simulate wallet connection
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock wallet data
      const mockWallet: WalletInfo = {
        address: "0x742d35Cc6634C0532925a3b8D4C9db96590c6C87",
        balance: "2.45",
        chain: "Polygon",
        isConnected: true,
      }

      setWallet(mockWallet)

      // Store wallet info in localStorage
      localStorage.setItem("web3_wallet", JSON.stringify(mockWallet))
    } catch (err) {
      setError("Failed to connect wallet. Please try again.")
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    setWallet(null)
    localStorage.removeItem("web3_wallet")
  }

  const copyAddress = () => {
    if (wallet?.address) {
      navigator.clipboard.writeText(wallet.address)
    }
  }

  // Load wallet from localStorage on mount
  useEffect(() => {
    const savedWallet = localStorage.getItem("web3_wallet")
    if (savedWallet) {
      setWallet(JSON.parse(savedWallet))
    }
  }, [])

  if (!wallet) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Wallet className="h-5 w-5" />
            Connect Web3 Wallet
          </CardTitle>
          <CardDescription>Connect your wallet to enable blockchain features</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <Alert className="border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-700">{error}</AlertDescription>
            </Alert>
          )}

          <Button onClick={connectWallet} disabled={isConnecting} className="w-full">
            {isConnecting ? "Connecting..." : "Connect Wallet"}
          </Button>

          <div className="text-center text-sm text-gray-600">
            <p>Supported wallets:</p>
            <div className="flex justify-center gap-2 mt-2">
              <Badge variant="outline">MetaMask</Badge>
              <Badge variant="outline">WalletConnect</Badge>
              <Badge variant="outline">Coinbase</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            Wallet Connected
          </span>
          <Badge className="bg-green-100 text-green-700">
            <CheckCircle className="h-3 w-3 mr-1" />
            Active
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Network:</span>
            <Badge variant="outline">{wallet.chain}</Badge>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Balance:</span>
            <span className="font-semibold">{wallet.balance} MATIC</span>
          </div>

          <div className="space-y-1">
            <span className="text-sm text-gray-600">Address:</span>
            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded border">
              <span className="text-sm font-mono flex-1 truncate">{wallet.address}</span>
              <Button variant="ghost" size="sm" onClick={copyAddress} className="h-6 w-6 p-0">
                <Copy className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={() => window.open(`https://polygonscan.com/address/${wallet.address}`, "_blank")}
              >
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            View Transactions
          </Button>
          <Button variant="outline" size="sm" onClick={disconnectWallet} className="text-red-600 hover:text-red-700">
            Disconnect
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
