"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Shield, FileText, Users, TrendingUp, CheckCircle, AlertTriangle, Lock, Globe, Zap, Eye } from "lucide-react"

interface BlockchainMetrics {
  totalEmployees: number
  blockchainRecords: number
  smartContracts: number
  complianceScore: number
  securityLevel: string
  lastAudit: Date
}

export function BlockchainComplianceDashboard() {
  const [metrics] = useState<BlockchainMetrics>({
    totalEmployees: 247,
    blockchainRecords: 247,
    smartContracts: 189,
    complianceScore: 98.5,
    securityLevel: "High",
    lastAudit: new Date("2024-01-10"),
  })

  const [isAuditing, setIsAuditing] = useState(false)

  const runComplianceAudit = async () => {
    setIsAuditing(true)
    // Simulate audit process
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsAuditing(false)
  }

  const blockchainFeatures = [
    {
      title: "Immutable Employee Records",
      description: "All employee data stored on blockchain with cryptographic verification",
      status: "active",
      icon: <FileText className="h-5 w-5" />,
      coverage: 100,
    },
    {
      title: "Smart Contract Employment",
      description: "Automated employment agreements with built-in compliance",
      status: "active",
      icon: <Lock className="h-5 w-5" />,
      coverage: 76,
    },
    {
      title: "Decentralized Identity",
      description: "Self-sovereign identity management for employees",
      status: "beta",
      icon: <Users className="h-5 w-5" />,
      coverage: 45,
    },
    {
      title: "Transparent Payroll",
      description: "Blockchain-verified salary payments and deductions",
      status: "active",
      icon: <TrendingUp className="h-5 w-5" />,
      coverage: 89,
    },
  ]

  const complianceChecks = [
    {
      check: "Data Integrity Verification",
      status: "passed",
      description: "All blockchain records verified against cryptographic hashes",
    },
    {
      check: "Smart Contract Security",
      status: "passed",
      description: "Employment contracts audited for vulnerabilities",
    },
    {
      check: "Privacy Compliance (PDPA)",
      status: "warning",
      description: "Some employee data requires additional encryption",
    },
    {
      check: "Multi-signature Validation",
      status: "passed",
      description: "Critical operations require multiple approvals",
    },
    {
      check: "Backup & Recovery",
      status: "passed",
      description: "Distributed backup across multiple nodes",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Blockchain Compliance</h1>
          <p className="text-gray-600">Decentralized HR management with cryptographic security</p>
        </div>
        <Badge className="bg-green-100 text-green-700 px-4 py-2">
          <Shield className="mr-2 h-4 w-4" />
          Blockchain Secured
        </Badge>
      </div>

      {/* Metrics Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blockchain Records</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.blockchainRecords}</div>
            <p className="text-xs text-muted-foreground">
              {((metrics.blockchainRecords / metrics.totalEmployees) * 100).toFixed(1)}% coverage
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Smart Contracts</CardTitle>
            <Lock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.smartContracts}</div>
            <p className="text-xs text-muted-foreground">Active employment contracts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.complianceScore}%</div>
            <p className="text-xs text-muted-foreground">Blockchain verified</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Security Level</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.securityLevel}</div>
            <p className="text-xs text-muted-foreground">Multi-layer protection</p>
          </CardContent>
        </Card>
      </div>

      {/* Blockchain Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Blockchain Features
          </CardTitle>
          <CardDescription>Decentralized HR management capabilities powered by blockchain technology</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {blockchainFeatures.map((feature, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {feature.icon}
                    <h3 className="font-semibold">{feature.title}</h3>
                  </div>
                  <Badge
                    className={
                      feature.status === "active" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                    }
                  >
                    {feature.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{feature.description}</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Coverage</span>
                    <span>{feature.coverage}%</span>
                  </div>
                  <Progress value={feature.coverage} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Compliance Checks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Blockchain Compliance Checks
          </CardTitle>
          <CardDescription>Automated verification of blockchain security and compliance standards</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {complianceChecks.map((check, index) => (
              <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                {check.status === "passed" ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                ) : (
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                )}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{check.check}</h4>
                    <Badge
                      className={
                        check.status === "passed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                      }
                    >
                      {check.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{check.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <Button onClick={runComplianceAudit} disabled={isAuditing} className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              {isAuditing ? "Running Audit..." : "Run Full Audit"}
            </Button>
            <Button variant="outline">View Audit History</Button>
            <Button variant="outline">Export Compliance Report</Button>
          </div>
        </CardContent>
      </Card>

      {/* Security Alerts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Alert className="border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Blockchain Sync Complete</AlertTitle>
          <AlertDescription className="text-green-700">
            All employee records successfully synchronized with blockchain. Last sync: 2 minutes ago.
          </AlertDescription>
        </Alert>

        <Alert className="border-blue-200 bg-blue-50">
          <Shield className="h-4 w-4 text-blue-600" />
          <AlertTitle className="text-blue-800">Smart Contract Update</AlertTitle>
          <AlertDescription className="text-blue-700">
            Employment contract templates updated with latest Malaysian labor law changes.
          </AlertDescription>
        </Alert>
      </div>

      {/* Blockchain Network Status */}
      <Card>
        <CardHeader>
          <CardTitle>Network Status</CardTitle>
          <CardDescription>Real-time status of blockchain networks used for HR operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">Polygon Network</h4>
                <Badge className="bg-green-100 text-green-700">Active</Badge>
              </div>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Block Height:</span>
                  <span>52,847,392</span>
                </div>
                <div className="flex justify-between">
                  <span>Gas Price:</span>
                  <span>30 Gwei</span>
                </div>
                <div className="flex justify-between">
                  <span>Tx Count:</span>
                  <span>1,247</span>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">Ethereum Network</h4>
                <Badge className="bg-green-100 text-green-700">Active</Badge>
              </div>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Block Height:</span>
                  <span>18,847,392</span>
                </div>
                <div className="flex justify-between">
                  <span>Gas Price:</span>
                  <span>25 Gwei</span>
                </div>
                <div className="flex justify-between">
                  <span>Tx Count:</span>
                  <span>89</span>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">BSC Network</h4>
                <Badge className="bg-yellow-100 text-yellow-700">Standby</Badge>
              </div>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Block Height:</span>
                  <span>34,123,456</span>
                </div>
                <div className="flex justify-between">
                  <span>Gas Price:</span>
                  <span>5 Gwei</span>
                </div>
                <div className="flex justify-between">
                  <span>Tx Count:</span>
                  <span>12</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
