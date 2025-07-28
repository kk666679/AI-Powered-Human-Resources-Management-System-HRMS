"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { DollarSign, TrendingUp, Wallet, Send, Clock, CheckCircle, AlertTriangle, Bitcoin, Coins } from "lucide-react"

interface CryptoPayment {
  id: string
  employeeName: string
  employeeWallet: string
  amountMYR: number
  amountCrypto: number
  cryptoSymbol: string
  status: "pending" | "completed" | "failed"
  timestamp: Date
  txHash?: string
}

export function CryptoPayrollDashboard() {
  const [selectedCrypto, setSelectedCrypto] = useState("MATIC")
  const [paymentAmount, setPaymentAmount] = useState("")
  const [selectedEmployee, setSelectedEmployee] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  // Mock data
  const cryptoRates = {
    MATIC: 3.2,
    ETH: 10500,
    BNB: 1200,
    USDC: 4.5,
  }

  const recentPayments: CryptoPayment[] = [
    {
      id: "1",
      employeeName: "Ahmad Rahman",
      employeeWallet: "0x742d35Cc6634C0532925a3b8D4C9db96590c6C87",
      amountMYR: 5000,
      amountCrypto: 1562.5,
      cryptoSymbol: "MATIC",
      status: "completed",
      timestamp: new Date("2024-01-15T10:30:00"),
      txHash: "0xabc123...",
    },
    {
      id: "2",
      employeeName: "Sarah Lim",
      employeeWallet: "0x123abc456def789012345678901234567890abcd",
      amountMYR: 4500,
      amountCrypto: 1000,
      cryptoSymbol: "USDC",
      status: "pending",
      timestamp: new Date("2024-01-15T09:15:00"),
    },
    {
      id: "3",
      employeeName: "Raj Kumar",
      employeeWallet: "0x987fed654cba321098765432109876543210fedc",
      amountMYR: 6000,
      amountCrypto: 0.571,
      cryptoSymbol: "ETH",
      status: "completed",
      timestamp: new Date("2024-01-14T16:45:00"),
      txHash: "0xdef456...",
    },
  ]

  const totalPayrollMYR = recentPayments.reduce((sum, payment) => sum + payment.amountMYR, 0)
  const completedPayments = recentPayments.filter((p) => p.status === "completed").length
  const pendingPayments = recentPayments.filter((p) => p.status === "pending").length

  const processCryptoPayment = async () => {
    if (!paymentAmount || !selectedEmployee || !selectedCrypto) return

    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsProcessing(false)
    setPaymentAmount("")
    setSelectedEmployee("")

    // In real implementation, this would call the blockchain payment function
  }

  const convertMYRToCrypto = (myrAmount: number, crypto: string): number => {
    return myrAmount / (cryptoRates[crypto as keyof typeof cryptoRates] || 1)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "failed":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700"
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      case "failed":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Crypto Payroll</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">RM {totalPayrollMYR.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Payments</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedPayments}</div>
            <p className="text-xs text-muted-foreground">Successful transactions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingPayments}</div>
            <p className="text-xs text-muted-foreground">Awaiting confirmation</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gas Savings</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">RM 2,340</div>
            <p className="text-xs text-muted-foreground">vs traditional banking</p>
          </CardContent>
        </Card>
      </div>

      {/* Payment Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Send className="h-5 w-5" />
            Send Crypto Payment
          </CardTitle>
          <CardDescription>Process payroll payments using cryptocurrency</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="employee">Employee</Label>
              <Select value={selectedEmployee} onValueChange={setSelectedEmployee}>
                <SelectTrigger>
                  <SelectValue placeholder="Select employee" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ahmad">Ahmad Rahman</SelectItem>
                  <SelectItem value="sarah">Sarah Lim</SelectItem>
                  <SelectItem value="raj">Raj Kumar</SelectItem>
                  <SelectItem value="fatimah">Fatimah Abdullah</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="crypto">Cryptocurrency</Label>
              <Select value={selectedCrypto} onValueChange={setSelectedCrypto}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MATIC">
                    <div className="flex items-center gap-2">
                      <Coins className="h-4 w-4" />
                      MATIC (Polygon)
                    </div>
                  </SelectItem>
                  <SelectItem value="ETH">
                    <div className="flex items-center gap-2">
                      <Bitcoin className="h-4 w-4" />
                      ETH (Ethereum)
                    </div>
                  </SelectItem>
                  <SelectItem value="BNB">
                    <div className="flex items-center gap-2">
                      <Coins className="h-4 w-4" />
                      BNB (BSC)
                    </div>
                  </SelectItem>
                  <SelectItem value="USDC">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      USDC (Stablecoin)
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Amount (MYR)</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount in MYR"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
            />
            {paymentAmount && selectedCrypto && (
              <p className="text-sm text-gray-600">
                ≈ {convertMYRToCrypto(Number.parseFloat(paymentAmount), selectedCrypto).toFixed(6)} {selectedCrypto}
              </p>
            )}
          </div>

          <Alert className="border-blue-200 bg-blue-50">
            <Wallet className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-700">
              Crypto payments are processed on the blockchain and may take 1-5 minutes to confirm. Gas fees will be
              automatically calculated.
            </AlertDescription>
          </Alert>

          <Button
            onClick={processCryptoPayment}
            disabled={!paymentAmount || !selectedEmployee || !selectedCrypto || isProcessing}
            className="w-full"
          >
            {isProcessing ? "Processing Payment..." : "Send Crypto Payment"}
          </Button>
        </CardContent>
      </Card>

      {/* Recent Payments */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Crypto Payments</CardTitle>
          <CardDescription>Latest cryptocurrency payroll transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPayments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  {getStatusIcon(payment.status)}
                  <div>
                    <div className="font-semibold">{payment.employeeName}</div>
                    <div className="text-sm text-gray-600 font-mono">
                      {payment.employeeWallet.slice(0, 10)}...{payment.employeeWallet.slice(-8)}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-semibold">
                    {payment.amountCrypto.toFixed(payment.cryptoSymbol === "ETH" ? 6 : 2)} {payment.cryptoSymbol}
                  </div>
                  <div className="text-sm text-gray-600">RM {payment.amountMYR.toLocaleString()}</div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(payment.status)}>{payment.status}</Badge>
                  {payment.txHash && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(`https://polygonscan.com/tx/${payment.txHash}`, "_blank")}
                    >
                      View TX
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
