"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ─── 1. SlideIn character-by-character ─────────────────────────── */
export function SlideInText({ text, className = "", style = {} }: { text: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <h2 ref={ref} className={className} style={{ overflow: "hidden", ...style }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ x: -40, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: i * 0.025, ease: "easeOut", duration: 0.4 }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
  );
}

/* ─── 3. Scroll-based velocity marquee ───────────────────────────── */
function useVelocity(value: any) {
  const [velocity, setVelocity] = useState(0);
  const prevRef = useRef(0);
  useEffect(() => {
    return value.on("change", (v: number) => {
      setVelocity(v - prevRef.current);
      prevRef.current = v;
    });
  }, [value]);
  return velocity;
}

export function ScrollVelocityText({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const { scrollY } = useScroll();
  const rawX = useTransform(scrollY, [0, 3000], [0, -800]);
  const x = useSpring(rawX, { damping: 30, stiffness: 80 });

  return (
    <div className={className} style={{ overflow: "hidden", whiteSpace: "nowrap", ...style }}>
      <motion.div style={{ x, display: "flex", alignItems: "center", gap: "2rem" }}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {children}
            <span style={{ opacity: 0.3 }}>•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── 4. VideoText — text filled with gradient shimmer (MagicUI-style) ── */
export function VideoText({ text, className = "", style = {} }: { text: string; className?: string; style?: React.CSSProperties }) {
  return (
    <span
      className={className}
      style={{
        background: "linear-gradient(90deg, #f5a623 0%, #ffd47a 30%, #e8890d 60%, #f5a623 100%)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        animation: "shimmer 3s linear infinite",
        display: "inline-block",
        ...style
      }}
    >
      {text}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </span>
  );
}

/* ─── 5. FadeUp — generic scroll-triggered fade ─────────────────── */
export function FadeUp({
  children,
  delay = 0,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ─── 6. BlurIn — MagicUI style blur fade in ──────────────────── */
export function BlurIn({
  text,
  delay = 0,
  className = "",
  style = {},
}: {
  text: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className={className}
      style={style}
    >
      {text}
    </motion.div>
  );
}

/* ─── 7. GradualSpacing — MagicUI style tracking animation ─────── */
export function GradualSpacing({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className={`flex flex-wrap overflow-hidden ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: delay + i * 0.04, duration: 0.4 }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}

/* ─── 8. TypingAnimation — MagicUI style typewriter ────────────── */
export function TypingAnimation({ 
  text, 
  className = "", 
  delay = 0 
}: { 
  text: string; 
  className?: string; 
  delay?: number;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let i = 0;
      const timeout = setTimeout(() => {
        const interval = setInterval(() => {
          setDisplayedText(text.slice(0, i + 1));
          i++;
          if (i === text.length) clearInterval(interval);
        }, 30);
        return () => clearInterval(interval);
      }, (delay || 0) * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, text, delay]);

  return <div ref={ref} className={className}>{displayedText}</div>;
}
