"use client";

import { useRef } from "react";
import { AnimatedBeam } from "../ui/animated-beam";
import { FadeUp, VideoText } from "../ui/animations";
import { Circle, User, Layout, MessageSquare, Search, CheckCircle2 } from "lucide-react";

const STEPS = [
  { n: "01", t: "Attention \u2014 Ads", d: "Meta + Google campaigns targeting high-intent local buyers. Every rupee tracked and optimised weekly." },
  { n: "02", t: "Trust \u2014 Content & SEO", d: "Premium content, GMB optimisation & Local SEO so your business dominates search and social." },
  { n: "03", t: "Conversion \u2014 WhatsApp AI", d: "Automated follow-up sequences that nurture every lead 24/7 until they book with you." },
  { n: "04", t: "Scale \u2014 Data & Optimisation", d: "Weekly reviews. Cut what fails. Scale what converts. More budget into proven winners." },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);

  return (
    <section
      id="process"
      style={{
        padding: "160px 10%",
        background: "#0d0f12",
        position: "relative",
        overflow: "hidden"
      }}
      className="textcenter">
      <FadeUp>
        <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f5a623", marginBottom: "0.7rem", display: "block" }}>
          The Solution
        </span>
        <h2 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(1.9rem, 4vw, 3.2rem)", textTransform: "uppercase", lineHeight: 1.06 }}>
          The Goadslive<br />
          <VideoText text="90-Day Lead System" />
        </h2>
      </FadeUp>

      <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "4rem", alignItems: "start" }}>

        {/* Step List */}
        <div style={{ border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", overflow: "hidden" }}>
          {STEPS.map((s, i) => (
            <div key={i} className="process-step hover:bg-[#131518]" style={{ display: "flex", gap: "1.5rem", padding: "2rem", borderBottom: i === 3 ? "none" : "1px solid rgba(255,255,255,0.06)", transition: "0.3s" }}>
              <div className="textleft" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "1.8rem", background: "linear-gradient(110deg, #f5a623, #ffd47a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {s.n}
              </div>
              <div>
                <h4 className="textleft" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem", color: "#fff" }}>{s.t}</h4>
                <p className="textleft" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Funnel Visual — AnimatedBeam */}
        <div
          ref={containerRef}
          style={{
            background: "#131518",
            border: "1px solid rgba(245,166,35,0.18)",
            borderRadius: "16px",
            padding: "4rem 3rem",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem"
          }}
        >


          <div ref={div1Ref} className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#f5a623] bg-neutral-900 shadow-[0_0_20px_rgba(245,166,35,0.3)]">
            <User className="h-7 w-7 text-[#f5a623]" />
          </div>
          <div ref={div2Ref} className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#f5a623] bg-neutral-900 shadow-[0_0_20px_rgba(245,166,35,0.3)]">
            <Search className="h-7 w-7 text-[#f5a623]" />
          </div>
          <div ref={div3Ref} className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#f5a623] bg-neutral-900 shadow-[0_0_20px_rgba(245,166,35,0.3)]">
            <Layout className="h-7 w-7 text-[#f5a623]" />
          </div>
          <div ref={div4Ref} className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#f5a623] bg-neutral-900 shadow-[0_0_20px_rgba(245,166,35,0.3)]">
            <MessageSquare className="h-7 w-7 text-[#f5a623]" />
          </div>
          <div ref={div5Ref} className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#f5a623] bg-neutral-900 shadow-[0_0_20px_rgba(245,166,35,0.3)]">
            <CheckCircle2 className="h-7 w-7 text-[#f5a623]" />
          </div>

          <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div2Ref} curvature={-50} duration={8} />
          <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div3Ref} curvature={-50} duration={8} />
          <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={-50} duration={8} />
          <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div5Ref} curvature={-50} duration={8} />

          <div className="process-funnel-label bg-[#f5a62311] border border-[#f5a62333] rounded-lg" style={{ marginLeft: "5rem", textAlign: "center", width: "100%", padding: "1rem" }}>
            <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.75rem", fontWeight: 800, color: "#f5a623", textTransform: "uppercase" }}>
              Random Marketing Predictable Enquiries
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
