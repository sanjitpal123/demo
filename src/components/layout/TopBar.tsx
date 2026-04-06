import { IndianRupee } from "lucide-react";

export function TopBar() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "linear-gradient(90deg, #e8890d, #f5a623)",
        padding: "0.48rem 5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        flexWrap: "wrap",
        height: 28,
        flexDirection: "row"
      }}
    >
      <span
        className="topbar-text"
        style={{
          fontFamily: "var(--font-montserrat)",
          fontSize: "0.65rem",
          fontWeight: 900,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#000",
          display: "flex",
          alignItems: "center",
          gap: "4px"
        }}
      >
        <IndianRupee className="h-3 w-3" />
        1 Cr+ Ad Spend Managed &middot; 100+ Businesses Served &middot; Only 3 Spots Left
      </span>
    </div>
  );
}
