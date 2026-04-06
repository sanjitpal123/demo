"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeUp, VideoText } from "../ui/animations";
import { Palette, Camera } from "lucide-react";
import { ImageModal } from "../ui/image-modal";

const DESIGNS = [
  {
    title: "Premium Fashion Showcase",
    type: "Photography \u00B7 Branding",
    icon: <Camera className="h-6 w-6" />,
    image: "/designs/design1.jpg",
    description: "High-end fashion photography and graphic design integration for luxury brands."
  },
  {
    title: "Textile Identity Design",
    type: "Brand Identity",
    icon: <Palette className="h-6 w-6" />,
    image: "/designs/design2.jpg",
    description: "Sleek, conversion-centric visual systems for fashion and lifestyle businesses."
  }
];

export function GraphicDesign() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (src: string) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  return (
    <section
      id="graphic-design"
      style={{
        padding: "20px 10% 40px",
        background: "#080809",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{ position: "relative", zIndex: 10, maxWidth: 1400, margin: "0 auto" }}>

        <FadeUp style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "5rem" }}>
          <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f5a623", marginBottom: "0.7rem", display: "block" }}>
            Visual Excellence
          </span>
          <h2 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(2rem, 4.5vw, 3.8rem)", textTransform: "uppercase", lineHeight: 1.06, color: "#fff" }}>
            Graphic Design<br />
            <VideoText text="For Authority" />
          </h2>
          <div style={{ width: 40, height: 3, background: "linear-gradient(90deg, #f5a623, #ffd47a)", margin: "0.9rem 0 3rem" }} />
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", maxWidth: 600, lineHeight: 1.6, fontWeight: 300 }}>
            Design is the silent ambassador of your brand. We build elite visuals that transform attention into authority and trust.
          </p>
        </FadeUp>

        {/* Balanced Showcase Cards (Increased top-bottom spacing) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto px-6">
          {DESIGNS.map((design, i) => (
            <FadeUp key={i} delay={i * 0.15}>
              <div
                onClick={() => openImage(design.image)}
                className="group relative h-[600px] overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#131518] transition-all duration-500 hover:border-[#f5a623]/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] cursor-zoom-in"
              >
                {/* Background Image */}
                <img
                  src={design.image}
                  alt={design.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105 group-hover:brightness-[0.5]"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-85" />

                {/* Content Overlay - Centered with increased vertical padding (top and bottom) */}
                <div className="absolute inset-x-0 bottom-0 px-10 py-20 lg:py-24 flex flex-col items-center text-center">
                  <div className="mb-4 flex flex-col items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5a623]/10 text-[#f5a623] border border-[#f5a623]/20 backdrop-blur-xl mb-2 shadow-[0_0_15px_rgba(245,166,35,0.05)]">
                      {design.icon}
                    </div>
                    <span className="text-[0.65rem] font-black uppercase tracking-[0.3em] text-[#f5a623]">
                      {design.type}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: "var(--font-montserrat)" }} className="mb-3 text-2xl font-black text-white uppercase tracking-tight leading-tight">
                    {design.title}
                  </h3>

                  <p className="text-[0.9rem] leading-relaxed text-white/50 opacity-0 transition-all duration-500 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 max-w-[85%] font-light italic">
                    {design.description}
                  </p>
                </div>

                {/* Interactive Accent */}
                <div className="absolute top-8 right-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/20 border border-white/10 backdrop-blur-md transition-all duration-500 group-hover:bg-[#f5a623] group-hover:text-black group-hover:border-[#f5a623] group-hover:scale-110">
                  <motion.div
                    animate={{ rotate: [0, 90, 180, 270, 360] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="text-lg font-bold"
                  >
                    +
                  </motion.div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Aesthetic Background Elements */}

      {/* Image Modal for showcase cards */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={closeImage}
        src={selectedImage}
      />
    </section>
  );
}
