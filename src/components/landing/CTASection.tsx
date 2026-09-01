import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import BookCallDialog from "./BookCallDialog";

const CTASection = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const { ref, isRevealed } = useScrollReveal(0.1);

  return (
    <section className="py-28 px-6 relative overflow-hidden bg-[#050510]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10" ref={ref}>
        <div className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-black uppercase tracking-[0.25em] text-blue-400 mb-6">
            <Sparkles size={14} />
            <span>Low-Friction Consultation</span>
          </span>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            Have a process your team{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              hates doing manually?
            </span>
          </h2>

          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-10">
            Tell us what it is. We'll tell you whether it can be automated.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full px-8 h-13 text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
              onClick={() => setIsBookCallOpen(true)}
            >
              Get a Free Automation Audit
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-full px-8 h-13 text-sm font-bold bg-white/5 border-white/10 hover:bg-white/10 text-white transition-all"
              onClick={() => setIsBookCallOpen(true)}
            >
              Show Us Your Workflow
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <BookCallDialog open={isBookCallOpen} onOpenChange={setIsBookCallOpen} />
    </section>
  );
};

export default CTASection;
