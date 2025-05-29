import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calculator, DollarSign, TrendingUp, Clock, CheckCircle, FileText, Zap, Shield } from "lucide-react"

export default function PayrollOrchestratorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-6">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Payroll Orchestrator AI</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intelligent payroll processing with automated EPF, SOCSO, EIS calculations and seamless integration with
            Malaysian government systems. Process payroll in minutes, not days.
          </p>
          <Badge className="mt-4 bg-green-100 text-green-700 px-4 py-2">
            <Zap className="mr-2 h-4 w-4" />
            85% Time Reduction
          </Badge>
        </div>

        {/* Live Payroll Stats */}
        <div className="grid gap-6 md:grid-cols-4 mb-12">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-green-500" />
                Monthly Payroll
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600 mb-1">RM 2.4M</div>
              <p className="text-sm text-gray-600">247 employees processed</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-500" />
                EPF Contributions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600 mb-1">RM 312K</div>
              <p className="text-sm text-gray-600">Auto-filed to EPF i-Akaun</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-500" />
                SOCSO/EIS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600 mb-1">RM 48K</div>
              <p className="text-sm text-gray-600">Submitted to PERKESO</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-500" />
                Processing Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600 mb-1">12 min</div>
              <p className="text-sm text-gray-600">vs 3 days manually</p>
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Intelligent Automation</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calculator className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Smart Calculations</h3>
                  <p className="text-gray-600">
                    Automatically calculates EPF (11%/12%), SOCSO rates, EIS contributions, and income tax based on
                    latest Malaysian regulations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Government Integration</h3>
                  <p className="text-gray-600">
                    Direct API integration with EPF i-Akaun, PERKESO, and LHDN systems for seamless filing and
                    compliance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Multi-State Support</h3>
                  <p className="text-gray-600">
                    Handles Peninsular Malaysia, Sabah, and Sarawak labor ordinances with region-specific calculations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payroll Breakdown</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Basic Salary</span>
                    <span className="font-semibold">RM 1,850,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Allowances</span>
                    <span className="font-semibold">RM 320,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Overtime</span>
                    <span className="font-semibold">RM 180,000</span>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Gross Pay</span>
                    <span className="text-green-600">RM 2,350,000</span>
                  </div>
                  <hr />
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">EPF Employee (11%)</span>
                      <span>RM 258,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">SOCSO Employee</span>
                      <span>RM 4,850</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">EIS Employee</span>
                      <span>RM 4,700</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Income Tax</span>
                      <span>RM 125,000</span>
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Net Pay</span>
                    <span className="text-blue-600">RM 1,956,950</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Malaysian Payroll Features */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Malaysian Payroll Compliance</CardTitle>
            <CardDescription>
              Built specifically for Malaysian employment regulations and statutory requirements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-4 border rounded-lg bg-gradient-to-br from-green-50 to-green-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  EPF Integration
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Age-based contribution rates</li>
                  <li>• Automatic i-Akaun submission</li>
                  <li>• Real-time rate updates</li>
                  <li>• Penalty avoidance alerts</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  SOCSO & EIS
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Salary-based contribution tables</li>
                  <li>• Employment injury coverage</li>
                  <li>• Invalidity pension calculations</li>
                  <li>• PERKESO direct filing</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-purple-50 to-purple-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-purple-600" />
                  Income Tax (PCB)
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Progressive tax calculations</li>
                  <li>• Relief and rebate handling</li>
                  <li>• Monthly PCB deductions</li>
                  <li>• EA form generation</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-orange-50 to-orange-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-600" />
                  Overtime Management
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Employment Act compliance</li>
                  <li>• 104-hour monthly limits</li>
                  <li>• 1.5x rate calculations</li>
                  <li>• Public holiday premiums</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-red-50 to-red-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-red-600" />
                  Leave Management
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Annual leave accruals</li>
                  <li>• Medical leave tracking</li>
                  <li>• Maternity/paternity leave</li>
                  <li>• Leave encashment</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-indigo-600" />
                  Bank Integration
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Direct bank transfers</li>
                  <li>• Payslip generation</li>
                  <li>• Multi-bank support</li>
                  <li>• Payment confirmations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Process Payroll in Minutes, Not Days</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join Malaysian companies saving 85% of payroll processing time with automated EPF, SOCSO, and tax
            calculations
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              Calculate Savings
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
