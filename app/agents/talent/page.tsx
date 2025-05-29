import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Brain, Users, Target, TrendingUp, Shield, Search, Award, BarChart3, UserCheck, Zap } from "lucide-react"

export default function TalentIntelligencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mb-6">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Talent Intelligence AI</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-driven recruitment with bias prevention, diversity compliance, and predictive analytics. Build diverse,
            high-performing teams while ensuring Malaysian employment equity.
          </p>
          <div className="flex gap-2 justify-center mt-4">
            <Badge className="bg-purple-100 text-purple-700 px-4 py-2">
              <Shield className="mr-2 h-4 w-4" />
              Bias-Free Hiring
            </Badge>
            <Badge className="bg-green-100 text-green-700 px-4 py-2">
              <Users className="mr-2 h-4 w-4" />
              Diversity Compliant
            </Badge>
          </div>
        </div>

        {/* Talent Analytics Dashboard */}
        <div className="grid gap-6 md:grid-cols-4 mb-12">
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="h-5 w-5 text-purple-500" />
                Hiring Success
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600 mb-1">92%</div>
              <p className="text-sm text-gray-600">Quality hire rate</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-green-500" />
                Diversity Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600 mb-1">8.7/10</div>
              <p className="text-sm text-gray-600">Above industry average</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                Retention Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600 mb-1">94%</div>
              <p className="text-sm text-gray-600">12-month retention</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="h-5 w-5 text-orange-500" />
                Time to Hire
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600 mb-1">18 days</div>
              <p className="text-sm text-gray-600">vs 45 days industry avg</p>
            </CardContent>
          </Card>
        </div>

        {/* AI-Powered Recruitment Features */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Bias-Free Recruitment</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Bias Detection & Prevention</h3>
                  <p className="text-gray-600">
                    AI algorithms identify and eliminate unconscious bias in job descriptions, screening processes, and
                    interview evaluations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Search className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Intelligent Candidate Matching</h3>
                  <p className="text-gray-600">
                    Advanced ML algorithms match candidates based on skills, experience, and cultural fit while ensuring
                    diverse candidate pools.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
                  <p className="text-gray-600">
                    Predict candidate success, retention probability, and performance potential using historical data
                    and behavioral analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Diversity Metrics</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Gender Diversity</span>
                      <span className="text-sm font-bold">52% Female</span>
                    </div>
                    <Progress value={52} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Ethnic Diversity</span>
                      <span className="text-sm font-bold">68% Diverse</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Age Diversity</span>
                      <span className="text-sm font-bold">Multi-generational</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Educational Background</span>
                      <span className="text-sm font-bold">Varied Paths</span>
                    </div>
                    <Progress value={82} className="h-2" />
                  </div>

                  <div className="pt-4 border-t">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">8.7/10</div>
                      <p className="text-sm text-gray-600">Overall Diversity Score</p>
                      <Badge className="mt-2 bg-green-100 text-green-700">Above Industry Average</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Malaysian Employment Equity */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Malaysian Employment Equity Compliance</CardTitle>
            <CardDescription>Ensuring compliance with Malaysian diversity and inclusion regulations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-4 border rounded-lg bg-gradient-to-br from-purple-50 to-purple-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  Bumiputera Equity
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 30% Bumiputera representation</li>
                  <li>• Leadership position tracking</li>
                  <li>• Equity program compliance</li>
                  <li>• Government reporting</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-green-50 to-green-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  Gender Equality
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 30% women in leadership</li>
                  <li>• Equal pay monitoring</li>
                  <li>• Maternity protection</li>
                  <li>• Anti-discrimination policies</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  Disability Inclusion
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 1% OKU employment quota</li>
                  <li>• Accessibility compliance</li>
                  <li>• Reasonable accommodations</li>
                  <li>• Inclusive hiring practices</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-orange-50 to-orange-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-orange-600" />
                  Skills Development
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• HRDF levy compliance</li>
                  <li>• Training program tracking</li>
                  <li>• Skill gap analysis</li>
                  <li>• Career progression paths</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-red-50 to-red-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-red-600" />
                  Foreign Worker Management
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Work permit compliance</li>
                  <li>• Quota management</li>
                  <li>• Local-foreign ratio</li>
                  <li>• Immigration requirements</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-indigo-600" />
                  Performance Analytics
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Diversity impact measurement</li>
                  <li>• Retention rate analysis</li>
                  <li>• Performance correlation</li>
                  <li>• ROI on diversity initiatives</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Talent Pipeline */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                Talent Pipeline Health
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Active Candidates</span>
                  <span className="font-semibold">1,247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Qualified Candidates</span>
                  <span className="font-semibold">423</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Interview Ready</span>
                  <span className="font-semibold">89</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Offer Stage</span>
                  <span className="font-semibold">12</span>
                </div>
                <hr />
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Conversion Rate</span>
                  <span className="text-purple-600">34%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-green-600" />
                Top Performing Sources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Employee Referrals</span>
                  <Badge className="bg-green-100 text-green-700">42%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">LinkedIn</span>
                  <Badge className="bg-blue-100 text-blue-700">28%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">JobStreet</span>
                  <Badge className="bg-purple-100 text-purple-700">18%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">University Partnerships</span>
                  <Badge className="bg-orange-100 text-orange-700">12%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Build Diverse, High-Performing Teams</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Leverage AI-powered recruitment to eliminate bias, ensure Malaysian employment equity compliance, and build
            teams that drive innovation and growth
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-purple-600">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              View Diversity Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
