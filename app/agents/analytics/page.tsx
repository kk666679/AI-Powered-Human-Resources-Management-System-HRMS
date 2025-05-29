import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BarChart3, TrendingUp, Users, DollarSign, Target, AlertCircle, Clock, Brain, Zap } from "lucide-react"

export default function WorkforceAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full mb-6">
            <BarChart3 className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Workforce Analytics AI</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Predictive analytics for workforce optimization with Malaysian market insights. Make data-driven HR
            decisions with AI-powered forecasting and performance analytics.
          </p>
          <Badge className="mt-4 bg-indigo-100 text-indigo-700 px-4 py-2">
            <Brain className="mr-2 h-4 w-4" />
            Predictive Intelligence
          </Badge>
        </div>

        {/* Analytics Dashboard */}
        <div className="grid gap-6 md:grid-cols-4 mb-12">
          <Card className="border-l-4 border-l-indigo-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-indigo-500" />
                Productivity Index
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-indigo-600 mb-1">127%</div>
              <p className="text-sm text-gray-600">vs industry benchmark</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-green-500" />
                Retention Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600 mb-1">94.2%</div>
              <p className="text-sm text-gray-600">12-month rolling</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-purple-500" />
                Cost per Hire
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600 mb-1">RM 3,200</div>
              <p className="text-sm text-gray-600">35% below market</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="h-5 w-5 text-orange-500" />
                Performance Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600 mb-1">8.7/10</div>
              <p className="text-sm text-gray-600">Team average</p>
            </CardContent>
          </Card>
        </div>

        {/* Predictive Analytics Features */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Predictive Insights</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Turnover Prediction</h3>
                  <p className="text-gray-600">
                    AI models predict employee turnover risk 6 months in advance with 89% accuracy, enabling proactive
                    retention strategies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Performance Forecasting</h3>
                  <p className="text-gray-600">
                    Predict individual and team performance trends based on historical data, workload patterns, and
                    engagement metrics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cost Optimization</h3>
                  <p className="text-gray-600">
                    Identify opportunities to reduce HR costs while maintaining productivity through intelligent
                    workforce planning and resource allocation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Real-time Alerts</h3>
                  <p className="text-gray-600">
                    Instant notifications for performance anomalies, engagement drops, and potential compliance issues
                    before they become problems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Turnover Risk Analysis</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded-lg bg-red-50">
                    <div>
                      <div className="font-semibold text-red-800">Sarah Chen - Marketing</div>
                      <div className="text-sm text-red-600">High Risk (87%)</div>
                    </div>
                    <Badge className="bg-red-100 text-red-700">Action Required</Badge>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-lg bg-yellow-50">
                    <div>
                      <div className="font-semibold text-yellow-800">Ahmad Rahman - IT</div>
                      <div className="text-sm text-yellow-600">Medium Risk (54%)</div>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-700">Monitor</Badge>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-lg bg-green-50">
                    <div>
                      <div className="font-semibold text-green-800">Priya Sharma - Finance</div>
                      <div className="text-sm text-green-600">Low Risk (12%)</div>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Stable</Badge>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-2">Risk Factors Identified:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Decreased engagement scores</li>
                      <li>• Increased overtime hours</li>
                      <li>• Delayed project completions</li>
                      <li>• Reduced team interactions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Malaysian Workforce Insights */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Malaysian Workforce Benchmarks</CardTitle>
            <CardDescription>
              Industry-specific analytics tailored to Malaysian market conditions and employment trends
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-4 border rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-indigo-600" />
                  Industry Benchmarking
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Manufacturing sector comparison</li>
                  <li>• Technology industry metrics</li>
                  <li>• Services sector analysis</li>
                  <li>• Regional performance data</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-green-50 to-green-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Productivity Metrics
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Output per employee</li>
                  <li>• Revenue per FTE</li>
                  <li>• Efficiency ratios</li>
                  <li>• Quality indicators</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-purple-50 to-purple-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  Engagement Analytics
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Employee satisfaction scores</li>
                  <li>• Team collaboration metrics</li>
                  <li>• Communication effectiveness</li>
                  <li>• Cultural alignment index</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-orange-50 to-orange-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-orange-600" />
                  Cost Analytics
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Total compensation analysis</li>
                  <li>• Benefits utilization rates</li>
                  <li>• Training ROI measurement</li>
                  <li>• Overhead cost tracking</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-red-50 to-red-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  Risk Indicators
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Compliance risk assessment</li>
                  <li>• Performance decline alerts</li>
                  <li>• Absenteeism patterns</li>
                  <li>• Safety incident tracking</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  Time Analytics
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Attendance patterns</li>
                  <li>• Overtime optimization</li>
                  <li>• Leave utilization trends</li>
                  <li>• Shift efficiency analysis</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Dashboard */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-indigo-600" />
                Department Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Engineering</span>
                    <span className="text-sm font-bold text-green-600">9.2/10</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Sales</span>
                    <span className="text-sm font-bold text-blue-600">8.8/10</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Marketing</span>
                    <span className="text-sm font-bold text-purple-600">8.5/10</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Operations</span>
                    <span className="text-sm font-bold text-orange-600">8.1/10</span>
                  </div>
                  <Progress value={81} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">HR</span>
                    <span className="text-sm font-bold text-red-600">7.9/10</span>
                  </div>
                  <Progress value={79} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Key Metrics Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Employee Satisfaction</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">4.6/5</span>
                    <Badge className="bg-green-100 text-green-700">↗ +0.3</Badge>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Productivity Index</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">127%</span>
                    <Badge className="bg-green-100 text-green-700">↗ +12%</Badge>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Absenteeism Rate</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">2.1%</span>
                    <Badge className="bg-green-100 text-green-700">↘ -0.8%</Badge>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Training Completion</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">94%</span>
                    <Badge className="bg-green-100 text-green-700">↗ +7%</Badge>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Internal Promotions</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">78%</span>
                    <Badge className="bg-green-100 text-green-700">↗ +15%</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Make Data-Driven HR Decisions</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your workforce management with AI-powered analytics and predictive insights tailored to Malaysian
            market conditions
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-indigo-600">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              View Analytics Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
