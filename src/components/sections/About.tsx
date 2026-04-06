"use client";

import { BlurIn, FadeUp, VideoText } from "../ui/animations";
import { Terminal, Layout, Users, TrendingDown, ImageOff, UserX } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "../ui/three-d-card";

export function About() {
  const items = [
    {
      title: "Running ads, zero leads",
      description: "Paying for clicks and impressions but real customers aren't walking in. Your ad budget burns with no returns.",
      icon: <TrendingDown className="h-8 w-8 text-[#f5a623]" />,
    },
    {
      title: "Posting content, no bookings",
      description: "Daily reels, stories, posts. Getting likes. But your booking calendar is half-empty every single week.",
      icon: <ImageOff className="h-8 w-8 text-[#f5a623]" />,
    },
    {
      title: "Agencies without ROI",
      description: "Paid for marketing. Got fancy monthly reports. But real, paying customers never actually showed up.",
      icon: <UserX className="h-8 w-8 text-[#f5a623]" />,
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: "160px 5%",
        background: "#0d0f12",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <FadeUp>
        <span style={{
          fontFamily: "var(--font-montserrat)",
          fontSize: "0.75rem",
          fontWeight: 800,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#f5a623",
          marginBottom: "1.5rem",
          display: "block"
        }} className="textcenter">
          The Reality Check
        </span>
        <h2 style={{
          fontFamily: "var(--font-montserrat)",
          fontWeight: 900,
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          textTransform: "uppercase",
          lineHeight: 1,
          marginBottom: "5rem",
          letterSpacing: "-0.03em"
        }} className="textcenter">
          Why Most Businesses<br />
          <span className="drop-shadow-lg">
            <BlurIn
              text="Fail at Marketing"
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#f5a623] to-[#ffd47a]"
            />
          </span>
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10 px-4 md:px-0">
        {items.map((item, i) => (
          <FadeUp delay={i * 0.15} key={i} className="h-full">
            <CardContainer className="inter-var w-full h-full">
              <CardBody className="bg-[#131518] relative group/card border-white/5 w-full h-full min-h-[300px] rounded-2xl border shadow-2xl shadow-[#f5a623]/10 transition-all duration-300 flex flex-col justify-center">
                <CardBody className="bg-[#131518] relative group/card border border-white/5 w-full h-full min-h-[300px] rounded-2xl shadow-2xl shadow-[#f5a623]/10 transition-all duration-300 flex flex-col justify-center items-center text-center px-6 py-8 lg:px-10 lg:py-10">

                  <CardItem translateZ="20" className="w-full flex flex-col items-center">

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#f5a623]/10 to-transparent flex items-center justify-center mb-6 border border-[#f5a623]/20 shadow-inner">
                      {item.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-[1.35rem] font-bold text-white mb-3 leading-tight">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-400 text-[0.95rem] leading-relaxed max-w-[260px]">
                      {item.description}
                    </p>

                  </CardItem>

                </CardBody>
              </CardBody>
            </CardContainer>
          </FadeUp>
        ))}
      </div>

      <div className="about-bottom" style={{ marginTop: "12rem", textAlign: "center" }}>
        <h3 style={{
          fontFamily: "var(--font-montserrat)",
          fontWeight: 800,
          fontSize: "clamp(1.4rem, 4vw, 2.8rem)",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.9)",
          letterSpacing: "-0.02em"
        }}>
          You don't need more marketing.
        </h3>
        <div style={{ marginTop: "1.5rem" }}>
          <VideoText
            text="You need a system."
            className="font-black text-[clamp(2.5rem,8vw,6rem)] leading-none"
          />
        </div>
      </div>
    </section>
  );
}
