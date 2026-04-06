"use client";

import { useEffect, useRef } from "react";

// Dotted grid + glow background — inspired by Aceternity dotted-glow-background
export function DotGlowBg({ className = "" }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        position: "absolute", inset: 0, overflow: "hidden",
        backgroundImage:
          "radial-gradient(circle, rgba(245,166,35,0.12) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)",
        maskImage:
          "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)",
        pointerEvents: "none",
      }}
    />
  );
}

// Animated grid lines — inspired by Aceternity background-lines
export function BackgroundLines({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.06 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="bglines" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#f5a623" strokeWidth="0.5" />
        </pattern>
        <linearGradient id="linefade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="30%" stopColor="white" stopOpacity="1" />
          <stop offset="70%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id="linemask">
          <rect width="100%" height="100%" fill="url(#linefade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#bglines)" mask="url(#linemask)" />
    </svg>
  );
}
