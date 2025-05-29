import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Scale,
  FileText,
  AlertTriangle,
  BadgeAlertIcon as AlertTitle,
  Gavel,
  CheckCircle,
  Clock,
  TrendingUp,
  BookOpen,
  Shield,
  Users,
} from "lucide-react"

export default function LegalResolutionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-6">
            <Scale className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal Resolution AI</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industrial Court simulation and dispute prevention powered by AI. Navigate Malaysian labor law complexities
            with predictive case analysis and automated legal document generation.
          </p>
          <Badge className="mt-4 bg-orange-100 text-orange-700 px-4 py-2">
            <Gavel className="mr-2 h-4 w-4" />
            Industrial Court Ready
          </Badge>
        </div>

        {/* Legal Analytics Dashboard */}
        <div className="grid gap-6 md:grid-cols-4 mb-12">
          <Card className="border-l-4 border-l-orange-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Scale className="h-5 w-5 text-orange-500" />
                Case Success Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600 mb-1">89%</div>
              <p className="text-sm text-gray-600">Favorable outcomes</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Disputes Prevented
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600 mb-1">94%</div>
              <p className="text-sm text-gray-600">Early intervention</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-500" />
                Resolution Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600 mb-1">21 days</div>
              <p className="text-sm text-gray-600">vs 180 days average</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-500" />
                Cost Savings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600 mb-1">RM 2.1M</div>
              <p className="text-sm text-gray-600">Legal fees saved</p>
            </CardContent>
          </Card>
        </div>

        {/* AI Legal Features */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Legal Intelligence</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Gavel className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Industrial Court Simulation</h3>
                  <p className="text-gray-600">
                    AI models trained on 10,000+ Malaysian Industrial Court cases to predict outcomes and recommend
                    optimal legal strategies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Legal Document Generation</h3>
                  <p className="text-gray-600">
                    Automatically generate show cause letters, disciplinary forms, and Industrial Court submissions
                    compliant with Malaysian law.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Risk Assessment</h3>
                  <p className="text-gray-600">
                    Real-time analysis of employment decisions to identify potential legal risks before they escalate to
                    disputes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Legal Precedent Database</h3>
                  <p className="text-gray-600">
                    Access to comprehensive database of Malaysian labor law precedents with AI-powered case law analysis
                    and recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Active Case Management</h2>
            <div className="space-y-4">
              <Alert className="border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertTitle className="text-red-800">High Risk Case</AlertTitle>
                <AlertDescription className="text-red-700">
                  Wrongful dismissal claim - Employee ID: EMP247. AI recommends immediate settlement negotiation.
                  Predicted court outcome: 72% in favor of employee.
                </AlertDescription>
              </Alert>

              <Alert className="border-yellow-200 bg-yellow-50">
                <Clock className="h-4 w-4 text-yellow-600" />
                <AlertTitle className="text-yellow-800">Pending Review</AlertTitle>
                <AlertDescription className="text-yellow-700">
                  Disciplinary action for EMP156 requires legal review. AI suggests additional documentation before
                  proceeding to avoid potential unfair dismissal claim.
                </AlertDescription>
              </Alert>

              <Alert className="border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800">Case Resolved</AlertTitle>
                <AlertDescription className="text-green-700">
                  Overtime dispute settled through AI-recommended mediation. Settlement amount: RM 15,000 (vs predicted
                  court award of RM 45,000).
                </AlertDescription>
              </Alert>

              <Alert className="border-blue-200 bg-blue-50">
                <FileText className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-800">Document Generated</AlertTitle>
                <AlertDescription className="text-blue-700">
                  Show cause letter auto-generated for attendance issues. Compliant with Employment Act 1955 Section 14
                  requirements.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>

        {/* Malaysian Labor Law Coverage */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Malaysian Labor Law Expertise</CardTitle>
            <CardDescription>
              Comprehensive coverage of Malaysian employment legislation and Industrial Court procedures
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-4 border rounded-lg bg-gradient-to-br from-orange-50 to-orange-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Scale className="h-5 w-5 text-orange-600" />
                  Industrial Relations Act 1967
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Dismissal procedures</li>
                  <li>• Disciplinary actions</li>
                  <li>• Trade union matters</li>
                  <li>• Collective agreements</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-red-50 to-red-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-red-600" />
                  Employment Act 1955
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Wrongful dismissal claims</li>
                  <li>• Overtime disputes</li>
                  <li>• Leave entitlement issues</li>
                  <li>• Salary and benefits</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Gavel className="h-5 w-5 text-blue-600" />
                  Industrial Court Procedures
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Case filing procedures</li>
                  <li>• Evidence preparation</li>
                  <li>• Settlement negotiations</li>
                  <li>• Award enforcement</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-green-50 to-green-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  Discrimination & Harassment
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Gender discrimination</li>
                  <li>• Racial discrimination</li>
                  <li>• Sexual harassment</li>
                  <li>• Disability discrimination</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-purple-50 to-purple-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  Retrenchment & Redundancy
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• LIFO principles</li>
                  <li>• Compensation calculations</li>
                  <li>• Consultation requirements</li>
                  <li>• Notice periods</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-indigo-600" />
                  Contract Disputes
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Contract interpretation</li>
                  <li>• Breach of contract</li>
                  <li>• Restraint of trade</li>
                  <li>• Confidentiality agreements</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Case Outcome Predictions */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-orange-600" />
                Case Outcome Predictions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Wrongful Dismissal</span>
                    <span className="text-sm font-bold text-red-600">High Risk</span>
                  </div>
                  <Progress value={78} className="h-2" />
                  <p className="text-xs text-gray-600 mt-1">78% chance employee wins</p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Overtime Dispute</span>
                    <span className="text-sm font-bold text-yellow-600">Medium Risk</span>
                  </div>
                  <Progress value={45} className="h-2" />
                  <p className="text-xs text-gray-600 mt-1">45% chance employee wins</p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Contract Breach</span>
                    <span className="text-sm font-bold text-green-600">Low Risk</span>
                  </div>
                  <Progress value={23} className="h-2" />
                  <p className="text-xs text-gray-600 mt-1">23% chance employee wins</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Document Templates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 border rounded">
                  <span className="text-sm">Show Cause Letter</span>
                  <Badge className="bg-blue-100 text-blue-700">Ready</Badge>
                </div>
                <div className="flex justify-between items-center p-2 border rounded">
                  <span className="text-sm">Disciplinary Inquiry Notice</span>
                  <Badge className="bg-blue-100 text-blue-700">Ready</Badge>
                </div>
                <div className="flex justify-between items-center p-2 border rounded">
                  <span className="text-sm">Termination Letter</span>
                  <Badge className="bg-blue-100 text-blue-700">Ready</Badge>
                </div>
                <div className="flex justify-between items-center p-2 border rounded">
                  <span className="text-sm">Industrial Court Form 1</span>
                  <Badge className="bg-blue-100 text-blue-700">Ready</Badge>
                </div>
                <div className="flex justify-between items-center p-2 border rounded">
                  <span className="text-sm">Settlement Agreement</span>
                  <Badge className="bg-blue-100 text-blue-700">Ready</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Minimize Legal Risks, Maximize Outcomes</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Leverage AI-powered legal intelligence to navigate Malaysian labor law complexities and achieve favorable
            dispute resolutions
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              Schedule Legal Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
