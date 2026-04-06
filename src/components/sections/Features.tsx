"use client";

import { MagicCard } from "../ui/magic-card";
import { FadeUp, VideoText } from "../ui/animations";
import { IndianRupee } from "lucide-react";

const CMS = [
  { n: "01", t: "We Don\u2019t Overpromise", d: "Every strategy, campaign, and system we build is aligned with what we promise. Our goal is simple: consistently bring qualified enquiries to your business." },
  {
    n: "02", t: "Ad Investment \u0026 Scaling", d: (
      <span className="flex items-center gap-1 flex-wrap">
        We start with <IndianRupee className="h-3 w-3" />5,000 to test and optimise. Once winning strategies are identified, scaling requires continued investment \u2014 that\u2019s where real growth happens.
      </span>
    )
  },
  { n: "03", t: "Transparent Performance", d: "20\u201350 enquiries is a realistic expected range. Actual results depend on your offer strength, pricing, market demand, and competition. We show you real data weekly." },
  { n: "04", t: "Great Ads Need Great Creative", d: "We guide your content strategy. Professional shoots available at 50% off (Code: CONTENT50). The best system needs the best creative to perform." },
  { n: "05", t: "Your Support = Faster Results", d: "This system works best when we collaborate — timely communication, content sharing, quick follow-ups on leads. Your involvement directly accelerates results." },
  { n: "06", t: "90 Days, Not Overnight", d: "This is a system, not a magic trick. Businesses that stay consistent and trust the process see the strongest, longest-lasting results." },
];

export function Features() {
  return (
    <section
      id="features"
      style={{
        padding: "160px 10%",
        background: "#080809",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <FadeUp>
        <span className="textcenter" style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f5a623", marginBottom: "0.7rem", display: "block" }}>
          Our Commitment
        </span>
        <h2 className="textcenter" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(1.9rem, 4vw, 3.2rem)", textTransform: "uppercase", lineHeight: 1.06 }}>
          We Deliver<br />
          <VideoText text="What We Commit" />
        </h2>
        <div style={{ width: 40, height: 3, background: "", margin: "0.9rem 0 3.5rem" }} />
      </FadeUp>

      <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>
        {CMS.map((c, i) => (
          <MagicCard
            key={i}
            className="flex-col"
            style={{ padding: "4.2rem 3.5rem" }}
            gradientColor="#f5a62311"
          >
            <div style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "2.4rem", color: "#f5a623", opacity: 0.22, lineHeight: 1, marginBottom: "1.2rem" }}>
              {c.n}
            </div>
            <h3 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800, fontSize: "1rem", color: "#fff", marginBottom: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {c.t}
            </h3>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
              {c.d}
            </p>
          </MagicCard>
        ))}
      </div>
    </section>
  );
}
