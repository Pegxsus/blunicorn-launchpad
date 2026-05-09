import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const works = [
  {
    category: "AI Automation",
    title: "CRM Intelligence Engine",
    slug: "crm-intelligence-engine",
    description: "An end-to-end AI pipeline that auto-qualifies leads, writes personalised outreach, and books meetings — saving 40 hrs/week.",
    tags: ["n8n", "GPT-4o", "HubSpot"],
    bg: "from-blue-900/40 to-blue-950/20",
  },
  {
    category: "Custom Agents",
    title: "Research & Analysis Agent",
    slug: "research-analysis-agent",
    description: "A multi-step autonomous agent that conducts competitive research, summarises data, and delivers boardroom-ready reports.",
    tags: ["LangChain", "Perplexity API", "Notion"],
    bg: "from-purple-900/40 to-purple-950/20",
  },
  {
    category: "RAG Systems",
    title: "Enterprise Knowledge Base",
    slug: "enterprise-knowledge-base",
    description: "A RAG-powered internal assistant trained on 50k+ docs that answers complex policy and product questions instantly.",
    tags: ["Pinecone", "OpenAI", "Slack"],
    bg: "from-indigo-900/40 to-indigo-950/20",
  },
];

const WorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const navigate = useNavigate();

  return (
    <section id="works" className="py-32 md:py-48 bg-[#030308] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 dot-grid opacity-[0.3]" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20 border-b border-white/5 pb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-black uppercase tracking-[0.4em] text-white/20 mb-8"
            >
              Selected Work
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white"
              >
                Our Works.
              </motion.h2>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/works"
              className="group flex items-center gap-2 text-sm font-bold text-white/30 hover:text-white transition-colors border-b border-white/10 pb-1 hover:border-white/40"
            >
              View All Works <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Work Cards — WAC horizontal layout */}
        <div className="flex flex-col gap-px bg-white/5">
          {works.map((work, i) => (
            <motion.div
              key={work.title}
              onClick={() => navigate(`/works/${work.slug}`)}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col md:flex-row items-start md:items-center gap-8 p-10 md:p-14 bg-[#030308] hover:bg-white/[0.015] transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* BG Gradient on Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${work.bg}`} />

              <div className="relative z-10 flex-shrink-0 w-full md:w-64">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/25 mb-3">{work.category}</p>
                <h3 className="text-2xl md:text-3xl font-black text-white">{work.title}</h3>
              </div>

              <div className="relative z-10 flex-1">
                <p className="text-base text-white/40 leading-relaxed group-hover:text-white/70 transition-colors duration-400">{work.description}</p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 flex-shrink-0 md:max-w-[200px]">
                {work.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-[11px] font-bold text-white/35 group-hover:border-blue-600/30 group-hover:text-blue-600 transition-all duration-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="relative z-10 flex-shrink-0">
                <Link to={`/works/${work.slug}`} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                  <ArrowUpRight size={18} className="text-white/30 group-hover:text-black transition-colors duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
