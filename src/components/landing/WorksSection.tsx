import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import CaseStudyVisualization from "./CaseStudyVisualization";

const caseStudies = [
  {
    category: "AI Automation",
    title: "CRM Intelligence Engine",
    slug: "crm-intelligence-engine",
    problem: "Sales teams were spending 40 hours weekly manually researching, qualifying and processing leads, causing massive delay in response times.",
    built: "Lead enrichment → AI qualification → Personalised outreach → CRM update → Meeting booking",
    stack: "n8n · GPT-4o · HubSpot · Clearbit",
    result: "40+ hours/week saved",
    subResult: "< 5 minute lead response time",
  },
  {
    category: "Custom Agents",
    title: "Research & Analysis Agent",
    slug: "research-analysis-agent",
    problem: "Analysts spent 2-3 weeks manually gathering market data, scraping competitor sites, and formatting strategic reports.",
    built: "Multi-agent research planner → Concurrent Web Scraper → Fact-Checker → Boardroom Report Generator",
    stack: "LangChain · Perplexity API · Notion · Python",
    result: "20x faster research",
    subResult: "-95% manual analyst effort",
  },
  {
    category: "RAG Systems",
    title: "Enterprise Knowledge Base",
    slug: "enterprise-knowledge-base",
    problem: "Employees wasted 1.5 hours daily searching through 50,000+ scattered documents across Drive, Notion, and Slack.",
    built: "Automated Doc Ingestion → Vector Search Pipeline → Zero-Hallucination Assistant with Cited Sources",
    stack: "Pinecone · OpenAI · Slack Bot · Python",
    result: "90% resolution rate",
    subResult: "Support tickets reduced by 60%",
  },
];

const WorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const navigate = useNavigate();

  return (
    <section id="works" className="py-24 md:py-36 bg-[#030308] relative overflow-hidden border-b border-white/5" ref={ref}>
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 border-b border-white/5 pb-12">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-400 mb-4 block">
              Proven Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Real systems. Real business outcomes.
            </h2>
          </div>
          <Link
            to="/works"
            className="group flex items-center gap-2 text-xs font-bold text-white/50 hover:text-white transition-colors border-b border-white/10 pb-1 hover:border-white/40"
          >
            View All Case Studies <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-12">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                
                {/* Left: Info */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20">
                      {study.category}
                    </span>
                    <span className="text-xs text-white/40 font-mono">{study.stack}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white">{study.title}</h3>

                  <div className="space-y-3 pt-2">
                    <div>
                      <span className="text-xs font-bold text-red-400/90 uppercase tracking-wider block mb-1">
                        PROBLEM
                      </span>
                      <p className="text-sm text-white/60 leading-relaxed">{study.problem}</p>
                    </div>

                    <div>
                      <span className="text-xs font-bold text-blue-400/90 uppercase tracking-wider block mb-1">
                        WHAT BLUKAZE BUILT
                      </span>
                      <p className="text-sm font-semibold text-white/90 leading-relaxed">{study.built}</p>
                    </div>
                  </div>
                </div>

                {/* Right: Outcome Metric */}
                <div className="lg:col-span-4 p-6 rounded-2xl bg-blue-950/20 border border-blue-500/30 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 block mb-2">
                      VERIFIED OUTCOME
                    </span>
                    <p className="text-2xl sm:text-3xl font-black text-white mb-1">
                      {study.result}
                    </p>
                    <p className="text-xs text-white/60">{study.subResult}</p>
                  </div>

                  <button
                    onClick={() => navigate(`/works/${study.slug}`)}
                    className="mt-6 flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white transition-all group"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Tangible Engineering Visualization Diagram */}
              <CaseStudyVisualization slug={study.slug} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
