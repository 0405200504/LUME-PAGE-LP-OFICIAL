import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StickyCTA from "@/components/StickyCTA";
import Footer from "@/components/Footer";

// Lazy loading das seções abaixo da dobra para otimizar o First Contentful Paint
const MarqueeStrip = dynamic(() => import("@/components/MarqueeStrip"));
const PainSection = dynamic(() => import("@/components/PainSection"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const Comparison = dynamic(() => import("@/components/Comparison"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const ClientJourney = dynamic(() => import("@/components/ClientJourney"));
const SchedulingSystem = dynamic(() => import("@/components/SchedulingSystem"));
const DashboardSection = dynamic(() => import("@/components/DashboardSection"));
const ValueSection = dynamic(() => import("@/components/ValueSection"));
const ForWho = dynamic(() => import("@/components/ForWho"));
const OfferSection = dynamic(() => import("@/components/OfferSection"));
const UrgencySection = dynamic(() => import("@/components/UrgencySection"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const FinalCTA = dynamic(() => import("@/components/FinalCTA"));

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MarqueeStrip />
        <PainSection />
        <HowItWorks />
        <Comparison />
        <Testimonials />
        <ClientJourney />
        <SchedulingSystem />
        <DashboardSection />
        <ValueSection />
        <ForWho />
        <OfferSection />
        <UrgencySection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
