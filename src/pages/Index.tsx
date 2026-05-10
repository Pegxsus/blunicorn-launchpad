import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ToolsMarqueeSection from "@/components/landing/ToolsMarqueeSection";
import CursorGlow from "@/components/landing/CursorGlow";

import ServicesSection from "@/components/landing/ServicesSection";
import WorksSection from "@/components/landing/WorksSection";
import ProcessSection from "@/components/landing/ProcessSection";
import N8NTemplatesSection from "@/components/landing/N8NTemplatesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CTASection from "@/components/landing/CTASection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import DashboardSection from "@/components/landing/DashboardSection";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO 
        title="Home" 
        description="Transform your business with intelligent AI automation. Blukaze delivers custom AI agents, n8n workflows, and autonomous business solutions."
      />
      <CursorGlow />
      <Navbar />
      <main>
        <HeroSection />
        <ToolsMarqueeSection />

        <ServicesSection />
        <WorksSection />
        <ProcessSection />
        <DashboardSection />
        <N8NTemplatesSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
