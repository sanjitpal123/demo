"use client";

import { cn } from "@/lib/utils";

interface MovingGridProps {
  className?: string;
  lineColor?: string;
  opacity?: number;
}

export const MovingGrid = ({
  className,
  lineColor = "#f5a623",
  opacity = 0.15,
}: MovingGridProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden h-full w-full",
        className
      )}
    >
      <div
        className="absolute inset-0 [perspective:800px]"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, #060708 80%)",
        }}
      >
        {/* Top Grid */}
        <div 
          className="absolute inset-0 [transform-origin:top] [transform:rotateX(-80deg)]"
          style={{ height: "200%" }}
        >
          <div
            className="animate-move-grid h-full w-full opacity-[0.2]"
            style={{
              backgroundImage: `
                linear-gradient(to right, ${lineColor} 1px, transparent 1px),
                linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              maskImage: "linear-gradient(to bottom, white, transparent)",
            }}
          />
        </div>

        {/* Bottom Grid */}
        <div 
          className="absolute inset-0 [transform-origin:bottom] [transform:rotateX(80deg)] bottom-0"
          style={{ height: "200%", top: "-100%" }}
        >
          <div
            className="animate-move-grid-reverse h-full w-full opacity-[0.2]"
            style={{
              backgroundImage: `
                linear-gradient(to right, ${lineColor} 1px, transparent 1px),
                linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              maskImage: "linear-gradient(to top, white, transparent)",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes move-grid {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }
        @keyframes move-grid-reverse {
          0% { transform: translateY(0); }
          100% { transform: translateY(-60px); }
        }
        .animate-move-grid {
          animation: move-grid 4s linear infinite;
        }
        .animate-move-grid-reverse {
          animation: move-grid-reverse 4s linear infinite;
        }
      `}</style>
    </div>
  );
};
