import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TrustProofBar from "@/components/landing/TrustProofBar";
import ProblemSection from "@/components/landing/ProblemSection";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import WhatWeAutomateSection from "@/components/landing/WhatWeAutomateSection";
import ServicesSection from "@/components/landing/ServicesSection";
import WhyBlukazeSection from "@/components/landing/WhyBlukazeSection";
import WorksSection from "@/components/landing/WorksSection";
import ToolsMarqueeSection from "@/components/landing/ToolsMarqueeSection";
import ProcessSection from "@/components/landing/ProcessSection";
import DashboardSection from "@/components/landing/DashboardSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import N8NTemplatesSection from "@/components/landing/N8NTemplatesSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import CursorGlow from "@/components/landing/CursorGlow";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO 
        title="Blukaze | AI Automation & Business Process Automation" 
        description="Blukaze builds production-ready AI automation systems, AI agents, integrations and workflows that eliminate repetitive business work."
      />
      <CursorGlow />
      <Navbar />
      <main>
        {/* SECTION 02 — HERO */}
        <HeroSection />

        {/* SECTION 03 — TRUST / PROOF BAR */}
        <TrustProofBar />

        {/* SECTION 04 — THE PROBLEM */}
        <ProblemSection />

        {/* SECTION 05 — BEFORE -> AFTER */}
        <BeforeAfterSection />

        {/* SECTION 06 — WHAT WE AUTOMATE */}
        <WhatWeAutomateSection />

        {/* SECTION 07 — WHAT WE BUILD */}
        <ServicesSection />

        {/* SECTION 08 — WHY BLUKAZE */}
        <WhyBlukazeSection />

        {/* SECTION 09 & 10 — CASE STUDIES & VISUALIZATION */}
        <WorksSection />

        {/* SECTION 11 — TECHNOLOGY */}
        <ToolsMarqueeSection />

        {/* SECTION 12 — HOW IT WORKS */}
        <ProcessSection />

        {/* SECTION 13 — CLIENT EXPERIENCE */}
        <DashboardSection />

        {/* SECTION 14 — TESTIMONIALS */}
        <TestimonialsSection />

        {/* SECTION 15 — TEMPLATES */}
        <N8NTemplatesSection />

        {/* SECTION 16 — FAQ */}
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
