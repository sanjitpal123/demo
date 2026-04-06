import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { TopBar } from "../components/layout/TopBar";
import { Navbar } from "../components/layout/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400","600","700","800","900"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Goadslive — 90-Day Lead Generation System",
  description: "A complete 90-Day Lead Generation System. Meta Ads, Google Ads, Local SEO, GMB, YouTube & WhatsApp AI to generate qualified enquiries and scale your business.",
  keywords: ["Meta Ads", "Google Ads", "Local SEO", "GMB Optimisation", "YouTube Ads", "WhatsApp AI", "Lead Generation", "Kolkata"],
  authors: [{ name: "Goadslive" }],
  openGraph: {
    title: "Goadslive — 90-Day Lead Generation System",
    description: "Build a predictable customer acquisition system in 90 days.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} antialiased`}>
      <body className="bg-[#080809] text-white">
        <ScrollProgress />
        <CustomCursor />
        <TopBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
