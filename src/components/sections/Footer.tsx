export function Footer() {
  return (
    <footer
      style={{
        background: "#040406",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "2.5rem 5%",
        display: "flex", alignItems: "center",
        justifyContent: "space-between", flexWrap: "wrap", gap: "1rem",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img
          src="/logo.jpeg"
          alt="Go Ads Live Logo"
          style={{ height: "64px", width: "auto", objectFit: "contain" }}
        />
      </div>

      <p style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.3)" }}>Transform Clicks Into Conversion</p>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
        <a
          href="tel:+919748228157"
          style={{
            fontSize: "0.85rem",
            color: "#f5a623",
            fontWeight: 800,
            fontFamily: "var(--font-montserrat)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            textDecoration: "none"
          }}
        >
          <span style={{ fontSize: "1rem" }}>&#128222;</span> +91 97482 28157
        </a>
        <p style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.3)" }}>
          Meta &middot; Google &middot; SEO &middot; GMB &middot; YouTube &middot; WhatsApp AI &middot; Kolkata
        </p>
      </div>
    </footer>
  );
}
