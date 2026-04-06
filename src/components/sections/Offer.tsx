"use client";

import { MagicCard } from "../ui/magic-card";
import { ShineBorder } from "../ui/shine-border";
import { FadeUp, VideoText, BlurIn } from "../ui/animations";
import { CheckCircle2, TrendingUp, Users, MapPin, Play, MessageSquare, Target, Wallet, IndianRupee } from "lucide-react";

const OLIST = [
  {
    t: (
      <span className="flex items-center gap-1">
        <IndianRupee className="h-3.5 w-3.5" />5,000 Ad Spend Included
      </span>
    ), d: (
      <span className="block mt-1">
        We deploy <IndianRupee className="inline-block h-3 w-3 relative -top-[1px]" /> 5,000 into your Meta/Google campaigns to test and identify winning strategies from day one.
      </span>
    ), i: <Wallet className="h-5 w-5 text-[#f5a623]" />
  },
  { t: "Reach Up to 1 Lakh People", d: "Your offer reaches up to 1,00,000 targeted local potential customers every month.", i: <Users className="h-5 w-5 text-[#f5a623]" /> },
  { t: "20–50 Qualified Enquiries", d: "Real, high-intent enquiries from people actively looking for your service — not bots or junk leads.", i: <TrendingUp className="h-5 w-5 text-[#f5a623]" /> },
  { t: "Local SEO + GMB Optimisation", d: "Rank higher on Google Maps. Own local search. Get free organic leads stacked on top of paid.", i: <MapPin className="h-5 w-5 text-[#f5a623]" /> },
  { t: "YouTube + Social Media Branding", d: "Video ads, channel growth, and complete brand identity that converts across every platform.", i: <Play className="h-5 w-5 text-[#f5a623]" /> },
  { t: "WhatsApp AI Lead Nurturing", d: "Fully automated system that follows up with every lead 24/7 — from enquiry to confirmed booking.", i: <MessageSquare className="h-5 w-5 text-[#f5a623]" /> },
  { t: "Competitor Analysis + Strategy", d: "Deep market audit + custom 90-day growth roadmap built specifically for your business.", i: <Target className="h-5 w-5 text-[#f5a623]" /> },
];

export function Offer() {
  const scrollToCta = () => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="offer"
      style={{
        padding: "160px 10%",
        background: "#080809",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <FadeUp>
        <span className="textcenter" style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f5a623", marginBottom: "0.7rem", display: "block" }}>
          The Offer
        </span>
        <h2 className="textcenter" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(1.9rem, 4vw, 3.2rem)", textTransform: "uppercase", lineHeight: 1.06 }}>
          Everything Inside<br />
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <VideoText text="15,000/Month System" />
            </div>
          </div>
        </h2>
      </FadeUp>

      <div className="offer-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "8rem", alignItems: "start" }}>

        {/* Magic UI Offer List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", margin: "10px" }}>
          {OLIST.map((o, i) => (
            <MagicCard
              key={i}
              className="offer-card flex-col"
              style={{ padding: "2.8rem" }}
              gradientColor="#f5a62311"
            >
              <div style={{ padding: "0.8rem", background: "#131518", borderRadius: "12px", border: "1px solid rgba(245,166,35,0.12)", width: "fit-content", marginBottom: "1.5rem" }}>
                {o.i}
              </div>
              <div>
                <h4 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.85rem", color: "#fff", marginBottom: "3px" }}>{o.t}</h4>
                <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{o.d}</p>
              </div>
            </MagicCard>
          ))}
        </div>

        {/* Shine Border Pricing Card */}
        <div className="offer-pricing" style={{ position: "sticky", top: "120px" }}>
          <ShineBorder
            borderRadius={16}
            borderWidth={2}
            shineColor={["#f5a623", "#ffd47a", "#ff9d00"]}
            className="bg-neutral-900 border-none"
          >
            <div className="offer-pricing-inner" style={{ padding: "3rem", position: "relative" }}>
              <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "linear-gradient(135deg, #f5a623, #e8890d)", color: "#000", fontFamily: "var(--font-montserrat)", fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.3rem 0.8rem", borderRadius: "4px" }}>
                Exclusive
              </div>
              <div style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1rem" }}>
                Complete System
              </div>
              <div className="offer-price-row" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "5rem", lineHeight: 1, color: "#f5a623", marginBottom: "1rem", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: "2.5rem" }}>
                  <IndianRupee className="offer-rupee h-10 w-10" />
                </span>15,000
              </div>
              <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", marginBottom: "2.5rem" }}>
                per month • 90-day commitment
              </div>

              <ul style={{ display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "3rem" }}>
                {[
                  { t: "5,000 ad spend included", hasIcon: true },
                  "Meta Ads + Google Ads",
                  "Local SEO + GMB optimisation",
                  "YouTube + Social branding",
                  "WhatsApp AI lead system",
                  "Competitor analysis + strategy",
                  "Weekly performance reviews",
                  "Dedicated account manager"
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.9rem", color: "rgba(255,255,255,0.7)" }}>
                    <CheckCircle2 className="h-4 w-4 text-[#f5a623]" />
                    {typeof item === "string" ? item : (
                      <span className="flex items-center gap-1">
                        <IndianRupee className="h-3.5 w-3.5" />{item.t}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToCta}
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, #f5a623, #e8890d)", color: "#000",
                  border: "none", padding: "1.4rem", fontSize: "1rem",
                  fontFamily: "var(--font-montserrat)", fontWeight: 900,
                  letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer",
                  borderRadius: "12px", boxShadow: "0 20px 50px rgba(245,166,35,0.4)"
                }}
                className="textsize" >
                Book a Free Strategy Call →
              </button>
            </div>
            <div style={{ padding: "1.2rem", background: "rgba(245,166,35,0.06)", borderTop: "1px solid rgba(245,166,35,0.18)", textAlign: "center", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>
              Professional shoot at <strong style={{ color: "#f5a623" }}>50% off</strong>  Code: <span style={{ fontWeight: 800, color: "#fff" }}>CONTENT50</span>
            </div>
          </ShineBorder>
        </div>
      </div>
    </section >
  );
}
