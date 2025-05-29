import type React from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Malaysian AI-HRMS</title>
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "Arial, sans-serif" }}>{children}</body>
    </html>
  )
}


import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
