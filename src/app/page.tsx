"use client";

import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { GraphicDesign } from "@/components/sections/GraphicDesign";
import { VelocityBanner } from "@/components/sections/VelocityBanner";
import { Process } from "@/components/sections/Process";
import { Offer } from "@/components/sections/Offer";
import { Results } from "@/components/sections/Results";
import { AdsResult } from "@/components/sections/AdsResult";
import { Features } from "@/components/sections/Features";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { FAQ } from "@/components/sections/FAQ";
import { ExclusiveSlots } from "@/components/sections/ExclusiveSlots";
import { Eligibility } from "@/components/sections/Eligibility";
import { CallToAction } from "@/components/sections/CallToAction";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <About />
      <Services />
      <GraphicDesign />
      <Process />
      <Offer />
      <Results />
      <AdsResult />
      <Features />
      <HowWeWork />
      <FAQ />
      <ExclusiveSlots />
      <Eligibility />
      <CallToAction />
      <Footer />
    </main>
  );
}
