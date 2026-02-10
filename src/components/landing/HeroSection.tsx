import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import HeroLightning from "./HeroLightning";
import BookCallDialog from "./BookCallDialog";

const HeroSection = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const { ref, isRevealed } = useScrollReveal(0.1);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />

      {/* Main content */}
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 relative z-10 flex-1 flex items-center">
        <div ref={ref} className={`w-full scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] mb-6 tracking-tight text-foreground/80">
                Intelligent AI automation
                <br />
                <span className="gradient-text font-semibold">for growing businesses</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed">
                We audit your business, untangle operations, and install AI automations that remove bottlenecks and 10× your team's productivity.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 text-base group w-full sm:w-auto"
                  onClick={() => setIsBookCallOpen(true)}
                >
                  Book a Discovery Call
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a href="#services" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="rounded-full px-8 text-base border-border/60 hover:border-muted-foreground/40 text-foreground/80 w-full sm:w-auto">
                    See What We Do
                  </Button>
                </a>
              </div>
            </div>

            {/* Right — Hero Animation */}
            <div className="hidden lg:flex justify-center items-center relative">
              <HeroLightning />
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <BookCallDialog open={isBookCallOpen} onOpenChange={setIsBookCallOpen} />
    </section>
  );
};

export default HeroSection;
