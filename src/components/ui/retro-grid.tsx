"use client";

import { cn } from "@/lib/utils";

interface RetroGridProps {
  className?: string;
  cellSize?: number;
  width?: number;
  height?: number;
  angle?: number;
  opacity?: number;
  lightLineColor?: string;
  darkLineColor?: string;
}

export const RetroGrid = ({
  className,
  angle = 65,
  cellSize = 52,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "#f5a623",
}: RetroGridProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden [perspective:200px]",
        className,
      )}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 [transform:rotateX(var(--grid-angle))] [transform-origin:100%_0_0]"
        style={
          {
            "--grid-angle": `${angle}deg`,
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            "animate-grid",
            "[background-repeat:repeat] [background-size:var(--grid-size)_var(--grid-size)] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:200vw]",

            // Grid Lines
            "[background-image:linear-gradient(to_right,var(--grid-line-color)_1px,transparent_0),linear-gradient(to_bottom,var(--grid-line-color)_1px,transparent_0)]",

            // Dark Mode
            "dark:[--grid-line-color:rgba(245,166,35,0.12)]",
            "light:[--grid-line-color:rgba(0,0,0,0.1)]",
          )}
          style={
            {
              "--grid-size": `${cellSize}px`,
              "--grid-line-color": darkLineColor,
            } as React.CSSProperties
          }
        />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent to-90%" />

      <style jsx>{`
        @keyframes grid {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-grid {
          animation: grid 15s linear infinite;
        }
      `}</style>
    </div>
  );
};
