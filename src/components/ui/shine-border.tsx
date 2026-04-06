"use client";

import { cn } from "@/lib/utils";

interface ShineBorderProps {
  className?: string;
  children: React.ReactNode;
  shineColor?: string | string[];
  borderWidth?: number;
  duration?: number;
  borderRadius?: number;
}

export function ShineBorder({
  className,
  children,
  shineColor = "#f5a623",
  borderWidth = 1,
  duration = 14,
  borderRadius = 8,
}: ShineBorderProps) {
  return (
    <div
      className={cn(
        "relative min-h-[50px] w-full items-center justify-center overflow-hidden bg-background p-[1px] md:shadow-xl",
        className,
      )}
      style={
        {
          "--border-width": `${borderWidth}px`,
          "--duration": `${duration}s`,
          "--shine-pulse-color": Array.isArray(shineColor) ? shineColor[0] : shineColor,
          "--border-radius": `${borderRadius}px`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "before:bg-shine-size before:absolute before:inset-[0] before:aspect-square before:size-full before:rounded-[inherit] before:p-[var(--border-width)] before:will-change-[background-position] before:content-[''] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:conic-gradient(from_0deg,transparent_0_340deg,var(--shine-pulse-color)_360deg)] before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
          "animate-shine",
        )}
      />
      <div className="relative z-[1] h-full w-full rounded-[var(--border-radius)]">
        {children}
      </div>

      <style jsx>{`
        @keyframes shine {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 200%; }
        }
        .animate-shine::before {
          animation: shine var(--duration) linear infinite;
        }
        .before\\:bg-shine-size::before {
          background-size: 300% 300%;
        }
      `}</style>
    </div>
  );
}
