import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageSquare, Users, Heart, TrendingUp, Clock, Globe, Smile, AlertCircle, CheckCircle } from "lucide-react"

export default function EmployeeRelationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6">
            <MessageSquare className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Employee Relations AI</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bilingual AI assistant providing 24/7 employee support in Bahasa Malaysia and English. 
            Enhance engagement, resolve grievances, and build stronger workplace relationships.
          </p>
          <div className="flex gap-2 justify-center mt-4">
            <Badge className="bg-blue-100 text-blue-700 px-4 py-2">
              <Globe className="mr-2 h-4 w-4" />
              Bahasa Malaysia
            </Badge>
            <Badge className="bg-green-100 text-green-700 px-4 py-2">
              <MessageSquare className="mr-2 h-4 w-4" />
              24/7 Support
            </Badge>
          </div>
        </div>

        {/* Live Employee Engagement Stats */}
        <div className="grid gap-6 md:grid-cols-4 mb-12">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                Active Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600 mb-1">89%</div>
              <p className="text-sm text-gray-600">247 employees engaged</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Heart className="h-5 w-5 text-green-500" />
                Satisfaction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600 mb-1">4.8/5</div>
              <p className="text-sm text-gray-600">Employee rating</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="h-5 w-5 text-purple-500" />
                Response Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600 mb-1\">< 30s</div>
              <p className="text-sm text-gray-600">Average response</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-orange-500" />
                Resolution Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600 mb-1">94%</div>
              <p className="text-sm text-gray-600">First contact resolution</p>
            </CardContent>
          </Card>
        </div>

        {/* Live Chat Demo */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Bilingual AI Assistant</h2>
            <Card className="h-96 flex flex-col">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Employee Relations AI
                  <Badge className="ml-auto bg-green-500 text-white">
                    <div className="w-2 h-2 bg-white rounded-full mr-1" />
                    Online
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="max-w-xs bg-blue-500 text-white rounded-lg px-3 py-2 text-sm">
                      Berapa baki cuti tahunan saya?
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="max-w-xs bg-gray-100 rounded-lg px-3 py-2 text-sm">
                      Hai! Anda mempunyai 12 hari cuti tahunan yang tinggal untuk tahun ini. 
                      Mengikut Akta Kerja 1955, anda boleh bawa ke hadapan maksimum dalam tempoh 18 bulan.
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="max-w-xs bg-blue-500 text-white rounded-lg px-3 py-2 text-sm">
                      How do I apply for medical leave?
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="max-w-xs bg-gray-100 rounded-lg px-3 py-2 text-sm">
                      You can apply for medical leave through the HR portal. You'll need a medical certificate (MC) 
                      from a registered doctor. The system will automatically calculate your entitlement based on 
                      Employment Act 1955 - you get 60 days paid medical leave per year.
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="max-w-xs bg-blue-500 text-white rounded-lg px-3 py-2 text-sm">
                      Boleh tolong check overtime saya bulan ini?
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="max-w-xs bg-gray-100 rounded-lg px-3 py-2 text-sm">
                      Anda telah bekerja 78 jam overtime bulan ini. Masih ada 26 jam lagi sebelum mencapai 
                      had maksimum 104 jam mengikut Akta Kerja. Overtime rate anda ialah 1.5x gaji biasa.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Capabilities</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Bilingual Support</h3>
                  <p className="text-gray-600">
                    Native understanding of Bahasa Malaysia and English, with cultural context 
                    and Malaysian workplace terminology.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Instant Answers</h3>
                  <p className="text-gray-600">
                    Immediate responses to common HR queries including leave balances, 
                    payroll questions, and policy clarifications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Grievance Management</h3>
                  <p className="text-gray-600">
                    Confidential grievance reporting with automatic escalation to HR managers 
                    and compliance with Malaysian labor dispute procedures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Engagement Analytics</h3>
                  <p className="text-gray-600">
                    Real-time insights into employee sentiment, common concerns, 
                    and engagement trends across your organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Engagement Features */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Employee Engagement Suite</CardTitle>
            <CardDescription>
              Comprehensive tools to build stronger workplace relationships and improve employee satisfaction
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-4 border rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  24/7 HR Support
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Instant policy clarifications</li>
                  <li>• Leave balance inquiries</li>
                  <li>• Payroll questions</li>
                  <li>• Benefits information</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-green-50 to-green-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-green-600" />
                  Wellness Monitoring
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Mental health check-ins</li>
                  <li>• Stress level assessments</li>
                  <li>• Work-life balance tips</li>
                  <li>• Wellness program enrollment</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-purple-50 to-purple-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-purple-600" />
                  Grievance System
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Anonymous reporting</li>
                  <li>• Automatic escalation</li>
                  <li>• Case tracking</li>
                  <li>• Resolution monitoring</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-orange-50 to-orange-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                  Performance Insights
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Goal tracking assistance</li>
                  <li>• Performance feedback</li>
                  <li>• Career development guidance</li>
                  <li>• Skill gap analysis</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-red-50 to-red-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-red-600" />
                  Team Building
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Team activity suggestions</li>
                  <li>• Communication facilitation</li>
                  <li>• Conflict resolution</li>
                  <li>• Collaboration tools</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Smile className="h-5 w-5 text-indigo-600" />
                  Recognition Platform
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Peer recognition system</li>
                  <li>• Achievement celebrations</li>
                  <li>• Milestone tracking</li>
                  <li>• Reward recommendations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Build Stronger Employee Relationships
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Enhance employee satisfaction and engagement with AI-powered bilingual support and comprehensive HR assistance
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              Try Live Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
