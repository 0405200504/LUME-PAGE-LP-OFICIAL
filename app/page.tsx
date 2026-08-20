import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StickyCTA from "@/components/StickyCTA";
import Footer from "@/components/Footer";

// Lazy loading das seções abaixo da dobra para otimizar o First Contentful Paint
const MarqueeStrip = dynamic(() => import("@/components/MarqueeStrip"));
const PainSection = dynamic(() => import("@/components/PainSection"));
const CostSection = dynamic(() => import("@/components/CostSection"));
const TurningPoint = dynamic(() => import("@/components/TurningPoint"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const ClientJourney = dynamic(() => import("@/components/ClientJourney"));
const DashboardSection = dynamic(() => import("@/components/DashboardSection"));
const Comparison = dynamic(() => import("@/components/Comparison"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const ForWho = dynamic(() => import("@/components/ForWho"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const Guarantee = dynamic(() => import("@/components/Guarantee"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const FinalCTA = dynamic(() => import("@/components/FinalCTA"));

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />
        {/* 2. Faixa de frases (a barra de prova social com números foi cortada
            até existirem dados reais para colocar nela) */}
        <MarqueeStrip />
        {/* 3. A dor */}
        <PainSection />
        {/* 4. A conta que ninguém faz */}
        <CostSection />
        {/* 5. A virada — 3 pilares */}
        <TurningPoint />
        {/* 6. Como funciona — 3 passos */}
        <HowItWorks />
        {/* 7. O que a sua cliente vê */}
        <ClientJourney />
        {/* 8. O painel — gestão 360 */}
        <DashboardSection />
        {/* 9. Antes e depois */}
        <Comparison />
        {/* 10. Depoimentos */}
        <Testimonials />
        {/* 11. Para quem é / não é */}
        <ForWho />
        {/* 12. Planos */}
        <Pricing />
        {/* 13. Garantia */}
        <Guarantee />
        {/* 14. FAQ */}
        <FAQ />
        {/* 15. Fechamento */}
        <FinalCTA />
      </main>
      {/* 16. Rodapé */}
      <Footer />
      <StickyCTA />
    </div>
  );
}
