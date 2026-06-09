import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import PainSection from "@/components/PainSection";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import ClientJourney from "@/components/ClientJourney";
import SchedulingSystem from "@/components/SchedulingSystem";
import DashboardSection from "@/components/DashboardSection";
import ValueSection from "@/components/ValueSection";
import ForWho from "@/components/ForWho";
import OfferSection from "@/components/OfferSection";
import UrgencySection from "@/components/UrgencySection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <PainSection />
        <HowItWorks />
        <Comparison />
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
    </>
  );
}
