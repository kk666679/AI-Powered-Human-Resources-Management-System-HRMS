import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Web3WalletConnect } from "@/components/web3-wallet-connect"
import { CryptoPayrollDashboard } from "@/components/crypto-payroll-dashboard"
import { BlockchainComplianceDashboard } from "@/components/blockchain-compliance-dashboard"
import { Wallet, Shield, Coins, Lock, Globe, TrendingUp, FileText, Users, Zap } from "lucide-react"

export default function Web3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mb-6">
            <Wallet className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Web3 HR Management</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary blockchain-powered HR system with smart contracts, crypto payroll, and decentralized employee
            records. The future of Malaysian employment management.
          </p>
          <div className="flex gap-2 justify-center mt-4">
            <Badge className="bg-purple-100 text-purple-700 px-4 py-2">
              <Shield className="mr-2 h-4 w-4" />
              Blockchain Secured
            </Badge>
            <Badge className="bg-blue-100 text-blue-700 px-4 py-2">
              <Coins className="mr-2 h-4 w-4" />
              Crypto Payroll
            </Badge>
            <Badge className="bg-green-100 text-green-700 px-4 py-2">
              <Lock className="mr-2 h-4 w-4" />
              Smart Contracts
            </Badge>
          </div>
        </div>

        {/* Web3 Features Overview */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-500" />
                Immutable Records
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Employee data stored on blockchain with cryptographic verification and tamper-proof history.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Permanent employment history</li>
                <li>• Verified credentials</li>
                <li>• Audit trail compliance</li>
                <li>• Data integrity guarantee</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Coins className="h-5 w-5 text-blue-500" />
                Crypto Payroll
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Process salary payments using cryptocurrency with automatic conversion and compliance tracking.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multi-currency support</li>
                <li>• Instant global payments</li>
                <li>• Lower transaction fees</li>
                <li>• Tax compliance automation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-green-500" />
                Smart Contracts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Automated employment agreements with built-in Malaysian labor law compliance and execution.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Self-executing contracts</li>
                <li>• Automated compliance</li>
                <li>• Dispute prevention</li>
                <li>• Transparent terms</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Wallet Connection */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <div className="md:col-span-1">
            <Web3WalletConnect />
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Blockchain Networks
                </CardTitle>
                <CardDescription>Supported blockchain networks for HR operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 border rounded-lg text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-purple-600 font-bold">P</span>
                    </div>
                    <h3 className="font-semibold mb-1">Polygon</h3>
                    <p className="text-sm text-gray-600">Low fees, fast transactions</p>
                    <Badge className="mt-2 bg-green-100 text-green-700">Primary</Badge>
                  </div>

                  <div className="p-4 border rounded-lg text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold">E</span>
                    </div>
                    <h3 className="font-semibold mb-1">Ethereum</h3>
                    <p className="text-sm text-gray-600">Secure, decentralized</p>
                    <Badge className="mt-2 bg-blue-100 text-blue-700">Supported</Badge>
                  </div>

                  <div className="p-4 border rounded-lg text-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-yellow-600 font-bold">B</span>
                    </div>
                    <h3 className="font-semibold mb-1">BSC</h3>
                    <p className="text-sm text-gray-600">High performance</p>
                    <Badge className="mt-2 bg-yellow-100 text-yellow-700">Available</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Crypto Payroll Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cryptocurrency Payroll</h2>
            <p className="text-lg text-gray-600">
              Process employee salaries using digital currencies with automatic Malaysian tax compliance
            </p>
          </div>
          <CryptoPayrollDashboard />
        </div>

        {/* Blockchain Compliance Section */}
        <div className="mb-12">
          <BlockchainComplianceDashboard />
        </div>

        {/* Benefits Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Why Choose Web3 HR?</CardTitle>
            <CardDescription>Revolutionary advantages of blockchain-powered human resource management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Cost Reduction</h3>
                  <p className="text-sm text-gray-600">
                    Reduce banking fees by up to 80% with direct crypto payments and eliminate intermediaries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Instant Payments</h3>
                  <p className="text-sm text-gray-600">
                    Process payroll in minutes instead of days with blockchain-based transactions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Enhanced Security</h3>
                  <p className="text-sm text-gray-600">
                    Cryptographic security ensures data integrity and prevents unauthorized access.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Global Accessibility</h3>
                  <p className="text-sm text-gray-600">
                    Enable remote work with borderless payments and universal access to employment records.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Transparent Records</h3>
                  <p className="text-sm text-gray-600">
                    Immutable audit trails provide complete transparency for compliance and disputes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-4 w-4 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Employee Empowerment</h3>
                  <p className="text-sm text-gray-600">
                    Give employees control over their data and enable self-sovereign identity management.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready for the Future of HR?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the blockchain revolution and transform your HR operations with cutting-edge Web3 technology
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-600">
              Start Web3 Trial
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
