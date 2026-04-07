import { Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="footer-container"
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

      <div className="footer-contact" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.2rem" }}>
        <a
          href="tel:+917439469915"
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
          <span style={{ fontSize: "1rem" }}>&#128222;</span> +91 74394 69915
        </a>
        <a
          href="tel:+919748228157"
          style={{
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.45)",
            fontWeight: 700,
            fontFamily: "var(--font-montserrat)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            textDecoration: "none"
          }}
        >
          <span style={{ fontSize: "0.85rem" }}>&#128222;</span> +91 97482 28157
        </a>
        <a
          href="https://www.google.com/maps/place/Go+Ads+Live/@22.5401258,88.363579,804m/data=!3m1!1e3!4m16!1m9!3m8!1s0x8efa41d2dcaa22df:0x97be7e3756ef27dd!2sGo+Ads+Live!8m2!3d22.5401258!4d88.363579!9m1!1b1!16s%2Fg%2F11w_h4zpd2!3m5!1s0x8efa41d2dcaa22df:0x97be7e3756ef27dd!8m2!3d22.5401258!4d88.363579!16s%2Fg%2F11w_h4zpd2!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "0.78rem",
            color: "rgba(255,255,255,0.6)",
            fontWeight: 500,
            fontFamily: "var(--font-montserrat)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            marginBottom: "0.5rem"
          }}
        >
          <span >1/C, Circus Market Pl, Beck Bagan, Kolkata 700017</span>
        </a>
        <p style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.3)", marginTop: "0.3rem" }}>
          Meta &middot; Google &middot; SEO &middot; GMB &middot; YouTube &middot; WhatsApp AI &middot; Kolkata
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column !important;
            justify-content: center !important;
            text-align: center !important;
            gap: 1.5rem !important;
          }
          .footer-contact {
            align-items: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
