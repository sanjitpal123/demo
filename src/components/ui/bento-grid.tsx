"use client";

import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  style,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn(
        "glass-panel flex flex-col group overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] rounded-xl gap-8",
        className
      )}
      style={{ padding: "4rem", width: "100%", ...style }}
    >
      <div className="w-full relative">
        {header}
      </div>
      <div className="transition-all duration-300 group-hover:translate-y-[-4px] flex flex-col flex-1 justify-center gap-4">
        <div className="flex items-center gap-6">
           <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:bg-[#f5a623]/20 group-hover:border-[#f5a623]/30 transition-colors duration-300">
              {icon}
           </div>
           <div className="font-sans font-bold text-white text-2xl tracking-tight leading-tight">
             {title}
           </div>
        </div>
        <div className="font-sans font-normal text-slate-400 text-base leading-relaxed pl-1">
          {description}
        </div>
      </div>
    </div>
  );
};
