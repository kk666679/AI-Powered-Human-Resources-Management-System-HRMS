# 🤖 AI Human Resource Management System (AI-HRMS)

A modern, AI-powered, multi-tenant HRMS platform designed for Malaysian companies.  
Built with Next.js, Radix UI, and integrated AI agents, AI-HRMS automates HR operations, ensures legal compliance, and delivers real-time analytics.

---

## 🧠 Overview

> This system leverages modern frontend/backends with AI-enhanced HR tools tailored for Malaysia's legal and cultural environment.

### 🔧 System Architecture

```mermaid
graph TD

  subgraph Frontend [Next.js Frontend]
    A1[Login Page]
    A2[Dashboard]
    A3[Leave & Policy Forms]
    A4[Employee Directory]
  end

  subgraph Backend [Express + Node.js API]
    B1[Auth Service]
    B2[Employee Management]
    B3[Leave Processing]
    B4[AI Agent & Compliance Layer]
    B5["Database Access (NeonDB)"]
  end

  subgraph AI [AI & Automation]
    C1[Chat-based HR Assistant]
    C2[Performance Analyzer]
  end

  A1 --> B1
  A2 --> B2
  A3 --> B3
  A4 --> B2
  B1 --> B5
  B2 --> B5
  B3 --> B5
  B4 --> B5
  A2 --> C1
  A4 --> C2
  C1 --> B4
  C2 --> B4

````

---

## 🚀 Features

### 🛡️ Authentication & Security

* JWT-based auth
* Role-based route protection
* Secure signup/login flows

### 📊 Dashboard & Analytics

* Real-time HR KPIs
* AI agent monitoring
* Payroll, leave, and compliance visualizations

### 👥 Employee Management

* Add/update employees (IC/Passport, EPF, SOCSO)
* Search, sort, and filter directory
* Supports Malaysian formatting & validations

### 🧑‍💼 Performance & Leave Management

* AI-assisted performance tracking
* Leave requests with automated validation
* Built-in support for Malaysian leave policies

### 📘 Policy Guidance

* Compliance engine with **Employment Act 1955**
* English & Bahasa Malaysia support
* Instant HR Q\&A via AI

### 🏢 Multi-Tenant Support

* Tenant-scoped data isolation
* 30-day free trial for new company sign-ups

---

## 🧰 Tech Stack

| Layer          | Technology                                        |
| -------------- | ------------------------------------------------- |
| **Frontend**   | Next.js, React 19, Tailwind CSS, Radix UI         |
| **Backend**    | Node.js, Express, JWT, PostgreSQL via Neon        |
| **AI & Tools** | Zod, React Hook Form, Lucide, shadcn/ui, Recharts |
| **Web3 Ready** | Web3, Ethers, viem, @web3-react/core              |

---

## 🛠 Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run development server**

   ```bash
   npm run dev
   ```

3. **Build for production**

   ```bash
   npm run build
   ```

---

## 🧪 Running Tests

> *Note: Ensure environment variables are set before testing.*

```bash
npm run test
npm run test:integration
```

---

## 🇲🇾 Malaysian Compliance

* ✅ EPF, SOCSO, EIS integration
* ✅ Leave types & HR forms compliant with Malaysian law
* ✅ Built-in Employment Act 1955 validation
* ✅ Bilingual UX (English & Bahasa Malaysia)

---

## 📈 Roadmap

* [ ] Mobile App (iOS & Android)
* [ ] AI resume screening
* [ ] Self-service employee portal
* [ ] HR ticketing system
* [ ] Multi-currency payroll for SEA

---

## 🤝 Contributing

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Open a pull request

> For major feature proposals, please create an issue first to discuss the changes.

---

## 📦 Project Dependencies

> Full list found in [`package.json`](./package.json)

### Examples:

* `next@15.3.2`
* `react@19.1.0`
* `tailwindcss@3.4.17`
* `@radix-ui/react-*` (various)
* `@hookform/resolvers`, `zod`, `lucide-react`, `recharts`, `web3`, `ethers`

---

## 📄 License

MIT © 2025 — \[Chemmara Enterprise]
