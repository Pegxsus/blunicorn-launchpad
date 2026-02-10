import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import heroImage from "@/assets/hero-lightning.png";
import BookCallDialog from "./BookCallDialog";

const useCases = [
  { label: "Lead Gen", highlight: "Capture & qualify leads automatically" },
  { label: "Customer Ops", highlight: "Automate onboarding workflows" },
  { label: "Data Sync", highlight: "Keep systems in perfect sync" },
  { label: "AI Agents", highlight: "Deploy intelligent assistants" },
  { label: "Your Use Case", highlight: "Tell us what you need" },
];

const HeroSection = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [activeCase, setActiveCase] = useState(0);
  const { ref, isRevealed } = useScrollReveal(0.1);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-0">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />

      <div className="section-fade-bottom" />

      {/* Main content */}
      <div className="container mx-auto px-8 md:px-12 lg:px-20 relative z-10 flex-1 flex items-center">
        <div ref={ref} className={`w-full scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — Text */}
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] mb-6 tracking-tight text-foreground/80">
                Intelligent AI automation
                <br />
                <span className="gradient-text font-semibold">for growing businesses</span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
                Build with the reliability of expert engineering. We design, build, and maintain 
                custom AI automations that save time, reduce errors, and scale with you. Powered by n8n.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 text-base group"
                  onClick={() => setIsBookCallOpen(true)}
                >
                  Book a Discovery Call
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a href="#services">
                  <Button variant="outline" size="lg" className="rounded-full px-8 text-base border-border/60 hover:border-muted-foreground/40 text-foreground/80">
                    See What We Do
                  </Button>
                </a>
              </div>
            </div>

            {/* Right — Hero Image */}
            <div className="hidden lg:flex justify-center items-center relative">
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />
              <img
                src={heroImage}
                alt="AI Automation"
                className="relative z-10 w-full max-w-md object-contain drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 0 60px hsl(217 91% 60% / 0.3))' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Use case cards — bottom strip */}
      <div className="relative z-10 mt-8 pb-0">
        <div className="container mx-auto px-8 md:px-12 lg:px-20">
          <div className={`grid grid-cols-2 md:grid-cols-5 gap-3 scroll-reveal delay-300 ${isRevealed ? 'revealed' : ''}`}>
            {useCases.map((uc, i) => (
              <button
                key={uc.label}
                onClick={() => setActiveCase(i)}
                className={`use-case-card text-left ${activeCase === i ? 'active' : ''}`}
              >
                <p className="text-sm font-semibold text-foreground mb-1">
                  {uc.label}
                </p>
                <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-primary flex-shrink-0" />
                  {uc.highlight}
                </p>
              </button>
            ))}
          </div>
        </div>
        <div className="h-px mt-6 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <BookCallDialog open={isBookCallOpen} onOpenChange={setIsBookCallOpen} />
    </section>
  );
};

export default HeroSection;
