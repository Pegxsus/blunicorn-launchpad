import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import BookCallDialog from "./BookCallDialog";

const CTASection = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const { ref, isRevealed } = useScrollReveal(0.1);

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/8 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10" ref={ref}>
        <div className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-tight">
            There's nothing you
            <br />
            can't automate with <span className="gradient-text">Blukaze</span>
          </h2>

          <p className="text-muted-foreground text-base mb-10">
            Skeptical? Talk to us, and see for yourself.
          </p>

          <Button
            size="lg"
            className="rounded-full px-8 text-sm group"
            onClick={() => setIsBookCallOpen(true)}
          >
            Book a Discovery Call
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <BookCallDialog open={isBookCallOpen} onOpenChange={setIsBookCallOpen} />
    </section>
  );
};

export default CTASection;
