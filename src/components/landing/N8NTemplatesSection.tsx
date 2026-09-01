import { Button } from "@/components/ui/button";
import { ArrowRight, Workflow, Sparkles, Zap, ArrowUpRight } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const templates = [
  {
    icon: Workflow,
    title: "AI Lead Qualification",
    problem: "Manual lead screening delays sales response times.",
    workflow: "Lead Inbound → Enrichment → AI Scoring → CRM Route → Outreach",
    tools: ["n8n", "OpenAI", "HubSpot", "Clearbit"],
    outcome: "< 5 min lead engagement & 3x higher conversion",
  },
  {
    icon: Sparkles,
    title: "AI Content Pipeline",
    problem: "Creating & staging multi-channel content takes hours.",
    workflow: "Topic Input → Research → LLM Draft → Editor Review → CMS Stage",
    tools: ["n8n", "Claude 3.5", "Webflow", "WordPress"],
    outcome: "5x faster content output with zero manual formatting",
  },
  {
    icon: Zap,
    title: "Data Sync & ETL",
    problem: "Stale operational data across Airtable, databases & SaaS.",
    workflow: "Webhook → Deduplication Check → Intelligent Branching → Sync DB",
    tools: ["n8n", "PostgreSQL", "Airtable", "BigCommerce"],
    outcome: "100% data integrity with real-time bi-directional sync",
  },
];

const N8NTemplatesSection = () => {
  const { ref, isRevealed } = useScrollReveal(0.1);

  return (
    <section id="templates" className="py-24 md:py-36 relative overflow-hidden bg-[#050510] border-b border-white/5">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <div ref={ref} className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-400 mb-4 block">
              Pre-Engineered Systems
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight text-white">
              Start with an automation that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                already works.
              </span>
            </h2>
            <p className="text-white/50 text-base max-w-lg mx-auto">
              Production-ready n8n workflows built by experts, ready to customize for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {templates.map((template, index) => (
              <div
                key={template.title}
                className={`p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left scroll-reveal delay-${(index + 1) * 100} ${isRevealed ? 'revealed' : ''}`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <template.icon className="w-6 h-6 text-blue-400" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white">{template.title}</h3>

                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-400/90 block mb-0.5">
                        PROBLEM SOLVED
                      </span>
                      <p className="text-xs text-white/60">{template.problem}</p>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400/90 block mb-0.5">
                        WORKFLOW PIPELINE
                      </span>
                      <p className="text-xs font-semibold text-white/90">{template.workflow}</p>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/90 block mb-0.5">
                        EXPECTED OUTCOME
                      </span>
                      <p className="text-xs text-white/70">{template.outcome}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {template.tools.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-semibold text-white/40">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://n8n.io/creators/hellopaul/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 group-hover:text-blue-300 transition-colors"
                  >
                    <span>Explore Workflow</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="https://n8n.io/creators/hellopaul/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="group rounded-full px-8 bg-white/5 border-white/10 hover:bg-white/10 text-white font-semibold text-xs">
                Browse All 20+ Production Templates
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default N8NTemplatesSection;
