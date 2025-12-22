import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="flex justify-center mb-10">
            <div className="pill-badge">
              <span>Powered by</span>
              <span className="text-foreground font-medium">AI Innovation</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-8 tracking-tight">
            Transform your business
            <br />
            <span className="text-foreground">with intelligent automation.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Zero hassle, maximum efficiency. Make workflows seamless, fast, and 
            scalable with AI-driven precision.
          </p>

          {/* CTA Bar */}
          <div className="inline-flex items-center gap-3 px-2 py-2 rounded-full border border-border bg-card/80 backdrop-blur-sm">
            <span className="flex items-center gap-2 px-4 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Start automating your business now!
            </span>
            <Button variant="default" className="rounded-full px-6">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;