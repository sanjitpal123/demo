"use client";

import { motion } from "framer-motion";
import { MovingGrid } from "../ui/moving-grid";
import { Counter } from "../ui/counter";
import { Marquee } from "../ui/marquee";
import { MagicCard } from "../ui/magic-card";
import { FadeUp, VideoText } from "../ui/animations";
import { IndianRupee } from "lucide-react";
import { cn } from "@/lib/utils";

const PNUMS = [
  { n: 100, prefix: "", suffix: "+", l: "Clients served" },
  { n: 1, prefix: <IndianRupee className="inline h-8 w-8 mb-2" />, suffix: "Cr+", l: "Ad spend managed" },
  { n: 50, prefix: "", suffix: "+", l: "Leads / month avg" },
  { n: 62, prefix: "↓", suffix: "%", l: "CPL reduction" },
];

const CLIENTS = ["Irfa Family Salon", "Auto Aura", "Zohra Style", "Bengal Ice Agency", "Star India Care"];

const TESTIMONIALS = [
  { q: "Within 45 days we were getting consistent walk-ins. The WhatsApp system handles follow-ups automatically \u2014 we just focus on the service.", a: "Owner, Irfa Family Salon", n: "Salon \u00B7 Kolkata", img: "https://avatar.vercel.sh/irfa" },
  { q: "We were spending on ads before with zero results. Goadslive built a proper system \u2014 leads started coming in week 3. Absolute game changer.", a: "Owner, Auto Aura", n: "Automobile \u00B7 Kolkata", img: "https://avatar.vercel.sh/auto" },
  { q: "The GMB optimisation started bringing walk-ins on its own. Now we rank on Google Maps AND get Meta leads every day. Double impact.", a: "Owner, Zohra Style", n: "Fashion \u00B7 Kolkata", img: "https://avatar.vercel.sh/zohra" },
  { q: "Their WhatsApp AI setup is magic. We don't miss a single enquiry now, even at night. Our booking rate has doubled.", a: "Founder, Star India Care", n: "Healthcare \u00B7 Kolkata", img: "https://avatar.vercel.sh/star" },
  { q: "Finally a team that understands local business. The leads are high-quality and the CPL is lower than anything we've seen.", a: "Manager, Bengal Ice", n: "Manufacturing \u00B7 Howrah", img: "https://avatar.vercel.sh/bengal" },
  { q: "Goadslive transformed our digital presence. From ranking nowhere to being #1 on local search, the growth is visible.", a: "Proprietor, Royal Decor", n: "Interior Design \u00B7 Kolkata", img: "https://avatar.vercel.sh/royal" },
  { q: "The strategy call alone gave us more value than our previous agency did in a year. Highly professional and results-driven.", a: "Director, Elite Clinic", n: "Medical \u00B7 Salt Lake", img: "https://avatar.vercel.sh/elite" },
  { q: "I was skeptical about Meta Ads, but Goadslive proved me wrong. We are now booked for the next 2 months.", a: "Owner, Spice Route", n: "Restaurant \u00B7 Park Street", img: "https://avatar.vercel.sh/spice" },
  { q: "The best investment I've made for my business this year. Their system is truly autonomous and high-performance.", a: "Founder, Tech Hub", n: "IT Services \u00B7 Sector V", img: "https://avatar.vercel.sh/tech" },
  { q: "Efficient, transparent, and always available. They don't just run ads; they build a scalable customer pipeline.", a: "Managing Partner, Prime Gym", n: "Fitness \u00B7 Ballygunge", img: "https://avatar.vercel.sh/prime" },
];

const ReviewCard = ({
  img,
  a,
  n,
  q,
}: {
  img: string
  a: string
  n: string
  q: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-[350px] cursor-pointer overflow-hidden rounded-2xl border p-8 transition-all duration-300",
        "border-white/5 bg-[#131518] hover:bg-white/[0.05] hover:border-[#f5a623]/30"
      )}
    >
      <div className="flex flex-row items-center gap-4 mb-6">
        <img className="rounded-full border border-[#f5a623]/20" width="48" height="48" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption style={{ fontFamily: "var(--font-montserrat)" }} className="text-sm font-bold text-white">
            {a}
          </figcaption>
          <p style={{ fontFamily: "var(--font-montserrat)" }} className="text-[0.65rem] font-black uppercase tracking-wider text-[#f5a623]">
            {n}
          </p>
        </div>
      </div>
      <div className="flex gap-1 mb-4 text-[#f5a623]">
        {"\u2605\u2605\u2605\u2605\u2605"}
      </div>
      <blockquote className="text-[0.9rem] leading-relaxed text-white/50 italic font-light">
        &ldquo;{q}&rdquo;
      </blockquote>
    </figure>
  )
}

export function Results() {
  const firstRow = TESTIMONIALS.slice(0, 3);
  const secondRow = TESTIMONIALS.slice(3, 6);
  const thirdRow = TESTIMONIALS.slice(6, 8);
  const fourthRow = TESTIMONIALS.slice(8, 10);

  return (
    <section
      id="results"
      style={{
        position: "relative",
        padding: "80px 10% 40px",
        overflow: "hidden",
        background: "#080809"
      }}
    >
      <MovingGrid lineColor="#f5a623" className="opacity-40" />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 1400, margin: "0 auto" }}>

        <FadeUp style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", }}>
          <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f5a623", marginBottom: "0.7rem", display: "block" }}>
            Proof
          </span>
          <h2 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(2rem, 4.5vw, 3.8rem)", textTransform: "uppercase", lineHeight: 1.06, color: "#fff" }}>
            Results That<br />
            <VideoText text="Speak Loudly" />
          </h2>
          <div style={{ width: 40, height: 3, background: "linear-gradient(90deg, #f5a623, #ffd47a)", margin: "0.9rem 0 3rem" }} />
        </FadeUp>

        {/* Performance Stats */}
        <div className="results-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4rem", marginBottom: "8rem", textAlign: "center" }}>
          {PNUMS.map((s, i) => (
            <div key={i} style={{ background: "#131518", padding: "3rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid rgba(255,255,255,0.03)" }}>
              <div style={{ fontWeight: 900, fontSize: "3rem", lineHeight: 1, marginBottom: "0.5rem", color: "#f5a623" }}>
                <Counter value={s.n} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em" }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* 3D Testimonial Marquee - DESKTOP */}
        <div className="results-testimonials hidden md:flex relative h-[800px] w-full flex-row items-center justify-center gap-6 overflow-hidden [perspective:1200px] mb-20">
          <div
            className="flex flex-row items-center gap-6"
            style={{
              transform:
                "translateX(-50px) translateY(0px) translateZ(-100px) rotateX(15deg) rotateY(-15deg) rotateZ(10deg)",
            }}
          >
            <Marquee pauseOnHover vertical className="[--duration:30s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.a} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:35s]" vertical>
              {secondRow.map((review) => (
                <ReviewCard key={review.a} {...review} />
              ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:28s]" vertical>
              {thirdRow.map((review) => (
                <ReviewCard key={review.a} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:32s]" vertical>
              {fourthRow.map((review) => (
                <ReviewCard key={review.a} {...review} />
              ))}
            </Marquee>
          </div>

          {/* Gradients for smooth fade */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#080809] to-transparent"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#080809] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#080809] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#080809] to-transparent"></div>
        </div>

        {/* Flat Testimonial Marquee - MOBILE */}
        <div className="flex md:hidden relative w-full flex-col gap-4 overflow-hidden mb-16">
          <Marquee pauseOnHover className="[--duration:30s]">
            {TESTIMONIALS.slice(0, 5).map((review) => (
              <ReviewCard key={review.a} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:35s]">
            {TESTIMONIALS.slice(5, 10).map((review) => (
              <ReviewCard key={review.a} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#080809] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#080809] to-transparent"></div>
        </div>

        {/* Client Marquee */}
        <div>
          <Marquee pauseOnHover className="[--duration:20s] py-4">
            {CLIENTS.map((c, i) => (
              <span key={i} style={{ color: "rgba(255,255,255,0.4)", fontWeight: 900, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.2em", border: "1px solid rgba(255,255,255,0.05)", padding: "0.6rem 2rem", borderRadius: "8px", margin: "0 10px" }}>
                {c}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
