import { IndianRupee } from "lucide-react";
import { Marquee } from "../ui/marquee";

export function Ticker() {
  const items = [
    "Meta Ads", "\u2726", "Google Ads", "\u2726", "Local SEO", "\u2726",
    "GMB Optimisation", "\u2726", "YouTube", "\u2726", "500+ Influencers", "\u2726",
    "WhatsApp AI", "\u2726", "20\u201350 Leads", "\u2726", 
    (
      <span className="flex items-center gap-0.5" key="rupee-15k">
        <IndianRupee className="h-3 w-3" />15,000/Month
      </span>
    ), 
    "\u2726", "Only 10 Businesses", "\u2726",
  ];
  // Duplicate for seamless loop
  const all = [...items, ...items];

  return (
    <div
      style={{ background: "linear-gradient(90deg, #e8890d, #f5a623, #e8890d)", padding: "0.6rem 0", overflow: "hidden" }}
    >
      <Marquee pauseOnHover className="[--duration:40s]">
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-montserrat)", fontWeight: item === "\u2726" ? 400 : 700,
              fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.14em",
              color: item === "\u2726" ? "rgba(0,0,0,0.3)" : "#000",
              display: "flex", alignItems: "center",
              margin: "0 1rem"
            }}
          >
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
