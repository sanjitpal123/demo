"use client";

import { useState } from "react";
import { FadeUp, VideoText } from "../ui/animations";
import { Plus, IndianRupee } from "lucide-react";

const FAQS = [
  { 
    q: (
      <span className="flex items-center gap-1.5 flex-wrap">
        Is the <IndianRupee className="h-4 w-4 text-[#f5a623]" />15,000 ad spend included in <IndianRupee className="h-4 w-4 text-[#f5a623]" />15,000?
      </span>
    ), 
    a: (
      <span>
        Yes. <IndianRupee className="h-3 w-3 inline mb-0.5" />15,000 is the total — <IndianRupee className="h-3 w-3 inline mb-0.5" />5,000 goes directly into your Meta/Google ad campaigns and <IndianRupee className="h-3 w-3 inline mb-0.5" />10,000 covers strategy, management, SEO, GMB, WhatsApp AI setup, and execution. No hidden charges.
      </span>
    )
  },
  { q: "Are 20\u201350 leads guaranteed?", a: "We don\u2019t believe in fake guarantees. 20\u201350 is a realistic expected range based on 100+ campaigns. Actual results depend on your offer strength, pricing, location, and competition. We show you real data every week." },
  { 
    q: (
      <span className="flex items-center gap-1.5 flex-wrap">
        What channels do you manage?
      </span>
    ), 
    a: (
      <span>
        We manage Meta Ads, Google Ads, Local SEO, Google My Business (GMB) optimisation, YouTube, and WhatsApp AI lead nurturing — all under one system for — <IndianRupee className="h-3 w-3 inline mb-0.5" />15,000/month.
      </span>
    )
  },
  { q: "What if I need a content shoot?", a: "Our clients get a 50% discount on professional content shoots. Use code CONTENT50. Great ads need great creative — we\u2019ll guide you on exactly what content will convert best for your specific business." },
  { q: "Why only 10 businesses at a time?", a: "Quality over volume. When we take on a client, we go all in — dedicated strategy, weekly reviews, and full attention. We\u2019d rather give 10 businesses extraordinary results than give 50 businesses average service." },
  { q: "How long before I see results?", a: "Most businesses start seeing initial leads within the first 2\u20133 weeks. The full system typically peaks by week 8\u201312. This is a 90-day compounding system, not overnight magic." },
  { q: "What do I need to provide?", a: "Mainly: timely communication, content sharing (photos/videos of your business), and quick follow-up on leads we send. The more responsive you are, the faster your results. We handle everything else." },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section 
      id="faq"
      style={{
        padding: "160px 10%",
        background: "#080809",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <FadeUp style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f5a623", marginBottom: "0.7rem", display: "block" }}>
           FAQs
        </span>
        <h2 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(1.9rem, 4vw, 3.2rem)", textTransform: "uppercase", lineHeight: 1.06 }}>
           Questions You<br />
           <VideoText text="Might Have" />
        </h2>
        <div style={{ width: 40, height: 3, background: "linear-gradient(90deg, #f5a623, #ffd47a)", margin: "1.5rem 0 4rem" }} />
      </FadeUp>

      <div style={{ maxWidth: 800, margin: "0 auto" }}>
         {FAQS.map((f, i) => (
            <div 
               key={i} 
               style={{ 
                  borderBottom: "1px solid rgba(255,255,255,0.08)", 
                  padding: "1.5rem 0",
                  cursor: "pointer",
               }}
               onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            >
               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                  <h4 style={{ 
                      fontFamily: "var(--font-montserrat)", 
                      fontWeight: 600, 
                      fontSize: "1.05rem",
                      color: openIdx === i ? "#f5a623" : "#fff",
                      transition: "0.3s"
                  }}>
                    {f.q}
                  </h4>
                  <div style={{ 
                     width: 32, height: 32, 
                     borderRadius: "50%", 
                     background: openIdx === i ? "#f5a623" : "transparent",
                     border: openIdx === i ? "none" : "1px solid rgba(255,255,255,0.2)",
                     display: "flex", alignItems: "center", justifyContent: "center",
                     transition: "0.4s",
                     transform: openIdx === i ? "rotate(45deg)" : "none"
                  }}>
                     <Plus className={`h-4 w-4 ${openIdx === i ? "text-[#000]" : "text-white/50"}`} />
                  </div>
               </div>
               
               <div style={{ 
                  maxHeight: openIdx === i ? 300 : 0, 
                  overflow: "hidden", 
                  transition: "max-height 0.4s ease, padding 0.4s",
                  paddingTop: openIdx === i ? "1.5rem" : 0
               }}>
                  <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
                     {f.a}
                  </p>
               </div>
            </div>
         ))}
      </div>
    </section>
  );
}
