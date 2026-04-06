import { ScrollVelocityText } from "../ui/animations";
import { ParticleBackground } from "../ui/particle-background";
import { IndianRupee } from "lucide-react";

export function VelocityBanner() {
  const parts = [
    "Meta Ads", "Google Ads", "Local SEO", "GMB Optimisation", "YouTube", "WhatsApp AI", "20\u201350 Leads", 
    (
      <span className="flex items-center gap-1.5" key="rupee-15k">
        <IndianRupee style={{ width: "3.5rem", height: "3.5rem" }} />15,000/Month
      </span>
    ), 
    "Only 10 Businesses", "Kolkata's #1 System"
  ];

  return (
    <div
      style={{
        position: "relative",
        padding: "3rem 0",
        background: "#080809",
        borderTop: "1px solid rgba(245,166,35,0.12)",
        borderBottom: "1px solid rgba(245,166,35,0.12)",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, opacity: 0.6 }}>
        <ParticleBackground />
      </div>

      <div style={{ position: "relative", zIndex: 2 }}>
        <ScrollVelocityText
          className="velocity-text"
          style={{
            fontFamily: "var(--font-montserrat)", 
            fontWeight: 900,
            fontSize: "4rem", 
            textTransform: "uppercase", 
            letterSpacing: "0.04em",
            background: "linear-gradient(110deg, #f5a623, #ffd47a, #f5a623)",
            WebkitBackgroundClip: "text", 
            WebkitTextFillColor: "transparent",
            backgroundClip: "text", 
            whiteSpace: "nowrap",
            opacity: 0.9
          } as React.CSSProperties}
        >
          {parts.map((p, i) => (
            <span key={i} className="flex items-center gap-8">
               {p}
            </span>
          ))}
        </ScrollVelocityText>
      </div>
    </div>
  );
}
