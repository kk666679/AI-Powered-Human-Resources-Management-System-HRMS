"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  ArrowRight,
  Sparkles,
  Clock,
  Star,
  Play,
  AlertTriangle,
  CheckCircle,
  Award,
  Zap,
  TrendingUp,
  Phone,
  Calendar,
  Gift,
  Target,
  Rocket,
} from "lucide-react"

export function EnhancedHeroCTA() {
  const [countdown, setCountdown] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col gap-8 items-center">
      {/* Limited Time Offer Banner */}
      <div className="relative">
        <Badge className="mb-4 bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 px-6 py-2 text-sm font-bold animate-pulse">
          <Gift className="mr-2 h-4 w-4" />
          LIMITED TIME: 70% OFF + FREE SETUP
          <Sparkles className="ml-2 h-4 w-4" />
        </Badge>
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg blur opacity-25 animate-pulse"></div>
      </div>

      {/* Countdown Timer */}
      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/20">
        <div className="text-center mb-2">
          <span className="text-yellow-300 text-sm font-medium">⚡ OFFER EXPIRES IN:</span>
        </div>
        <div className="flex gap-4 justify-center">
          <div className="text-center">
            <div className="bg-white/10 rounded-lg px-3 py-2 min-w-[60px]">
              <div className="text-2xl font-bold text-white">{countdown.hours.toString().padStart(2, "0")}</div>
              <div className="text-xs text-blue-200">HOURS</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 rounded-lg px-3 py-2 min-w-[60px]">
              <div className="text-2xl font-bold text-white">{countdown.minutes.toString().padStart(2, "0")}</div>
              <div className="text-xs text-blue-200">MINS</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 rounded-lg px-3 py-2 min-w-[60px]">
              <div className="text-2xl font-bold text-white">{countdown.seconds.toString().padStart(2, "0")}</div>
              <div className="text-xs text-blue-200">SECS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main CTA Buttons */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center w-full max-w-2xl">
        <Button
          size="lg"
          className="relative bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 text-white shadow-2xl group overflow-hidden transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-bold"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Rocket className="mr-3 h-6 w-6 group-hover:animate-bounce" />
          <span className="relative">CLAIM 70% DISCOUNT NOW</span>
          <Badge className="ml-3 bg-yellow-400 text-black text-xs font-bold animate-bounce">SAVE RM 2,697</Badge>
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="border-2 border-white text-white hover:bg-white hover:text-blue-900 group transition-all duration-300 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-white/10"
        >
          <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
          Watch 2-Min Demo
          <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Risk Reversal */}
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 max-w-2xl">
        <div className="flex items-center justify-center gap-6 text-sm text-blue-100">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-green-400" />
            <span>60-Day Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span>No Setup Fees</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span>24hr Activation</span>
          </div>
        </div>
      </div>

      {/* Social Proof Ticker */}
      <div className="flex items-center gap-4 text-sm text-blue-200">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 bg-green-400 rounded-full animate-ping" />
          <span className="font-medium">847 companies joined this month</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>4.9/5 from 2,340+ reviews</span>
        </div>
      </div>
    </div>
  )
}

export function UrgencyComplianceCTA() {
  const [alertCount, setAlertCount] = useState(127)

  useEffect(() => {
    const interval = setInterval(() => {
      setAlertCount((prev) => prev + Math.floor(Math.random() * 3))
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-pink-600 px-6 py-20 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

      {/* Floating Alert Icons */}
      <div className="absolute top-10 left-10 animate-bounce">
        <AlertTriangle className="h-8 w-8 text-yellow-300" />
      </div>
      <div className="absolute top-20 right-20 animate-bounce delay-300">
        <AlertTriangle className="h-6 w-6 text-yellow-300" />
      </div>
      <div className="absolute bottom-20 left-20 animate-bounce delay-700">
        <AlertTriangle className="h-7 w-7 text-yellow-300" />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Alert Header */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <AlertTriangle className="h-8 w-8 text-yellow-300 animate-pulse" />
          <Badge className="bg-yellow-500 text-black font-bold text-lg px-6 py-2 animate-pulse">
            🚨 CRITICAL COMPLIANCE ALERT
          </Badge>
          <AlertTriangle className="h-8 w-8 text-yellow-300 animate-pulse" />
        </div>

        {/* Live Alert Counter */}
        <div className="mb-6 inline-flex items-center gap-3 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 border border-yellow-400/50">
          <div className="h-3 w-3 bg-red-500 rounded-full animate-ping" />
          <span className="text-yellow-300 font-bold">{alertCount} COMPANIES AT RISK TODAY</span>
        </div>

        <h2 className="mb-6 text-4xl md:text-6xl font-bold leading-tight">
          <span className="text-yellow-300">RM 50,000 PENALTY</span>
          <br />
          Deadline: March 31, 2024
        </h2>

        <p className="mb-8 text-xl text-red-100 max-w-3xl mx-auto">
          New Malaysian Employment Act amendments carry severe penalties. Don't risk your business - get compliant NOW
          with our emergency deployment service.
        </p>

        {/* Penalty Breakdown */}
        <div className="mb-8 grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
          <div className="bg-red-800/50 backdrop-blur-sm rounded-lg p-4 border border-red-400/30">
            <div className="text-2xl font-bold text-yellow-300">RM 50,000</div>
            <div className="text-sm text-red-200">Maximum Fine</div>
          </div>
          <div className="bg-red-800/50 backdrop-blur-sm rounded-lg p-4 border border-red-400/30">
            <div className="text-2xl font-bold text-yellow-300">6 Months</div>
            <div className="text-sm text-red-200">Possible Jail Time</div>
          </div>
          <div className="bg-red-800/50 backdrop-blur-sm rounded-lg p-4 border border-red-400/30">
            <div className="text-2xl font-bold text-yellow-300">24 Hours</div>
            <div className="text-sm text-red-200">Emergency Setup</div>
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold shadow-2xl group relative overflow-hidden transform hover:scale-105 transition-all duration-300 px-10 py-5 text-xl"
          >
            <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
            <Shield className="mr-3 h-6 w-6 group-hover:animate-spin" />
            EMERGENCY COMPLIANCE NOW
            <Badge className="ml-3 bg-red-600 text-white text-sm animate-pulse">24HR SETUP</Badge>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black group transition-all duration-300 px-8 py-5 text-lg font-semibold"
          >
            <Phone className="mr-3 h-6 w-6 group-hover:animate-bounce" />
            Call Emergency Hotline
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Emergency Features */}
        <div className="grid gap-4 md:grid-cols-2 max-w-3xl mx-auto text-left">
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <h3 className="font-bold mb-2 flex items-center gap-2 text-yellow-300">
              <Zap className="h-5 w-5" />
              Emergency Deployment
            </h3>
            <ul className="space-y-1 text-sm text-red-100">
              <li>✓ 24-hour full system setup</li>
              <li>✓ Dedicated compliance officer</li>
              <li>✓ Emergency hotline support</li>
              <li>✓ Penalty protection guarantee</li>
            </ul>
          </div>

          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <h3 className="font-bold mb-2 flex items-center gap-2 text-yellow-300">
              <Target className="h-5 w-5" />
              Compliance Guarantee
            </h3>
            <ul className="space-y-1 text-sm text-red-100">
              <li>✓ 100% Employment Act compliance</li>
              <li>✓ Automatic penalty protection</li>
              <li>✓ Legal document generation</li>
              <li>✓ Government filing automation</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-sm text-yellow-200 animate-pulse">⚡ Only 47 emergency slots remaining this month</p>
      </div>
    </section>
  )
}

export function FinalConversionCTA() {
  const [savings, setSavings] = useState(180000)
  const [companies, setCompanies] = useState(523)

  useEffect(() => {
    const interval = setInterval(() => {
      setSavings((prev) => prev + Math.floor(Math.random() * 1000))
      setCompanies((prev) => prev + (Math.random() > 0.7 ? 1 : 0))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 px-6 py-24 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative mx-auto max-w-6xl text-center">
        {/* Super Offer Badge */}
        <div className="mb-8">
          <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-lg px-8 py-3 font-bold animate-bounce">
            <Gift className="mr-2 h-5 w-5" />
            FINAL OFFER: 70% OFF + RM 10,000 BONUS
            <Sparkles className="ml-2 h-5 w-5" />
          </Badge>
        </div>

        <h2 className="mb-8 text-5xl md:text-7xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Last Chance
          </span>
          <br />
          Transform Your HR Forever
        </h2>

        <p className="mb-8 text-2xl text-blue-100 max-w-4xl mx-auto">
          Join {companies.toLocaleString()}+ Malaysian companies already saving RM {savings.toLocaleString()} annually.
          This exclusive offer expires in hours - don't miss out!
        </p>

        {/* Value Proposition Grid */}
        <div className="mb-10 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">RM {savings.toLocaleString()}</div>
              <div className="text-blue-200">Average Annual Savings</div>
              <div className="text-sm text-green-300 mt-2">↗ +15% this quarter</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-2">24 Hours</div>
              <div className="text-blue-200">Complete Setup Time</div>
              <div className="text-sm text-blue-300 mt-2">Fastest in Malaysia</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-blue-200">Compliance Guarantee</div>
              <div className="text-sm text-purple-300 mt-2">Zero penalties</div>
            </CardContent>
          </Card>
        </div>

        {/* Mega CTA Buttons */}
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-center mb-10">
          <Button
            size="lg"
            className="relative bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 text-white shadow-2xl group overflow-hidden transform hover:scale-110 transition-all duration-500 px-12 py-6 text-2xl font-bold"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/30 to-yellow-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500 skew-x-12 delay-200" />
            <Rocket className="mr-4 h-8 w-8 group-hover:animate-bounce" />
            <span className="relative">CLAIM 70% DISCOUNT</span>
            <Badge className="ml-4 bg-yellow-400 text-black text-lg font-bold animate-pulse px-3 py-1">
              SAVE RM 2,697
            </Badge>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-3 border-white text-white hover:bg-white hover:text-blue-900 group transition-all duration-500 px-12 py-6 text-xl font-bold backdrop-blur-sm bg-white/10 hover:scale-105 transform"
          >
            <Calendar className="mr-4 h-8 w-8 group-hover:scale-110 transition-transform" />
            Book Personal Demo
            <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>

        {/* Ultimate Guarantee */}
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto text-left mb-8">
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-3 text-green-300">
              <Shield className="h-6 w-6" />
              Ultimate Risk-Free Guarantee
            </h3>
            <ul className="space-y-2 text-green-100">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                60-day money-back guarantee
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Free data migration & setup
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Cancel anytime, keep the bonuses
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Penalty protection insurance
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-3 text-purple-300">
              <Award className="h-6 w-6" />
              Exclusive Bonuses Worth RM 10,000
            </h3>
            <ul className="space-y-2 text-purple-100">
              <li className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400" />
                Personal compliance consultant (RM 5,000 value)
              </li>
              <li className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400" />
                Custom AI agent training (RM 3,000 value)
              </li>
              <li className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400" />
                Priority 24/7 support (RM 2,000 value)
              </li>
              <li className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400" />
                Free quarterly compliance audits
              </li>
            </ul>
          </div>
        </div>

        {/* Final Urgency */}
        <div className="bg-red-600/20 backdrop-blur-sm rounded-xl p-6 border border-red-400/30 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <AlertTriangle className="h-6 w-6 text-yellow-400 animate-bounce" />
            <span className="text-yellow-300 font-bold text-lg">OFFER EXPIRES IN 6 HOURS</span>
            <AlertTriangle className="h-6 w-6 text-yellow-400 animate-bounce" />
          </div>
          <p className="text-red-200 text-center">
            Only 23 spots remaining at this price. Next 100 customers pay full price.
          </p>
        </div>

        <p className="mt-8 text-sm text-blue-300">
          🔒 Your data stays in Malaysia • SOC 2 certified • PDPA compliant • 256-bit encryption
        </p>
      </div>
    </section>
  )
}
