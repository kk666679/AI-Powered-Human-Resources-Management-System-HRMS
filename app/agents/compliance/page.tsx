import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Shield, AlertTriangle, CheckCircle, FileText, Clock, TrendingUp, Eye, Bell, Zap } from "lucide-react"

export default function ComplianceGuardianPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Compliance Guardian AI</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your 24/7 AI-powered compliance officer ensuring 100% adherence to Malaysian Employment Law, EPF
            regulations, SOCSO requirements, and Industrial Relations Act.
          </p>
          <Badge className="mt-4 bg-red-100 text-red-700 px-4 py-2">
            <Eye className="mr-2 h-4 w-4" />
            Real-time Monitoring Active
          </Badge>
        </div>

        {/* Live Compliance Dashboard */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Compliance Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600 mb-2">98.7%</div>
              <Progress value={98.7} className="h-2 mb-2" />
              <p className="text-sm text-gray-600">Above industry average of 85%</p>
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
              <div className="text-3xl font-bold text-yellow-600 mb-2">3</div>
              <p className="text-sm text-gray-600">2 minor, 1 requires attention</p>
              <Button variant="outline" size="sm" className="mt-2">
                View Details
              </Button>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-500" />
                Last Scan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-semibold text-blue-600 mb-2">2 minutes ago</div>
              <p className="text-sm text-gray-600">Continuous monitoring active</p>
              <div className="flex items-center gap-1 mt-2">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-green-600">Live</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Monitoring</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Employment Act 1955 Compliance</h3>
                  <p className="text-gray-600">
                    Monitors working hours, overtime, leave entitlements, and termination procedures
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">EPF & SOCSO Automation</h3>
                  <p className="text-gray-600">
                    Automatic calculation and filing of statutory contributions with real-time rate updates
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bell className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Proactive Alerts</h3>
                  <p className="text-gray-600">
                    Instant notifications for potential violations before they become penalties
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Auto-Remediation</h3>
                  <p className="text-gray-600">
                    Automatically fixes common compliance issues and generates required documentation
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activities</h2>
            <div className="space-y-3">
              <Alert className="border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800">Compliance Check Completed</AlertTitle>
                <AlertDescription className="text-green-700">
                  All 247 employees verified for EPF compliance - 100% compliant
                </AlertDescription>
              </Alert>

              <Alert className="border-yellow-200 bg-yellow-50">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <AlertTitle className="text-yellow-800">Overtime Alert</AlertTitle>
                <AlertDescription className="text-yellow-700">
                  Employee ID: EMP001 approaching 104-hour monthly overtime limit
                </AlertDescription>
              </Alert>

              <Alert className="border-blue-200 bg-blue-50">
                <FileText className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-800">Document Generated</AlertTitle>
                <AlertDescription className="text-blue-700">
                  Monthly EPF submission report auto-generated and filed
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>

        {/* Malaysian Compliance Coverage */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Malaysian Employment Law Coverage</CardTitle>
            <CardDescription>Comprehensive monitoring of all Malaysian employment regulations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Employment Act 1955</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Working hours & overtime</li>
                  <li>• Annual leave entitlements</li>
                  <li>• Termination procedures</li>
                  <li>• Minimum wage compliance</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">EPF Act 1991</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Contribution calculations</li>
                  <li>• Age-based rates</li>
                  <li>• Monthly submissions</li>
                  <li>• Penalty avoidance</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">SOCSO Act 1969</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Employment injury scheme</li>
                  <li>• Invalidity pension scheme</li>
                  <li>• EIS contributions</li>
                  <li>• Claims processing</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Industrial Relations Act</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Trade union recognition</li>
                  <li>• Collective agreements</li>
                  <li>• Dispute resolution</li>
                  <li>• Strike regulations</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">PDPA 2010</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Personal data protection</li>
                  <li>• Consent management</li>
                  <li>• Data breach protocols</li>
                  <li>• Employee privacy rights</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Minimum Wage Order</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• RM 1,500 minimum wage</li>
                  <li>• Regional variations</li>
                  <li>• Compliance tracking</li>
                  <li>• Penalty prevention</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Never Face Employment Law Penalties Again</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 500+ Malaysian companies using Compliance Guardian AI to maintain 100% employment law compliance
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-red-500 to-red-600">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
