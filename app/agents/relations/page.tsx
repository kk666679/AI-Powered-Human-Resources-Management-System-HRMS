import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@radix-ui/themes"
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Employee Relations Portal</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resolve workplace concerns, manage disputes, and maintain positive employee relations with AI-powered bilingual support and insights.
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

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Case Management Section */}
          <Card className="bg-white rounded-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-800 mb-2">Case Management</CardTitle>
              <CardDescription>
                Track, manage, and resolve employee cases efficiently with automated workflows.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-600 space-y-2">
                <li>• Anonymous grievance reporting</li>
                <li>• Automatic escalation</li>
                <li>• Case tracking and resolution monitoring</li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Dispute Resolution Section */}
          <Card className="bg-white rounded-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-800 mb-2">Dispute Resolution</CardTitle>
              <CardDescription>
                AI-powered guidance for fair and compliant dispute handling.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-600 space-y-2">
                <li>• Step-by-step dispute resolution</li>
                <li>• Malaysian labor law compliance</li>
                <li>• Mediation and documentation tools</li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Policy Guidance Section */}
          <Card className="bg-white rounded-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-800 mb-2">Policy Guidance</CardTitle>
              <CardDescription>
                Instant answers to HR policy questions in English and Bahasa Malaysia.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-600 space-y-2">
                <li>• Leave, payroll, and benefits info</li>
                <li>• Custom policy search</li>
                <li>• Bilingual support</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Build Stronger Employee Relationships
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Enhance employee satisfaction and engagement with AI-powered bilingual support and comprehensive HR assistance.
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
