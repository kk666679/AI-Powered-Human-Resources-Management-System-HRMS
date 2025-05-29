export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "1rem",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        Malaysian AI-HRMS
      </h1>

      <p
        style={{
          fontSize: "1.25rem",
          marginBottom: "2rem",
          maxWidth: "600px",
          lineHeight: "1.6",
        }}
      >
        AI-powered HR management system designed specifically for Malaysian Employment Act compliance
      </p>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            background: "#4CAF50",
            color: "white",
            border: "none",
            padding: "1rem 2rem",
            fontSize: "1.1rem",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            transition: "transform 0.2s",
          }}
        >
          Start Free Trial 🚀
        </button>

        <button
          style={{
            background: "transparent",
            color: "white",
            border: "2px solid white",
            padding: "1rem 2rem",
            fontSize: "1.1rem",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Watch Demo 📹
        </button>
      </div>

      <div
        style={{
          marginTop: "3rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.1)",
            padding: "1.5rem",
            borderRadius: "12px",
            backdropFilter: "blur(10px)",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🛡️</div>
          <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.2rem" }}>Compliance Guardian</h3>
          <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.9 }}>Automated Malaysian Employment Act monitoring</p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.1)",
            padding: "1.5rem",
            borderRadius: "12px",
            backdropFilter: "blur(10px)",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🧮</div>
          <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.2rem" }}>Payroll Orchestrator</h3>
          <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.9 }}>Smart EPF, SOCSO & tax calculations</p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.1)",
            padding: "1.5rem",
            borderRadius: "12px",
            backdropFilter: "blur(10px)",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>💬</div>
          <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.2rem" }}>Employee Relations AI</h3>
          <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.9 }}>Bilingual employee support assistant</p>
        </div>
      </div>

      <div
        style={{
          marginTop: "3rem",
          padding: "1rem",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "8px",
          fontSize: "0.9rem",
        }}
      >
        ⭐ Trusted by 500+ Malaysian companies • 99.9% compliance rate • 60-day guarantee
      </div>
    </div>
  )
}
