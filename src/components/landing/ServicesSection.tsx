import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Network, Cpu, Server, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    number: "01",
    slug: "ai-automation",
    title: "AI Automation",
    subtitle: "Intelligent workflows that execute repetitive business processes automatically.",
    examples: [
      "Lead qualification",
      "AI research",
      "Content workflows",
      "Customer support",
      "Data processing",
    ],
    icon: Network,
    color: "blue",
  },
  {
    number: "02",
    slug: "web-scrapers",
    title: "AI Agents & RAG",
    subtitle: "AI systems that can reason over your data, use tools and execute real tasks.",
    examples: [
      "AI agents",
      "RAG systems",
      "Knowledge assistants",
      "Tool-calling systems",
      "Human-in-the-loop workflows",
    ],
    icon: Cpu,
    color: "purple",
  },
  {
    number: "03",
    slug: "backend-development",
    title: "Integrations & Agent Infrastructure",
    subtitle: "Connect your existing software and make your systems AI-ready.",
    examples: [
      "APIs & Webhooks",
      "MCP servers",
      "n8n production flows",
      "CRM & DB integrations",
      "Custom headless infrastructure",
    ],
    icon: Server,
    color: "indigo",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" className="py-24 md:py-32 lg:py-40 bg-[#050510] relative overflow-hidden border-b border-white/5">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-700/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-400 mb-4 block">
            Core Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6">
            Automation engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500">
              production.
            </span>
          </h2>
          <p className="text-base text-white/50">
            We build robust, scalable business infrastructure using modern AI and workflow engineering.
          </p>
        </div>

        {/* 3 Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" ref={ref}>
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="group p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-start justify-between mb-8">
                    <span className="text-5xl font-black text-white/10 tracking-tighter">
                      {pillar.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-8">
                    {pillar.subtitle}
                  </p>

                  {/* Examples */}
                  <div className="space-y-2 mb-8">
                    <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest mb-3">
                      SYSTEM EXAMPLES
                    </p>
                    {pillar.examples.map((ex) => (
                      <div key={ex} className="flex items-center gap-2 text-xs text-white/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/services/${pillar.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 group-hover:text-blue-300 transition-colors pt-4 border-t border-white/5"
                >
                  Explore Capabilities <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
