"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star, Users, Building, MapPin, Clock, CheckCircle, TrendingUp, Shield, ChevronRight } from "lucide-react"

// Real-time activity feed data
const activityFeed = [
  {
    id: 1,
    type: "signup",
    company: "Tech Solutions Sdn Bhd",
    location: "Kuala Lumpur",
    employees: 120,
    time: "2 minutes ago",
    plan: "Professional",
  },
  {
    id: 2,
    type: "upgrade",
    company: "Manufacturing Corp",
    location: "Johor Bahru",
    employees: 450,
    time: "5 minutes ago",
    plan: "Enterprise",
  },
  {
    id: 3,
    type: "compliance",
    company: "Plantation Holdings",
    location: "Sabah",
    employees: 800,
    time: "8 minutes ago",
    achievement: "100% EPF Compliance",
  },
  {
    id: 4,
    type: "signup",
    company: "Services Group Bhd",
    location: "Penang",
    employees: 75,
    time: "12 minutes ago",
    plan: "Starter",
  },
  {
    id: 5,
    type: "milestone",
    company: "Retail Chain Malaysia",
    location: "Selangor",
    employees: 300,
    time: "15 minutes ago",
    achievement: "RM 50K Saved",
  },
  {
    id: 6,
    type: "signup",
    company: "Construction Sdn Bhd",
    location: "Sarawak",
    employees: 200,
    time: "18 minutes ago",
    plan: "Professional",
  },
]

// Testimonial data with more detailed information
const testimonials = [
  {
    id: 1,
    name: "Dato' Ahmad Rahman",
    role: "CEO",
    company: "Malaysian Manufacturing Sdn Bhd",
    location: "Shah Alam, Selangor",
    employees: "1,200 employees",
    industry: "Manufacturing",
    content:
      "This AI-HRMS has revolutionized our compliance management. We've reduced legal risks by 90% and saved RM 200,000 annually on compliance costs. The multi-agent system handles everything from EPF calculations to Industrial Court preparations.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    savings: "RM 200,000",
    timeUsing: "18 months",
    favorite: "Compliance Guardian Agent",
  },
  {
    id: 2,
    name: "Sarah Lim Wei Ling",
    role: "HR Director",
    company: "Tech Innovate Malaysia",
    location: "Cyberjaya, Selangor",
    employees: "450 employees",
    industry: "Technology",
    content:
      "The multi-agent system is incredible. Our payroll processing time reduced from 3 days to 30 minutes, and EPF filing is completely automated. The Bahasa Malaysia support is perfect for our diverse workforce.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    savings: "RM 120,000",
    timeUsing: "12 months",
    favorite: "Payroll Orchestrator",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    role: "Operations Manager",
    company: "Plantation Holdings Bhd",
    location: "Kota Kinabalu, Sabah",
    employees: "2,800 employees",
    industry: "Plantation",
    content:
      "Managing workers across Peninsular Malaysia and Sabah was complex. Now our AI handles all jurisdictional differences automatically. The foreign worker compliance features are outstanding.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    savings: "RM 350,000",
    timeUsing: "24 months",
    favorite: "Legal Resolution AI",
  },
  {
    id: 4,
    name: "Siti Nurhaliza",
    role: "HR Manager",
    company: "Retail Excellence Sdn Bhd",
    location: "Kuching, Sarawak",
    employees: "680 employees",
    industry: "Retail",
    content:
      "The Employee Relations AI in Bahasa Malaysia is fantastic. Our staff love the instant responses to their queries. Grievance resolution time dropped from weeks to days.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    savings: "RM 85,000",
    timeUsing: "8 months",
    favorite: "Employee Relations AI",
  },
  {
    id: 5,
    name: "Dr. Michael Tan",
    role: "Chief People Officer",
    company: "Healthcare Solutions Malaysia",
    location: "Kuala Lumpur",
    employees: "950 employees",
    industry: "Healthcare",
    content:
      "The Talent Intelligence agent has transformed our recruitment. Zero bias incidents in 12 months, and our diversity metrics are the best in the industry. The predictive analytics are spot-on.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    savings: "RM 180,000",
    timeUsing: "15 months",
    favorite: "Talent Intelligence",
  },
  {
    id: 6,
    name: "Fatimah Abdullah",
    role: "Finance Director",
    company: "Islamic Banking Bhd",
    location: "Putrajaya",
    employees: "320 employees",
    industry: "Financial Services",
    content:
      "The Sharia-compliant features are exactly what we needed. Ta'widh clauses, halal practices, and Islamic employment contracts are all handled automatically. Truly Malaysian-focused.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    savings: "RM 95,000",
    timeUsing: "10 months",
    favorite: "Compliance Guardian",
  },
]

export function RealTimeActivityFeed() {
  const [currentActivity, setCurrentActivity] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentActivity((prev) => (prev + 1) % activityFeed.length)
        setIsVisible(true)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const activity = activityFeed[currentActivity]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "signup":
        return <Users className="h-4 w-4 text-green-500" />
      case "upgrade":
        return <TrendingUp className="h-4 w-4 text-blue-500" />
      case "compliance":
        return <Shield className="h-4 w-4 text-purple-500" />
      case "milestone":
        return <CheckCircle className="h-4 w-4 text-orange-500" />
      default:
        return <Building className="h-4 w-4 text-gray-500" />
    }
  }

  const getActivityMessage = (activity: any) => {
    switch (activity.type) {
      case "signup":
        return `${activity.company} just started their free trial`
      case "upgrade":
        return `${activity.company} upgraded to ${activity.plan}`
      case "compliance":
        return `${activity.company} achieved ${activity.achievement}`
      case "milestone":
        return `${activity.company} milestone: ${activity.achievement}`
      default:
        return `${activity.company} is using Malaysian AI-HRMS`
    }
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-sm">
      <Card
        className={`border-l-4 border-l-green-500 bg-white shadow-lg transition-all duration-300 ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="mt-1">{getActivityIcon(activity.type)}</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{getActivityMessage(activity)}</p>
              <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                <MapPin className="h-3 w-3" />
                <span>{activity.location}</span>
                <span>•</span>
                <span>{activity.employees} employees</span>
              </div>
              <div className="mt-1 flex items-center gap-1 text-xs text-gray-400">
                <Clock className="h-3 w-3" />
                <span>{activity.time}</span>
              </div>
            </div>
            <Badge variant="outline" className="text-xs">
              Live
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full border-0 bg-gradient-to-br from-white to-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Badge variant="secondary" className="ml-2 text-xs">
                      Verified
                    </Badge>
                  </div>

                  {/* Content */}
                  <blockquote className="text-sm text-gray-700 mb-4 flex-1 italic">"{testimonial.content}"</blockquote>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 mb-4 p-3 bg-white/50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{testimonial.savings}</div>
                      <div className="text-xs text-gray-500">Annual Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{testimonial.timeUsing}</div>
                      <div className="text-xs text-gray-500">Using System</div>
                    </div>
                  </div>

                  {/* Profile */}
                  <div className="flex items-start gap-3 pt-4 border-t border-gray-200">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-blue-100 text-blue-600">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                      <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                        <MapPin className="h-3 w-3" />
                        <span>{testimonial.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Building className="h-3 w-3" />
                        <span>{testimonial.employees}</span>
                        <span>•</span>
                        <span>{testimonial.industry}</span>
                      </div>
                    </div>
                  </div>

                  {/* Favorite Feature */}
                  <div className="mt-3 p-2 bg-blue-50 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Favorite AI Agent:</div>
                    <div className="text-sm font-medium text-blue-700">{testimonial.favorite}</div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  )
}

export function SocialProofStats() {
  const [stats, setStats] = useState({
    activeUsers: 1247,
    companiesServed: 523,
    payrollProcessed: 52.3,
    complianceRate: 99.9,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 3),
        companiesServed: prev.companiesServed + (Math.random() > 0.8 ? 1 : 0),
        payrollProcessed: prev.payrollProcessed + Math.random() * 0.1,
        complianceRate: 99.9, // Keep this stable
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100">
        <CardContent className="p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">{stats.activeUsers.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Active Users</div>
          <div className="flex items-center justify-center gap-1 mt-1">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-green-600">Live</span>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 bg-gradient-to-br from-green-50 to-green-100">
        <CardContent className="p-4 text-center">
          <div className="text-2xl font-bold text-green-600">{stats.companiesServed}</div>
          <div className="text-sm text-gray-600">Companies Served</div>
          <div className="text-xs text-gray-500 mt-1">+{Math.floor(Math.random() * 5) + 1} this week</div>
        </CardContent>
      </Card>

      <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100">
        <CardContent className="p-4 text-center">
          <div className="text-2xl font-bold text-purple-600">RM {stats.payrollProcessed.toFixed(1)}M</div>
          <div className="text-sm text-gray-600">Monthly Payroll</div>
          <div className="text-xs text-gray-500 mt-1">Processed this month</div>
        </CardContent>
      </Card>

      <Card className="border-0 bg-gradient-to-br from-orange-50 to-orange-100">
        <CardContent className="p-4 text-center">
          <div className="text-2xl font-bold text-orange-600">{stats.complianceRate}%</div>
          <div className="text-sm text-gray-600">Compliance Rate</div>
          <div className="flex items-center justify-center gap-1 mt-1">
            <CheckCircle className="h-3 w-3 text-green-500" />
            <span className="text-xs text-green-600">Guaranteed</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function CustomerActivityTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activityFeed.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-blue-600 text-white py-2 overflow-hidden">
      <div className="flex items-center justify-center gap-4 animate-pulse">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 bg-green-400 rounded-full animate-ping" />
          <span className="text-sm font-medium">LIVE ACTIVITY</span>
        </div>
        <div className="text-sm">
          {getActivityMessage(activityFeed[currentIndex])} • {activityFeed[currentIndex].location}
        </div>
        <ChevronRight className="h-4 w-4" />
      </div>
    </div>
  )
}

function getActivityMessage(activity: any) {
  switch (activity.type) {
    case "signup":
      return `${activity.company} started free trial`
    case "upgrade":
      return `${activity.company} upgraded to ${activity.plan}`
    case "compliance":
      return `${activity.company} achieved ${activity.achievement}`
    case "milestone":
      return `${activity.company}: ${activity.achievement}`
    default:
      return `${activity.company} is using AI-HRMS`
  }
}
