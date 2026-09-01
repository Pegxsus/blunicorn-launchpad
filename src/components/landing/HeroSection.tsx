import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import BookCallDialog from "./BookCallDialog";
import { Button } from "@/components/ui/button";

/* ─── Staggered animation helpers ─── */
const ease = [0.22, 1, 0.36, 1];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

const HeroSection = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-center items-center overflow-hidden bg-[#030308] pt-28 pb-16 md:pt-32 md:pb-24">

      {/* ── Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Radial core glow — sits behind headline */}
        <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(900px,140vw)] aspect-square rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.14)_0%,rgba(99,102,241,0.07)_40%,transparent_70%)] blur-[2px]" />

        {/* Slow-breathing accent */}
        <motion.div
          animate={{ opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px]"
        />

        {/* Fine dot grid — masked to center */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_45%,#000_10%,transparent_100%)]" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#030308] to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">

        {/* Eyebrow */}
        <motion.div
          {...fadeUp(0.04)}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] sm:text-xs font-black uppercase tracking-[0.25em] text-blue-400 mb-6"
        >
          <Sparkles size={13} className="text-blue-400" />
          <span>AI AUTOMATION • AGENTIC SYSTEMS • WORKFLOW ENGINEERING</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.08)}
          className="max-w-[950px] text-[clamp(2.25rem,6.5vw,5.25rem)] font-black tracking-[-0.04em] leading-[1.06] text-white mb-8"
        >
          Automate the Work Your Team{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500">
            Shouldn't Be Doing.
          </span>
        </motion.h1>

        {/* Primary & Secondary CTAs */}
        <motion.div
          {...fadeUp(0.24)}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
        >
          <Button
            onClick={() => setIsBookCallOpen(true)}
            className="w-full sm:w-auto h-13 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] border-none shadow-[0_0_25px_rgba(37,99,235,0.4)]"
          >
            Get a Free Automation Audit
          </Button>

          <a href="#works" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full sm:w-auto h-13 px-8 rounded-full bg-white/[0.04] border-white/[0.12] text-white hover:bg-white/[0.08] font-semibold text-sm transition-all group"
            >
              See What We've Built
              <ArrowRight className="w-4 h-4 ml-2 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </Button>
          </a>
        </motion.div>

        {/* Technical Credibility Line */}
        <motion.div
          {...fadeUp(0.32)}
          className="flex flex-col items-center gap-3 pt-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            n8n &nbsp;·&nbsp; AI Agents &nbsp;·&nbsp; APIs &nbsp;·&nbsp; RAG &nbsp;·&nbsp; MCP &nbsp;·&nbsp; Integrations
          </p>
        </motion.div>
      </div>

      <BookCallDialog open={isBookCallOpen} onOpenChange={setIsBookCallOpen} />
    </section>
  );
};

export default HeroSection;
