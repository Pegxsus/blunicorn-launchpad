import { motion } from "framer-motion";
import { ShieldCheck, Layers, Sparkles, CheckCircle2, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Production-first",
    description: "We design systems for reliability, monitoring, error handling and long-term operation.",
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Layers,
    title: "Built around your stack",
    description: "We integrate with the software your business already uses instead of forcing unnecessary replacements.",
    color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: Sparkles,
    title: "AI where it actually helps",
    description: "We use AI where it meaningfully reduces work — not simply because it's trendy.",
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: CheckCircle2,
    title: "Reliable by design",
    description: "Retries, validation, fallbacks, structured outputs and human-in-the-loop controls where required.",
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: TrendingUp,
    title: "Built to evolve",
    description: "Your automation is designed as an extensible business system, not a one-off workflow.",
    color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  },
];

const WhyBlukazeSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#030308] relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-400 mb-4 block">
              Engineering Principles
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              Not just another AI wrapper.
            </h2>
            <p className="text-base text-white/50 max-w-lg mx-auto">
              We build production infrastructure designed for enterprise reliability, security, and long-term ROI.
            </p>
          </motion.div>
        </div>

        {/* 5 Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 ${pillar.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-bold text-white/30 tracking-widest uppercase">
                  BLUKAZE STANDARD
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyBlukazeSection;
