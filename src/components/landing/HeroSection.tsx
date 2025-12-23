import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import n8nLogo from "@/assets/n8n-logo.png";
const HeroSection = () => {
  const {
    ref,
    isRevealed
  } = useScrollReveal(0.1);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Gradient Orbs */}
      <div className="gradient-orb gradient-orb-1" />
      <div className="gradient-orb gradient-orb-2" />
      <div className="gradient-orb gradient-orb-3" />

      {/* Grid Background */}
      <div className="absolute inset-0 grid-background" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay" />
      
      {/* Section Fade */}
      <div className="section-fade-bottom" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`max-w-4xl mx-auto text-center scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          {/* Badge */}
          <div className="flex justify-center mb-10">
            <div className="pill-badge animate-gradient bg-gradient-to-r from-[hsl(var(--gradient-purple)/0.3)] via-[hsl(var(--gradient-blue)/0.3)] to-[hsl(var(--gradient-pink)/0.3)] bg-[length:200%_200%] border-primary/20">
              <span>Powered by</span>
              <img src={n8nLogo} alt="n8n" className="h-5 w-5 rounded" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-8 tracking-tight">Transform your business with 
intelligent automation.<br />
            <span className="gradient-text animate-gradient bg-[length:200%_200%]">with intelligent automation.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">High-impact AI automations engineered for speed, reliability, and scale</p>

          {/* CTA Bar */}
          <div className="inline-flex items-center gap-3 px-2 py-2 rounded-full border border-border bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300">
            <span className="flex items-center gap-2 px-4 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              Start automating your business now!
            </span>
            <Button variant="default" className="rounded-full px-6 group">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;