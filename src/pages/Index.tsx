import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import ServicesSection from "@/components/landing/ServicesSection";
import ProcessSection from "@/components/landing/ProcessSection";
import N8NTemplatesSection from "@/components/landing/N8NTemplatesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CTASection from "@/components/landing/CTASection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofSection />
        <ServicesSection />
        <ProcessSection />
        <N8NTemplatesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
