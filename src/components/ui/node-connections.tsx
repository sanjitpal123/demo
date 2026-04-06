"use client";

import { motion } from "framer-motion";
import { 
  IconBrandMeta, 
  IconBrandGoogle, 
  IconSearch, 
  IconMapPin, 
  IconBrandYoutube, 
  IconBrandWhatsapp,
  IconBolt
} from "@tabler/icons-react";

export function NodeConnections() {
  const nodes = [
    { icon: <IconBrandMeta size={24} />,     label: "Meta Ads",      color: "#1877F2" },
    { icon: <IconBrandGoogle size={24} />,   label: "Google Ads",    color: "#34A853" },
    { icon: <IconSearch size={24} />,       label: "Local SEO",     color: "#f5a623" },
    { icon: <IconMapPin size={24} />,       label: "GMB",           color: "#EA4335" },
    { icon: <IconBrandYoutube size={24} />,  label: "YouTube",       color: "#FF0000" },
    { icon: <IconBrandWhatsapp size={24} />, label: "WhatsApp AI",   color: "#25D366" },
  ];

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center p-8">
      {/* Central Node */}
      <div className="relative z-10">
        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px rgba(245,166,35,0.2)",
              "0 0 40px rgba(245,166,35,0.4)",
              "0 0 20px rgba(245,166,35,0.2)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl border-4 border-g1/20"
        >
          <IconBolt size={36} className="text-black" />
        </motion.div>
      </div>

      {/* Orbiting Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {nodes.map((node, i) => {
          const angle = (i * (360 / nodes.length)) * (Math.PI / 180);
          const x = Math.cos(angle) * 160;
          const y = Math.sin(angle) * 160;

          return (
            <div key={i}>
              {/* Connector Line */}
              <svg className="absolute inset-0 w-full h-full">
                <motion.line
                  x1="50%" y1="50%"
                  x2={`calc(50% + ${x}px)`}
                  y2={`calc(50% + ${y}px)`}
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                />
              </svg>

              {/* Node Item */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, x: x, y: y }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div 
                  className="w-14 h-14 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center shadow-2xl relative group pointer-events-auto"
                >
                  <div className="text-white opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    {node.icon}
                  </div>
                  
                  {/* Tooltip-like label */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-800 text-[10px] px-2 py-1 rounded border border-white/5 uppercase tracking-widest whitespace-nowrap">
                    {node.label}
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
