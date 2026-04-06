"use client";

import { motion } from "framer-motion";
import { FadeUp, VideoText } from "../ui/animations";
import { Play, Film, Video, Smartphone } from "lucide-react";

const VIDEOS = [
  {
    title: "SaaS Product Demo",
    platform: "YouTube Ads",
    icon: <Video className="h-4 w-4" />,
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    description: "High-conversion product walkthrough with premium motion graphics."
  },
  {
    title: "Viral Cosmetic Reel",
    platform: "Instagram / Meta",
    icon: <Smartphone className="h-4 w-4" />,
    thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
    description: "Fast-paced, high-energy reel that drove 10k+ profile visits."
  },
  {
    title: "Brand Storytelling",
    platform: "Omni-channel",
    icon: <Film className="h-4 w-4" />,
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
    description: "Cinematic brand overview focusing on emotional connection and trust."
  }
];

export function VideoEditing() {
  return (
    <section 
      id="video-editing"
      style={{
        padding: "160px 10% 80px",
        background: "#0d0f12",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{ position: "relative", zIndex: 10, maxWidth: 1400, margin: "0 auto" }}>
        
        <FadeUp style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "5rem" }}>
           <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f5a623", marginBottom: "0.7rem", display: "block" }}>
              Content Power
           </span>
           <h2 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(2rem, 4.5vw, 3.8rem)", textTransform: "uppercase", lineHeight: 1.06, color: "#fff" }}>
              Premium Video<br />
              <VideoText text="Editing That Converts" />
           </h2>
           <div style={{ width: 40, height: 3, background: "linear-gradient(90deg, #f5a623, #ffd47a)", margin: "0.9rem 0 3rem" }} />
           <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", maxWidth: 600, lineHeight: 1.6, fontWeight: 300 }}>
             We don't just edit videos. We create high-retention visual assets designed to stop the scroll and drive action across Meta, YouTube, and TikTok.
           </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIDEOS.map((video, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div 
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#131518] transition-all duration-500 hover:border-[#f5a623]/30"
                style={{ height: "100%" }}
              >
                {/* Thumbnail Area */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f5a623] text-black shadow-[0_0_20px_rgba(245,166,35,0.4)] transition-transform duration-300 group-hover:scale-110">
                      <Play className="h-8 w-8 fill-current" />
                    </div>
                  </div>
                  {/* Platform Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white backdrop-blur-sm border border-white/10">
                    {video.icon}
                    {video.platform}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8">
                  <h3 style={{ fontFamily: "var(--font-montserrat)" }} className="mb-3 text-xl font-bold text-white">
                    {video.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">
                    {video.description}
                  </p>
                  
                  <div className="mt-6 flex items-center gap-2 text-[0.65rem] font-black uppercase tracking-widest text-[#f5a623] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View Project Case Study
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>

                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#f5a623] to-[#ffd47a] transition-all duration-500 group-hover:w-full" />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
        <div className="h-[500px] w-[500px] rounded-full bg-[#f5a623] blur-[120px]" />
      </div>
    </section>
  );
}
