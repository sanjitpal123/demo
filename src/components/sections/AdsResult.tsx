"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeUp, VideoText } from "../ui/animations";
import { TrendingUp, Users, Target, ShieldCheck } from "lucide-react";
import { ImageModal } from "../ui/image-modal";

const RESULTS = [
  {
    title: "E-commerce Growth",
    metric: "4.8+ ROAS",
    sub: "Return on Ad Spend",
    case: "Drove 50L+ in sales within 90 days of takeover."
  },
  {
    title: "Healthcare Leads",
    metric: "320+",
    sub: "Monthly Appointments",
    case: "Reduced CPL by 45% using Meta Form strategy."
  },
  {
    title: "Real Estate Reach",
    metric: "1.2M",
    sub: "Ad Impressions",
    case: "Built high-intent audience pipeline in Kolkata."
  },
  {
    title: "B2B Conversions",
    metric: "62%",
    sub: "Booking Rate",
    case: "Optimized landing page & WhatsApp AI flow."
  }
];

const DASHBOARD_IMAGES = [
  { src: "/results/ads1.jpg", title: "Google Ads Performance" },
  { src: "/results/ads2.jpg", title: "Meta Ads Manager" },
  { src: "/results/ads3.jpg", title: "Conversion Tracking" }
];

export function AdsResult() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (src: string) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  return (
    <section
      id="ads-result"
      style={{
        padding: "40px 10% 40px",
        background: "#080809",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{ position: "relative", zIndex: 10, maxWidth: 1400, margin: "0 auto" }}>

        <FadeUp style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "5rem" }}>
          <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f5a623", marginBottom: "0.7rem", display: "block" }}>
            Performance Metrics
          </span>
          <h2 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(2rem, 4.5vw, 3.8rem)", textTransform: "uppercase", lineHeight: 1.06, color: "#fff" }}>
            Ads Results<br />
            <VideoText text="Data That Matters" />
          </h2>
          <div style={{ width: 40, height: 3, background: "linear-gradient(90deg, #f5a623, #ffd47a)", margin: "0.9rem 0 3rem" }} />
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", maxWidth: 600, lineHeight: 1.6, fontWeight: 300 }}>
            Transparency is our core value. We track everything from the first click to the final conversion  ensuring every rupee you spend is an investment.
          </p>
        </FadeUp>

        {/* Reduced Metric Cards (Back to 4-column for better proportion) */}


        {/* Dashboard Screenshots Showcases - Organized and Enlarged */}
        <div className="space-y-16 mt-32">


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {DASHBOARD_IMAGES.map((img, i) => (
              <FadeUp key={i} delay={0.2 + i * 0.1}>
                <div
                  onClick={() => openImage(img.src)}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#131518] aspect-video shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center text-center cursor-zoom-in"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full px-6">
                    <span className="text-[0.7rem] font-black uppercase tracking-[0.3em] text-[#f5a623] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {img.title}
                    </span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="pointer-events-none absolute top-1/2 left-0 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#f5a623]/5 blur-[150px]" />
      <div className="pointer-events-none absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-[#f5a623]/3 blur-[120px]" />

      {/* Image Modal for proof gallery */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={closeImage}
        src={selectedImage}
      />
    </section>
  );
}
