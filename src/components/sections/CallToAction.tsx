"use client";

import { VideoText, BlurIn, FadeUp } from "../ui/animations";
import { DotGlowBg } from "../ui/backgrounds";
import { BackgroundBeams } from "../ui/background-beams";
import { ArrowUp } from "lucide-react";

export function CallToAction() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section
      id="cta"
      style={{
        padding: "200px 10%",
        background: "#0d0f12",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <DotGlowBg />
      <BackgroundBeams className="opacity-30" />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 850, margin: "0 auto", textAlign: "center" }}>

        {/* Urgency Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(231,76,60,0.09)",
            border: "1px solid rgba(231,76,60,0.3)",
            padding: "0.6rem 1.6rem",
            borderRadius: "100px",
            marginBottom: "3rem"
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#e74c3c", animation: "pulse 1.4s infinite" }} />
          <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase", color: "#e74c3c" }}>
            Only 3 Spots Left  Closes Soon
          </span>
        </div>

        <h2 style={{
          fontFamily: "var(--font-montserrat)",
          fontWeight: 900,
          fontSize: "clamp(2.5rem, 6vw, 4.8rem)",
          textTransform: "uppercase",
          lineHeight: 0.95,
          letterSpacing: "-0.01em",
          marginBottom: "1.8rem",
          color: "#fff"
        }}>
          Get Your Custom<br />
          <VideoText text="90-Day Growth Plan" />
        </h2>

        <p style={{
          fontSize: "1.1rem",
          color: "rgba(255,255,255,0.5)",
          marginBottom: "3.5rem",
          maxWidth: "600px",
          margin: "0 auto 4rem",
          lineHeight: 1.8
        }}>
          Book a free 30-minute strategy call. We&rsquo;ll audit your business, identify your biggest growth opportunity, and show you exactly how the system works &mdash; zero obligation.
        </p>

        <div className="cta-buttons" style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
          <button
            onClick={() => window.open("https://wa.me/", "_blank")}
            style={{
              background: "linear-gradient(135deg, #f5a623, #e8890d)", color: "#000",
              border: "none", padding: "1.2rem 3rem", fontSize: "13px",
              fontFamily: "var(--font-montserrat)", fontWeight: 900,
              letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer",
              borderRadius: "8px", boxShadow: "0 15px 40px rgba(245,166,35,0.3)"
            }}
          >
            Claim Your Free Audit
          </button>
          <button
            onClick={() => window.open("https://wa.me/", "_blank")}
            style={{
              background: "transparent", color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "1.2rem 2.8rem", fontSize: "0.9rem",
              fontFamily: "var(--font-montserrat)", fontWeight: 700,
              letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer",
              borderRadius: "8px"
            }}
          >
            Connect on WhatsApp
          </button>
        </div>

        <div className="cta-signals" style={{ display: "flex", justifyContent: "center", gap: "5rem", flexWrap: "wrap", opacity: 0.6 }}>
          {["No commitment required", "100% free strategy call", "Results in 90 days", "Only 3 spots left"].map((sig, i) => (
            <div key={i} style={{ fontSize: "0.8rem", fontFamily: "var(--font-montserrat)", fontWeight: 800, letterSpacing: "0.12em", color: "#fff", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "#f5a623" }}>✓</span>
              {sig}
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "6rem", textAlign: "center", opacity: 0.3 }}>
        <button onClick={scrollToTop} style={{ background: "none", border: "none", color: "#fff", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.25em", cursor: "pointer", fontWeight: 800, display: "inline-flex", alignItems: "center", gap: "0.5rem", justifyContent: "center" }}>
          Back to Top <ArrowUp className="h-3 w-3" />
        </button>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.7); }
        }
      `}</style>
    </section>
  );
}
