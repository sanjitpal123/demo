"use client";

import { CardContainer, CardBody, CardItem } from "../ui/three-d-card";
import { FadeUp, VideoText, BlurIn } from "../ui/animations";
import { DotGlowBg } from "../ui/backgrounds";
import { NodeConnections } from "../ui/node-connections";
import { Smartphone, Search, TrendingUp, MapPin, Play, MessageCircle } from "lucide-react";

const SVCS = [
  { t: "Meta Ads", d: "Facebook & Instagram campaigns for high-intent local leads", i: <Smartphone className="h-8 w-8 text-[#f5a623]" /> },
  { t: "Google Ads", d: "Search & display ads targeting ready-to-buy customers", i: <Search className="h-8 w-8 text-[#f5a623]" /> },
  { t: "Local SEO", d: "Rank higher on Google for local searches in your city", i: <TrendingUp className="h-8 w-8 text-[#f5a623]" /> },
  { t: "GMB Optimisation", d: "Dominate Google Maps and local search results 24/7", i: <MapPin className="h-8 w-8 text-[#f5a623]" /> },
  { t: "YouTube", d: "Video ads & channel growth for brand authority", i: <Play className="h-8 w-8 text-[#f5a623]" /> },
  { t: "WhatsApp AI", d: "Automated lead nurturing from enquiry to confirmed booking", i: <MessageCircle className="h-8 w-8 text-[#f5a623]" /> },
];

export function Services() {
  const scrollToCta = () => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="services-section" style={{ padding: "80px 10% 40px", background: "#080809", position: "relative", overflow: "hidden" }}>
      <DotGlowBg />

      <FadeUp className="flex flex-col items-center text-center md:items-start md:text-left">
        <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f5a623", marginBottom: "0.7rem", display: "block" }}>
          What We Manage
        </span>
        <h2 className="services-heading" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(2rem, 4.5vw, 3.8rem)", textTransform: "uppercase", lineHeight: 1.06 }}>
          Full-Stack Growth<br />
          <VideoText text="Across Every Channel" />
        </h2>
        <div style={{ width: 40, height: 3, background: "linear-gradient(90deg, #f5a623, #ffd47a)", margin: "0.9rem 0 2rem" }} className="mx-auto md:mx-0" />
      </FadeUp>

      <div className="node-connections-wrapper -10" style={{ marginBottom: "3rem" }}>
        <NodeConnections />
      </div>

      {/* Magic UI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {SVCS.map((s, i) => (
          <CardContainer key={i} className="inter-var w-full h-full">
            <CardBody className="bg-[#131518] relative group/card border border-white/5 w-full h-full h-[210px] md:min-h-[300px] rounded-2xl shadow-2xl shadow-[#f5a623]/10 transition-all duration-300 flex flex-col justify-center items-center text-center px-6 py-8 lg:px-8 lg:py-10">
              <CardItem translateZ="20" className="w-full flex flex-col items-center">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#f5a623]/10 to-transparent flex items-center justify-center mb-6 border border-[#f5a623]/20 shadow-inner">
                  {s.i}
                </div>

                {/* Title */}
                <h4 className="font-extrabold uppercase text-[#f5a623] mb-3 tracking-wide text-[1rem]">
                  {s.t}
                </h4>

                {/* Description */}
                <p className="text-white/60 text-[0.9rem] leading-relaxed max-w-[260px] mx-auto">
                  {s.d}
                </p>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      <FadeUp delay={0.4}>
        <div
          className="services-cta-bar"
          style={{
            marginTop: "4rem",
            background: "rgba(245,166,35,0.05)", border: "1px solid rgba(245,166,35,0.18)",
            padding: "1.5rem 2.5rem", display: "flex", alignItems: "center",
            justifyContent: "space-between", gap: "1rem", borderRadius: "12px"
          }}
        >
          <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.85rem", fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>
            One system. <strong style={{ color: "#f5a623" }}>Six channels.</strong> All managed by us. You focus on running your business.
          </span>
          <button
            onClick={scrollToCta}
            style={{
              background: "linear-gradient(135deg, #f5a623, #e8890d)", color: "#000",
              border: "none", padding: "0.8rem 1.8rem",
              fontSize: "0.75rem", fontFamily: "var(--font-montserrat)", fontWeight: 800,
              letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer",
              borderRadius: "4px"
            }}
          >
            See How It Works
          </button>
        </div>
      </FadeUp>
    </section>
  );
}
