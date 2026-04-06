"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MovingGrid } from "../ui/moving-grid";
import { ParticleBackground } from "../ui/particle-background";
import { BackgroundBeams } from "../ui/background-beams";
import { BlurIn, GradualSpacing, TypingAnimation, VideoText } from "../ui/animations";
import { IndianRupee } from "lucide-react";

const CAMPAIGNS = [
  { biz: "Irfa Family Salon", val: "38 leads \u00B7 46 CPL", hasRupee: true },
  { biz: "Auto Aura", val: "52 leads \u00B7 41 CPL", hasRupee: true },
  { biz: "Zohra Style", val: "29 leads \u00B7 55 CPL", hasRupee: true },
  { biz: "Bengal Ice Agency", val: "41 leads \u00B7 38 CPL", hasRupee: true },
];

const METRICS = [
  { n: "48", l: "Avg CPL", hasRupee: true },
  { n: "3.2\u00D7", l: "ROAS" },
  { n: "1L+", l: "Reach" },
];

const NOTIFS = [
  { n: "New lead \u2014 Irfa Salon", m: "Appointment query via WhatsApp" },
  { n: "New lead \u2014 Auto Aura", m: "Google Ad enquiry received" },
  { n: "New lead \u2014 Zohra Style", m: "Meta form submission" },
  { n: "New lead \u2014 Bengal Ice", m: "GMB call tracking triggered" },
];

export function Hero() {
  const [notifIdx, setNotifIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotifIdx((prev) => (prev + 1) % NOTIFS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const scrollToCta = () => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "calc(100vh - 88px)",
        display: "grid",
        gridTemplateColumns: "55% 45%",
        alignItems: "center",
        padding: "160px 10% 80px",
        overflow: "hidden",
        background: "#080809"
      }}
    >
      {/* Background Polish \u2014 MagicUI Components */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", right: "5%", top: "15%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 65%)" }} />
        <MovingGrid className="opacity-20" />
        <ParticleBackground />
        <BackgroundBeams className="opacity-40" />
      </div>

      {/* Left Content */}
      <div className="hero-left" style={{ position: "relative", zIndex: 10, paddingRight: "3rem" }}>
        {/* Etag \u2014 BlurIn */}
        <div className="hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(245,166,35,0.08)", border: "1px solid rgba(245,166,35,0.18)", padding: "0.6rem 1.4rem", marginBottom: "2.5rem", borderRadius: "100px" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f5a623", animation: "ping 1.5s infinite" }} />
          <BlurIn
            text="90-Day Lead Generation System Only 10 Businesses"
            className="text-[0.7rem] font-black tracking-[0.18em] uppercase text-[#f5a623]"
          />
        </div>

        <h1 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: "0.5rem" }} className="changingHeading">
          <GradualSpacing
            text="We Invest"
            className="hero-heading-text text-[3.5rem] leading-[1]"
          />
          <div className="flex items-center hero-price-row">
            <IndianRupee style={{ fontSize: "5rem", height: "5.5rem", width: "5.5rem" }} className="text-[#f5a623]" />
            <VideoText
              text="5,000"
              className="hero-price-text"
              style={{ fontSize: "6rem", display: "block", lineHeight: 0.85, letterSpacing: "-0.04em" }}
            />
          </div>
          <GradualSpacing
            text="In Your Ads."
            className="hero-heading-text text-[3.5rem] leading-[1]"
            delay={0.2}
          />
        </h1>

        <div className="hero-subtitle" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "2rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: "1.5rem", lineHeight: 1.2 }}>
          Build a 90-Day<br />Lead System.
        </div>

        <p className="hero-desc" style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: 520, marginBottom: "2.5rem", fontWeight: 300 }} >
          A complete customer acquisition system &mdash; Meta Ads, Google Ads, Local SEO, GMB, YouTube & WhatsApp AI &mdash; to generate qualified enquiries and scale your business. We handle marketing. You focus on growth.
        </p>

        <div className="hero-buttons" style={{ display: "flex", gap: 12, marginBottom: "3rem" }}>
          <button
            onClick={scrollToCta}
            className="group"
            style={{
              background: "linear-gradient(135deg, #f5a623, #e8890d)", color: "#000",
              border: "none", padding: "0.85rem 1.6rem", fontSize: "0.68rem",
              fontFamily: "var(--font-montserrat)", fontWeight: 900,
              letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer",
              boxShadow: "0 10px 30px rgba(245,166,35,0.2)",
              display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap"
            }}
          >
            Book Free Strategy Call <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>\u2192</motion.span>
          </button>
          <button
            onClick={() => window.open("https://wa.me/", "_blank")}
            style={{
              background: "transparent", color: "#fff",
              border: "1px solid rgba(255,255,255,0.3)",
              padding: "0.85rem 1.4rem", fontSize: "0.68rem",
              fontFamily: "var(--font-montserrat)", fontWeight: 700,
              letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer",
              display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap"
            }}
          >
            Connect on WhatsApp
          </button>
        </div>

        <div className="hero-trust" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em", marginBottom: "3.5rem", fontWeight: 500, display: "flex", alignItems: "center", gap: 10 }}>
          Trusted by <strong style={{ color: "#f5a623" }}>100+ businesses</strong> &nbsp;|&nbsp;
          <span className="flex items-center gap-0.5">
            <IndianRupee className="h-3.5 w-3.5" />
            <strong>1 Cr+</strong>
          </span>
          in ads managed &nbsp;|&nbsp; <strong>Kolkata's #1</strong> Lead System
        </div>
      </div>

      {/* Right Content \u2014 Interactive Dashboard visual */}
      <div className="hero-right" style={{ position: "relative", zIndex: 10 }}>
        {/* Dashboard Box */}
        <div style={{
          background: "#131518",
          border: "1px solid rgba(245,166,35,0.18)",
          position: "relative",
          marginBottom: 16,
          boxShadow: "0 40px 100px rgba(0,0,0,0.6)"
        }}>
          {/* Header */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.4rem 1.8rem 1rem",
            borderBottom: "1px solid rgba(255,255,255,0.04)"
          }}>
            <span style={{ fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.3)" }}>Live Campaign Dashboard</span>
            <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(46,204,113,0.1)", border: "1px solid rgba(46,204,113,0.25)", padding: "3px 10px", borderRadius: "2px" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2ecc71", animation: "pulse 1.2s infinite" }} />
              <span style={{ fontSize: "0.6rem", fontWeight: 900, color: "#2ecc71", letterSpacing: "0.08em" }}>LIVE</span>
            </div>
          </div>

          {/* Rows */}
          <div style={{ padding: "0.5rem 0" }}>
            {CAMPAIGNS.map((c, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "0.8rem 1.8rem", borderBottom: i === 3 ? "none" : "1px solid rgba(255,255,255,0.02)" }}>
                <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>{c.biz}</span>
                <span style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.85rem", color: "#f5a623", display: "flex", alignItems: "center", gap: 2 }}>
                  {c.hasRupee && <IndianRupee className="h-3 w-3" />}
                  {c.val}
                </span>
              </div>
            ))}
          </div>

          {/* Metrics Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", background: "rgba(255,255,255,0.04)", gap: "1px" }}>
            {METRICS.map((m, i) => (
              <div key={i} style={{ background: "#131518", padding: "1.2rem", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "1.4rem", color: "#f5a623", display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
                  {m.hasRupee && <IndianRupee className="h-5 w-5" />}
                  {m.n}
                </div>
                <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 3 }}>{m.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Notification \u2014 MagicUI style */}
        <div style={{ background: "#181a1e", border: "1px solid rgba(46,204,113,0.2)", padding: "1rem 1.2rem", borderRadius: "12px", display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(46,204,113,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
            &#128172;
          </div>
          <div>
            <strong style={{ display: "block", fontSize: "0.85rem", fontFamily: "var(--font-montserrat)", fontWeight: 800, color: "#fff", marginBottom: 2 }}>
              <TypingAnimation text={NOTIFS[notifIdx].n} />
            </strong>
            <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)" }}>
              {NOTIFS[notifIdx].m}
            </span>
            <small style={{ display: "block", fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", marginTop: 4 }}>
              Just now &middot; Meta Ad
            </small>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
      `}</style>
    </section>
  );
}
