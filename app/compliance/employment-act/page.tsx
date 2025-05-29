import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { FileText, Clock, DollarSign, Users, AlertTriangle, CheckCircle, Calendar, Shield, Scale } from "lucide-react"

export default function EmploymentActPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mb-6">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Employment Act 1955 Compliance</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive compliance management for Malaysia's primary employment legislation. Automated monitoring,
            violation detection, and penalty prevention for all Employment Act requirements.
          </p>
          <Badge className="mt-4 bg-blue-100 text-blue-700 px-4 py-2">
            <Shield className="mr-2 h-4 w-4" />
            100% Compliance Guaranteed
          </Badge>
        </div>

        {/* Compliance Status Dashboard */}
        <div className="grid gap-6 md:grid-cols-4 mb-12">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Compliance Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600 mb-1">98.5%</div>
              <p className="text-sm text-gray-600">All provisions covered</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                Covered Employees
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600 mb-1">247</div>
              <p className="text-sm text-gray-600">Active monitoring</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                Active Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600 mb-1">2</div>
              <p className="text-sm text-gray-600">Requires attention</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-purple-500" />
                Penalties Avoided
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600 mb-1">RM 125K</div>
              <p className="text-sm text-gray-600">This year</p>
            </CardContent>
          </Card>
        </div>

        {/* Employment Act Provisions */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Employment Act 1955 - Key Provisions</CardTitle>
            <CardDescription>
              Comprehensive coverage of all Employment Act requirements with automated compliance monitoring
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-4 border rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  Working Hours (Section 60A)
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Maximum 8 hours per day</li>
                  <li>• Maximum 48 hours per week</li>
                  <li>• Overtime limits (104 hours/month)</li>
                  <li>• Rest day requirements</li>
                </ul>
                <div className="mt-3">
                  <Progress value={100} className="h-2" />
                  <p className="text-xs text-green-600 mt-1">100% Compliant</p>
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-green-50 to-green-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  Minimum Wage (Section 24A)
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• RM 1,500 minimum wage</li>
                  <li>• Regional variations</li>
                  <li>• Overtime rate calculations</li>
                  <li>• Salary payment timing</li>
                </ul>
                <div className="mt-3">
                  <Progress value={100} className="h-2" />
                  <p className="text-xs text-green-600 mt-1">100% Compliant</p>
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-purple-50 to-purple-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-purple-600" />
                  Annual Leave (Section 60E)
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Minimum 8 days annually</li>
                  <li>• Progressive entitlements</li>
                  <li>• Leave carry-forward rules</li>
                  <li>• Encashment provisions</li>
                </ul>
                <div className="mt-3">
                  <Progress value={98} className="h-2" />
                  <p className="text-xs text-yellow-600 mt-1">2 employees need review</p>
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-orange-50 to-orange-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-orange-600" />
                  Termination (Section 12-14)
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Notice period requirements</li>
                  <li>• Termination benefits</li>
                  <li>• Misconduct procedures</li>
                  <li>• Retrenchment benefits</li>
                </ul>
                <div className="mt-3">
                  <Progress value={100} className="h-2" />
                  <p className="text-xs text-green-600 mt-1">100% Compliant</p>
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-red-50 to-red-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-red-600" />
                  Maternity Benefits (Section 37)
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 98 days maternity leave</li>
                  <li>• Maternity allowance</li>
                  <li>• Job protection</li>
                  <li>• Nursing breaks</li>
                </ul>
                <div className="mt-3">
                  <Progress value={100} className="h-2" />
                  <p className="text-xs text-green-600 mt-1">100% Compliant</p>
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-indigo-600" />
                  Medical Benefits (Section 60F)
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 60 days paid medical leave</li>
                  <li>• Medical certificate requirements</li>
                  <li>• Hospitalization leave</li>
                  <li>• Medical examination rights</li>
                </ul>
                <div className="mt-3">
                  <Progress value={100} className="h-2" />
                  <p className="text-xs text-green-600 mt-1">100% Compliant</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Compliance Activities */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Compliance Activities</h2>
            <div className="space-y-4">
              <Alert className="border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800">Overtime Compliance Check</AlertTitle>
                <AlertDescription className="text-green-700">
                  All employees verified within 104-hour monthly overtime limit. No violations detected.
                </AlertDescription>
              </Alert>

              <Alert className="border-blue-200 bg-blue-50">
                <FileText className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-800">Leave Entitlement Update</AlertTitle>
                <AlertDescription className="text-blue-700">
                  Annual leave balances updated for 247 employees based on service years and Employment Act provisions.
                </AlertDescription>
              </Alert>

              <Alert className="border-yellow-200 bg-yellow-50">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <AlertTitle className="text-yellow-800">Minimum Wage Review</AlertTitle>
                <AlertDescription className="text-yellow-700">
                  2 contract workers require salary adjustment to meet RM 1,500 minimum wage requirement.
                </AlertDescription>
              </Alert>

              <Alert className="border-purple-200 bg-purple-50">
                <Calendar className="h-4 w-4 text-purple-600" />
                <AlertTitle className="text-purple-800">Maternity Leave Processed</AlertTitle>
                <AlertDescription className="text-purple-700">
                  Employee ID: EMP156 - 98-day maternity leave approved with full benefits as per Section 37.
                </AlertDescription>
              </Alert>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Compliance Metrics</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Working Hours Compliance</span>
                      <span className="text-sm font-bold text-green-600">100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Minimum Wage Compliance</span>
                      <span className="text-sm font-bold text-yellow-600">98%</span>
                    </div>
                    <Progress value={98} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Leave Management</span>
                      <span className="text-sm font-bold text-green-600">99%</span>
                    </div>
                    <Progress value={99} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Termination Procedures</span>
                      <span className="text-sm font-bold text-green-600">100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Record Keeping</span>
                      <span className="text-sm font-bold text-green-600">100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>

                  <div className="pt-4 border-t">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">98.5%</div>
                      <p className="text-sm text-gray-600">Overall Compliance Score</p>
                      <Badge className="mt-2 bg-green-100 text-green-700">Excellent</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Penalty Prevention */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Scale className="h-6 w-6 text-red-600" />
              Penalty Prevention & Risk Management
            </CardTitle>
            <CardDescription>
              Proactive monitoring to prevent Employment Act violations and associated penalties
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Potential Penalties Avoided</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border rounded-lg bg-green-50">
                    <div>
                      <div className="font-semibold text-green-800">Overtime Violations</div>
                      <div className="text-sm text-green-600">15 potential cases prevented</div>
                    </div>
                    <div className="text-lg font-bold text-green-700">RM 75,000</div>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-lg bg-blue-50">
                    <div>
                      <div className="font-semibold text-blue-800">Minimum Wage Issues</div>
                      <div className="text-sm text-blue-600">3 cases auto-corrected</div>
                    </div>
                    <div className="text-lg font-bold text-blue-700">RM 25,000</div>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-lg bg-purple-50">
                    <div>
                      <div className="font-semibold text-purple-800">Leave Violations</div>
                      <div className="text-sm text-purple-600">8 potential violations</div>
                    </div>
                    <div className="text-lg font-bold text-purple-700">RM 25,000</div>
                  </div>

                  <div className="pt-3 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">Total Savings</span>
                      <span className="text-xl font-bold text-green-600">RM 125,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Risk Monitoring</h3>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Overtime Risk Level</span>
                      <Badge className="bg-green-100 text-green-700">Low</Badge>
                    </div>
                    <Progress value={15} className="h-2" />
                    <p className="text-xs text-gray-600 mt-1">15% of monthly limit used</p>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Leave Compliance Risk</span>
                      <Badge className="bg-yellow-100 text-yellow-700">Medium</Badge>
                    </div>
                    <Progress value={45} className="h-2" />
                    <p className="text-xs text-gray-600 mt-1">2 employees need attention</p>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Documentation Risk</span>
                      <Badge className="bg-green-100 text-green-700">Low</Badge>
                    </div>
                    <Progress value={5} className="h-2" />
                    <p className="text-xs text-gray-600 mt-1">All records up to date</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ensure 100% Employment Act Compliance</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Protect your business from costly penalties with automated Employment Act 1955 compliance monitoring and
            proactive violation prevention
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700">
              Start Compliance Audit
            </Button>
            <Button size="lg" variant="outline">
              Download Compliance Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
