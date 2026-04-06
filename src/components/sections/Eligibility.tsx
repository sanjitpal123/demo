"use client";

import { MagicCard } from "../ui/magic-card";
import { FadeUp, VideoText, BlurIn } from "../ui/animations";
import { CheckCircle2, XCircle } from "lucide-react";

export function Eligibility() {
   return (
      <section
         id="eligibility"
         style={{
            padding: "160px 10%",
            background: "#080809",
            position: "relative",
            overflow: "hidden"
         }}
      >
         <FadeUp>
            <span className="textcenter" style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f5a623", marginBottom: "0.7rem", display: "block" }}>
               Is This For You?
            </span>
            <h2 className="textcenter" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(1.9rem, 4vw, 3.2rem)", textTransform: "uppercase", lineHeight: 1.06 }}>
               We Work Only With<br />
               <VideoText text="Serious Businesses" />
            </h2>
            <div style={{ width: 40, height: 3, background: "", margin: "0.9rem 0 3.5rem" }} />
         </FadeUp>

         <div className="eligibility-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem" }}>

            <MagicCard className="eligibility-card flex-col" style={{ padding: "4rem 3.5rem" }} gradientColor="#2ecc7111">
               <div style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#2ecc71",
                  marginBottom: "2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 8
               }}>
                  <CheckCircle2 className="h-4 w-4" />
                  This is for you if...
               </div>
               <ul style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                  {[
                     "You\u2019re a serious owner ready to invest in real growth",
                     "You want consistent qualified enquiries, not just likes",
                     "You\u2019re looking for a long-term lead generation system",
                     "You\u2019re willing to collaborate and respond quickly",
                     "You understand growth takes 90 days of consistency"
                  ].map((item, i) => (
                     <li key={i} style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, display: "flex", gap: 12 }}>
                        <span style={{ color: "#2ecc71", fontWeight: 900 }}>✓</span>
                        {item}
                     </li>
                  ))}
               </ul>
            </MagicCard>

            <MagicCard className="eligibility-card flex-col" style={{ padding: "4rem 3.5rem" }} gradientColor="rgba(231, 76, 60, 0.05)">
               <div style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#e74c3c",
                  marginBottom: "2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 8
               }}>
                  <XCircle className="h-4 w-4" />
                  This is NOT for you if...
               </div>
               <ul style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                  {[
                     "You\u2019re hunting for the cheapest option available",
                     "You expect guaranteed overnight results",
                     "You\u2019re not ready to invest or commit to 90 days",
                     "You want followers and likes over real revenue",
                     "You can\u2019t dedicate time to collaborate with us"
                  ].map((item, i) => (
                     <li key={i} style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, display: "flex", gap: 12 }}>
                        <span style={{ color: "#e74c3c", fontWeight: 900 }}>✕</span>
                        {item}
                     </li>
                  ))}
               </ul>
            </MagicCard>

         </div>
      </section>
   );
}
