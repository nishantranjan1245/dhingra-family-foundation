import React from "react";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import FocusAreasSection from "@/components/home/FocusAreasSection";
import FeaturedGuidesSection from "@/components/home/FeaturedGuidesSection";
import ImpactSection from "@/components/home/ImpactSection";
import GetInvolvedSection from "@/components/home/GetInvolvedSection";
import InsightsSection from "@/components/home/InsightsSection";
import ContactCTASection from "@/components/home/ContactCTASection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <FocusAreasSection />
      <FeaturedGuidesSection />
      <ImpactSection />
      <GetInvolvedSection />
      <InsightsSection />
      <ContactCTASection />
    </main>
  );
}