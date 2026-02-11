import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import BookCallDialog from "./BookCallDialog";
import MatrixRain from "./MatrixRain";

const HeroSection = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const { ref, isRevealed } = useScrollReveal(0.1);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/8 blur-[200px] pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center" ref={ref}>
        <div className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-8 tracking-tight text-foreground max-w-4xl mx-auto lowercase">
            AI-native operations
            <br />
            <span className="text-muted-foreground">for teams tired of doing it manually</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Find the bottlenecks, cut the busywork, and ship 10× faster.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="default"
              className="rounded-full px-8 text-sm group"
              onClick={() => setIsBookCallOpen(true)}
            >
              Book a Call
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="#services">
              <Button
                variant="outline"
                size="default"
                className="rounded-full px-8 text-sm border-border/60 hover:border-muted-foreground/40 text-foreground/80"
              >
                See What We Do
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <BookCallDialog open={isBookCallOpen} onOpenChange={setIsBookCallOpen} />
    </section>
  );
};

export default HeroSection;
