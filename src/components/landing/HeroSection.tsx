import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

const stats = [
  { figure: "30+", label: "Production Workflows Shipped" },
  { figure: "100%", label: "Type-Safe Executions" },
  { figure: "Open Source", label: "Core Framework Native" },
];

const HeroSection = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-center items-center overflow-hidden bg-[#030308] pt-24 pb-16 md:pt-20 md:pb-20">

      {/* ── Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Radial core glow — sits behind headline */}
        <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(900px,140vw)] aspect-square rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,rgba(99,102,241,0.06)_40%,transparent_70%)] blur-[2px]" />

        {/* Slow-breathing accent */}
        <motion.div
          animate={{ opacity: [0.08, 0.16, 0.08] }}
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

        {/* Headline — scales cleanly from mobile to desktop */}
        <motion.h1
          {...fadeUp(0.08)}
          className="max-w-[900px] text-[clamp(2.25rem,7.5vw,5.5rem)] font-black tracking-[-0.04em] leading-[1.05] text-white mb-5 md:mb-6"
        >
          We build the hands
          <br className="hidden sm:block" />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500">
            for your AI Agents.
          </span>
        </motion.h1>

        {/* Sub-headline — one crisp line */}
        <motion.p
          {...fadeUp(0.16)}
          className="max-w-2xl text-[15px] sm:text-base md:text-lg text-white/40 leading-relaxed mb-8 md:mb-10 font-medium"
        >
          We engineer machine-readable APIs, Model Context Protocols, and headless workflows to transition your legacy software into an agent-first environment.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.24)}
          className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
        >
          <Button
            onClick={() => setIsBookCallOpen(true)}
            className="w-full sm:w-auto h-12 sm:h-13 px-7 rounded-full bg-white text-[#030308] font-bold text-sm hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] border-none shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_2px_20px_rgba(255,255,255,0.08)]"
          >
            Book a Free Call
          </Button>

          <Link to="/works" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full sm:w-auto h-12 sm:h-13 px-7 rounded-full bg-transparent border-white/[0.1] text-white/70 hover:text-white hover:bg-white/[0.05] font-semibold text-sm transition-all group"
            >
              See Our Work
              <ArrowRight className="w-4 h-4 ml-1.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </Button>
          </Link>
        </motion.div>

        {/* ── Inline social proof metrics ── */}
        <motion.div
          {...fadeUp(0.36)}
          className="mt-14 md:mt-20 w-full max-w-xl"
        >
          <div className="grid grid-cols-3 gap-4 sm:gap-0 sm:divide-x sm:divide-white/[0.06]">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 + i * 0.1, ease }}
                className="flex flex-col items-center text-center px-2 sm:px-6"
              >
                <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white">
                  {stat.figure}
                </span>
                <span className="text-[10px] sm:text-xs text-white/30 font-medium mt-1 tracking-wide">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <BookCallDialog open={isBookCallOpen} onOpenChange={setIsBookCallOpen} />
    </section>
  );
};

export default HeroSection;
