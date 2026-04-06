"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 z-0 h-full w-full pointer-events-none overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-neutral-950" />
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Animated Beams */}
        {[...Array(10)].map((_, i) => (
          <Beam key={i} index={i} />
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950 pointer-events-none" />
    </div>
  );
};

const Beam = ({ index }: { index: number }) => {
  const pathRef = useRef<SVGPathElement>(null);

  // Random paths that sweep across
  const x1 = Math.random() * 100;
  const y1 = Math.random() * 100;
  const x2 = Math.random() * 100;
  const y2 = Math.random() * 100;

  return (
    <path
      ref={pathRef}
      d={`M ${x1}% ${y1}% L ${x2}% ${y2}%`}
      stroke="#f5a623"
      strokeWidth="0.5"
      strokeOpacity="0"
      fill="none"
      filter="url(#glow)"
    >
      <animate
        attributeName="stroke-opacity"
        values="0;0.15;0"
        dur={`${5 + Math.random() * 10}s`}
        repeatCount="indefinite"
        begin={`${index * 0.8}s`}
      />
      <animate
        attributeName="d"
        values={`M ${x1}% ${y1}% L ${x2}% ${y2}%; M ${x2}% ${y2}% L ${100 - x1}% ${100 - y1}%`}
        dur={`${15 + Math.random() * 20}s`}
        repeatCount="indefinite"
      />
    </path>
  );
};
