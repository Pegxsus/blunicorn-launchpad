import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import BookCallDialog from "@/components/landing/BookCallDialog";
import { Link } from "react-router-dom";

interface ArticleCTAProps {
  type?: "in-article" | "final";
  headline?: string;
  subtext?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export const ArticleCTA = ({
  type = "in-article",
  headline,
  subtext,
  primaryButtonText = "Explore Automation Audit",
  secondaryButtonText = "Explore Work Systems",
}: ArticleCTAProps) => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  if (type === "in-article") {
    return (
      <>
        <section className="my-14 p-8 sm:p-10 rounded-3xl bg-blue-950/20 border border-blue-500/30 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(37,99,235,0.1)]">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-blue-400 mb-2 block">
              BLUKAZE WORKFLOW AUDIT
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
              {headline || "Have a process your team repeats every day?"}
            </h3>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              {subtext || "Tell us what you're doing manually. We'll help identify what can be automated."}
            </p>
          </div>
          <Button
            onClick={() => setIsBookCallOpen(true)}
            className="rounded-full px-6 h-12 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shrink-0 shadow-lg shadow-blue-600/30"
          >
            <span>{primaryButtonText}</span>
            <ArrowRight size={14} className="ml-2" />
          </Button>
        </section>
        <BookCallDialog open={isBookCallOpen} onOpenChange={setIsBookCallOpen} />
      </>
    );
  }

  return (
    <>
      <section className="my-20 p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#050510] via-blue-950/30 to-[#030308] border border-white/10 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] font-black uppercase tracking-[0.25em] text-blue-400 mb-6">
            <Sparkles size={12} />
            <span>BUILD WITH BLUKAZE</span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            {headline || "Your next automation might already be hiding in your workflow."}
          </h3>

          <p className="text-sm sm:text-base text-white/60 mb-8 leading-relaxed">
            {subtext || "Tell Blukaze what your team is doing manually and we'll help you identify where production automation can save 40+ hours every week."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => setIsBookCallOpen(true)}
              className="w-full sm:w-auto rounded-full px-8 h-13 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30"
            >
              {primaryButtonText}
            </Button>
            <Link to="/works" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto rounded-full px-8 h-13 bg-white/5 border-white/10 text-white hover:bg-white/10 font-semibold text-sm"
              >
                {secondaryButtonText}
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <BookCallDialog open={isBookCallOpen} onOpenChange={setIsBookCallOpen} />
    </>
  );
};

export default ArticleCTA;
