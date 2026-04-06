"use client";

import { FadeUp, VideoText, BlurIn } from "../ui/animations";

export function ExclusiveSlots() {
  const scrollToCta = () => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section 
      id="exclusive"
      style={{
        padding: "160px 10%",
        background: "#0d0f12",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "1px solid rgba(245,166,35,0.18)",
        borderBottom: "1px solid rgba(245,166,35,0.18)"
      }}
    >
      {/* Background Large Number */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "clamp(12rem, 25vw, 30rem)", fontWeight: 900, color: "rgba(245,166,35,0.03)", pointerEvents: "none", fontFamily: "var(--font-montserrat)", lineHeight: 1 }}>
        10
      </div>

      <div style={{ position: "relative", zIndex: 10 }}>
        <FadeUp>
          <div style={{ display: "inline-block", background: "rgba(245,166,35,0.08)", border: "1px solid rgba(245,166,35,0.18)", padding: "0.5rem 1.5rem", borderRadius: "100px", marginBottom: "2rem" }}>
             <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f5a623" }}>
                Premium & Exclusive
             </span>
          </div>
          
          <h2 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", textTransform: "uppercase", lineHeight: 1, marginBottom: "1.5rem" }}>
             <BlurIn text="Not for Everyone." className="text-white" />
          </h2>
          
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", maxWidth: 520, margin: "0 auto 3rem", lineHeight: 1.8 }}>
             We are not a generic agency. We work with only <strong style={{color:"#f5a623"}}>10 serious businesses</strong> at a time &mdash; so every client gets our complete focus, strategy, and best possible results.
          </p>

          {/* Slot Indicators */}
          <div className="slot-indicators" style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: "1rem" }}>
             {[...Array(10)].map((_, i) => (
                <div 
                   key={i} 
                   style={{ 
                      width: 32, height: 8, 
                      borderRadius: 2, 
                      background: i < 7 ? "linear-gradient(90deg, #f5a623, #e8890d)" : "rgba(255,255,255,0.1)",
                      border: i < 7 ? "none" : "1px solid rgba(255,255,255,0.12)"
                   }} 
                />
             ))}
          </div>

          <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "3.5rem" }}>
             7 of 10 slots filled &mdash; <span style={{ color: "#f5a623" }}>3 remaining</span>
          </div>

          <button
             onClick={scrollToCta}
             style={{
               background: "linear-gradient(135deg, #f5a623, #e8890d)", color: "#000",
               border: "none", padding: "1.2rem 3.5rem", fontSize: "0.9rem",
               fontFamily: "var(--font-montserrat)", fontWeight: 900,
               letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer",
               borderRadius: "8px", boxShadow: "0 10px 40px rgba(245,166,35,0.4)"
             }}
          >
             Claim Your Spot →
          </button>
        </FadeUp>
      </div>
    </section>
  );
}
