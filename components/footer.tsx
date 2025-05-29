import Link from "next/link"
import { Shield, Mail, Phone, MapPin, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <Shield className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-gray-900">Malaysian AI-HRMS</span>
            </div>
            <p className="text-gray-600">
              The only AI-powered HR management system specifically designed for Malaysian Employment Law compliance.
              Trusted by 500+ Malaysian companies.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Kuala Lumpur, Malaysia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+60 3-2345-6789</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@malaysianhrms.com</span>
              </div>
            </div>
          </div>

          {/* AI Agents */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">AI Agents</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/agents/compliance" className="text-gray-600 hover:text-blue-600">
                  Compliance Guardian
                </Link>
              </li>
              <li>
                <Link href="/agents/payroll" className="text-gray-600 hover:text-blue-600">
                  Payroll Orchestrator
                </Link>
              </li>
              <li>
                <Link href="/agents/relations" className="text-gray-600 hover:text-blue-600">
                  Employee Relations AI
                </Link>
              </li>
              <li>
                <Link href="/agents/talent" className="text-gray-600 hover:text-blue-600">
                  Talent Intelligence
                </Link>
              </li>
              <li>
                <Link href="/agents/dispute" className="text-gray-600 hover:text-blue-600">
                  Legal Resolution AI
                </Link>
              </li>
              <li>
                <Link href="/agents/analytics" className="text-gray-600 hover:text-blue-600">
                  Workforce Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Malaysian Compliance */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Malaysian Compliance</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/compliance/employment-act" className="text-gray-600 hover:text-blue-600">
                  Employment Act 1955
                </Link>
              </li>
              <li>
                <Link href="/compliance/epf-socso" className="text-gray-600 hover:text-blue-600">
                  EPF & SOCSO
                </Link>
              </li>
              <li>
                <Link href="/compliance/industrial-relations" className="text-gray-600 hover:text-blue-600">
                  Industrial Relations Act
                </Link>
              </li>
              <li>
                <Link href="/compliance/minimum-wage" className="text-gray-600 hover:text-blue-600">
                  Minimum Wage Order
                </Link>
              </li>
              <li>
                <Link href="/compliance/pdpa" className="text-gray-600 hover:text-blue-600">
                  PDPA Compliance
                </Link>
              </li>
              <li>
                <Link href="/compliance/sharia" className="text-gray-600 hover:text-blue-600">
                  Sharia Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-blue-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-600 hover:text-blue-600">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-600 hover:text-blue-600">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-600 hover:text-blue-600">
                  Support Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                  Contact Sales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Malaysian AI-HRMS. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-600">
                Terms of Service
              </Link>
              <Link href="/compliance/certification" className="text-sm text-gray-600 hover:text-blue-600">
                Compliance Certification
              </Link>
            </div>
          </div>
        </div>

        {/* Malaysian Compliance Statement */}
        <div className="mt-6 rounded-lg bg-blue-50 p-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Globe className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Malaysian Compliance Guarantee</span>
          </div>
          <p className="text-xs text-blue-700">
            This system is certified compliant with Malaysian Employment Act 1955, EPF, SOCSO, EIS, and PDPA
            regulations. Regular updates ensure continuous compliance with Malaysian labor law changes.
          </p>
        </div>
      </div>
    </footer>
  )
}
