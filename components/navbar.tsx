"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Shield, Menu, X, ArrowRight, Globe, Calculator, Scale, MessageSquare, Brain } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xl font-bold text-gray-900">Malaysian AI-HRMS</span>
            <Badge variant="secondary" className="ml-2 bg-red-100 text-red-700">
              <Globe className="mr-1 h-3 w-3" />
              MY Compliant
            </Badge>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>AI Agents</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-medium">Core Agents</h4>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/agents/compliance"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-red-500" />
                            <div className="text-sm font-medium">Compliance Guardian</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Malaysian employment law monitoring
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/agents/payroll"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="flex items-center gap-2">
                            <Calculator className="h-4 w-4 text-green-500" />
                            <div className="text-sm font-medium">Payroll Orchestrator</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            EPF/SOCSO automated processing
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/agents/relations"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-blue-500" />
                            <div className="text-sm font-medium">Employee Relations AI</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Bilingual employee support
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Advanced Agents</h4>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/agents/talent"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="flex items-center gap-2">
                            <Brain className="h-4 w-4 text-purple-500" />
                            <div className="text-sm font-medium">Talent Intelligence</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Bias-free recruitment & diversity
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/agents/dispute"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="flex items-center gap-2">
                            <Scale className="h-4 w-4 text-orange-500" />
                            <div className="text-sm font-medium">Legal Resolution AI</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Industrial Court simulation
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">By Industry</h4>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/solutions/manufacturing"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Manufacturing</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Shift work & overtime compliance
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/solutions/plantation"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Plantation</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Foreign worker management
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/solutions/services"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Services</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Professional services compliance
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/pricing"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Pricing
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/compliance"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Compliance
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost">Login</Button>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg group relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              <span className="relative flex items-center">
                Start FREE Trial
                <Badge className="ml-2 bg-white/20 text-white text-xs">30 Days</Badge>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link href="/agents" className="text-gray-900 hover:text-blue-600">
              AI Agents
            </Link>
            <Link href="/solutions" className="text-gray-900 hover:text-blue-600">
              Solutions
            </Link>
            <Link href="/pricing" className="text-gray-900 hover:text-blue-600">
              Pricing
            </Link>
            <Link href="/compliance" className="text-gray-900 hover:text-blue-600">
              Compliance
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <Button variant="ghost" className="w-full justify-start mb-2">
                Login
              </Button>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">Start Free Trial</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
