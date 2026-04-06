"use client";

import { FadeUp, VideoText, BlurIn } from "../ui/animations";

const PROCS = [
  { n: "01", t: "Strategy", d: "Deep audit of your business, audience & competitors. Custom 90-day growth roadmap built for you." },
  { n: "02", t: "Launch", d: "Ads, SEO, GMB, content & funnels deployed simultaneously. Fast execution, no wasted weeks." },
  { n: "03", t: "Optimise", d: "Weekly data reviews. Cut what fails. Double down on what converts. Transparent reporting." },
  { n: "04", t: "Scale", d: "Proven budget deployed. Leads become consistent, predictable, and profitable every month." },
];

export function HowWeWork() {
  return (
    <section
      id="how-we-work"
      style={{
        padding: "100px 5%",
        background: "#0d0f12",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <FadeUp>
        <span className="textcenter" style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f5a623", marginBottom: "0.7rem", display: "block" }}>
          How We Work
        </span>
        <h2 className="textcenter" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(1.9rem, 4vw, 3.2rem)", textTransform: "uppercase", lineHeight: 1.06 }}>
          Simple. Proven.<br />
          <VideoText text="Scalable." />
        </h2>
        <div style={{ width: 40, height: 3, background: "", margin: "0.9rem 0 3.5rem" }} />
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-4 border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
        {PROCS.map((p, i) => (
          <div
            key={i}
            style={{
              padding: "3rem 2rem",
              borderRight: i === 3 ? "none" : "1px solid rgba(255,255,255,0.05)",
              background: "#131518",
              transition: "background 0.3s"
            }}
            className="hover:bg-[#181a1e] group"
          >
            <div style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 900,
              fontSize: "3.5rem",
              lineHeight: 1,
              background: "linear-gradient(135deg, #f5a623, #ffd47a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 0.3,
              marginBottom: "1.2rem",
              transition: "opacity 0.3s"
            }} className="group-hover:opacity-60">
              {p.n}
            </div>
            <h3 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800, fontSize: "0.95rem", color: "#fff", marginBottom: "0.6rem", textTransform: "uppercase" }}>
              {p.t}
            </h3>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
              {p.d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
