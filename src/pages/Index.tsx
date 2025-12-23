import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import ProcessSection from "@/components/landing/ProcessSection";
import N8NTemplatesSection from "@/components/landing/N8NTemplatesSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <N8NTemplatesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
