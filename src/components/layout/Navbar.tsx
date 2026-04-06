"use client";

export function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: "28px",
        left: 0,
        right: 0,
        zIndex: 999,
        height: 62,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 5%",
        background: "rgba(8,8,9,0.96)",
        borderBottom: "1px solid rgba(245,166,35,0.18)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img
          src="/logo.jpeg"
          alt="Go Ads Live Logo"
          style={{ height: "58px", width: "auto", objectFit: "contain" }}
        />
      </div>

      {/* Buttons */}
      <div className="navbar-buttons" style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button
          onClick={() => window.open("https://wa.me/", "_blank")}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.07)",
            color: "rgba(255,255,255,0.5)",
            padding: "0.42rem 0.95rem",
            fontSize: "0.68rem",
            fontFamily: "var(--font-montserrat)",
            fontWeight: 600,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          WhatsApp
        </button>
        <button
          onClick={() => scrollToSection("cta")}
          style={{
            background: "linear-gradient(135deg, #f5a623, #e8890d)",
            color: "#000",
            border: "none",
            padding: "0.48rem 1.2rem",
            fontSize: "0.68rem",
            fontFamily: "var(--font-montserrat)",
            fontWeight: 800,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "opacity 0.2s",
          }}
          className=" hidden md:block" >
          Book Strategy Call
        </button>
      </div>
    </nav>
  );
}
