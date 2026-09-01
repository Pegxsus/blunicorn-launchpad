import { motion } from "framer-motion";
import { Cpu, Server, GitBranch, ArrowRight, CheckCircle2, Terminal } from "lucide-react";

interface CaseStudyVisualizationProps {
  slug: string;
}

const CaseStudyVisualization = ({ slug }: CaseStudyVisualizationProps) => {
  if (slug === "crm-intelligence-engine") {
    return (
      <div className="p-6 md:p-8 rounded-2xl bg-black/60 border border-blue-500/20 font-mono text-xs text-white/80 overflow-x-auto">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center gap-2 text-blue-400 font-bold">
            <Terminal size={16} />
            <span>PIPELINE_ORCHESTRATOR :: CRM_INTEL_V2</span>
          </div>
          <span className="text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
            STATUS: 200 OK (0.42s)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-[11px]">
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <p className="text-blue-400 font-bold mb-1">[1] Ingestion</p>
            <p className="text-white/60">Webhook event: lead_created</p>
            <p className="text-white/40 text-[10px] mt-1">Payload: {`{ email, company }`}</p>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <p className="text-purple-400 font-bold mb-1">[2] AI Enrichment</p>
            <p className="text-white/60">LinkedIn &amp; Domain Scrape</p>
            <p className="text-white/40 text-[10px] mt-1">ICP Score: 94/100</p>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <p className="text-indigo-400 font-bold mb-1">[3] LLM Dispatch</p>
            <p className="text-white/60">Draft contextual email</p>
            <p className="text-white/40 text-[10px] mt-1">Model: gpt-4o-mini</p>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <p className="text-emerald-400 font-bold mb-1">[4] Calendar Booking</p>
            <p className="text-white/60">CRM Status -&gt; Booked</p>
            <p className="text-white/40 text-[10px] mt-1">Slot: Tomorrow 10:00 AM</p>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "research-analysis-agent") {
    return (
      <div className="p-6 md:p-8 rounded-2xl bg-black/60 border border-purple-500/20 font-mono text-xs text-white/80 overflow-x-auto">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center gap-2 text-purple-400 font-bold">
            <GitBranch size={16} />
            <span>MULTI_AGENT_GRAPH :: RESEARCH_EXECUTION</span>
          </div>
          <span className="text-[10px] text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
            AGENTS: 4 ACTIVE
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="w-full md:w-1/4 p-3 rounded-lg bg-white/5 border border-white/10">
            <span className="text-purple-400 font-bold">Manager Agent</span>
            <p className="text-white/50 text-[10px] mt-1">Decomposes user query into 5 search tasks</p>
          </div>
          <ArrowRight className="hidden md:block text-purple-400" size={16} />
          <div className="w-full md:w-2/4 p-3 rounded-lg bg-purple-950/40 border border-purple-500/30">
            <span className="text-purple-300 font-bold">Sub-Agents Concurrent Execution</span>
            <p className="text-white/60 text-[10px] mt-1">Agent 1: Web Scraper | Agent 2: PDF Parser | Agent 3: Fact Checker</p>
          </div>
          <ArrowRight className="hidden md:block text-purple-400" size={16} />
          <div className="w-full md:w-1/4 p-3 rounded-lg bg-white/5 border border-white/10">
            <span className="text-green-400 font-bold">Boardroom Synthesis</span>
            <p className="text-white/50 text-[10px] mt-1">Structured PDF Report Generated</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 rounded-2xl bg-black/60 border border-emerald-500/20 font-mono text-xs text-white/80 overflow-x-auto">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
        <div className="flex items-center gap-2 text-emerald-400 font-bold">
          <Server size={16} />
          <span>VECTOR_RAG :: VECTOR_SEARCH_PIPELINE</span>
        </div>
        <span className="text-[10px] text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          CHUNKS: 50,000+ INDEXED
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px]">
        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          <span className="text-emerald-400 font-bold">Confluence / Slack Sync</span>
          <p className="text-white/50 text-[10px] mt-1">Continuous ingestion pipeline</p>
        </div>
        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          <span className="text-emerald-300 font-bold">Vector Similarity Search</span>
          <p className="text-white/50 text-[10px] mt-1">Pinecone top-k cosine match (k=5)</p>
        </div>
        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          <span className="text-white font-bold">Cited Answer Generator</span>
          <p className="text-white/50 text-[10px] mt-1">Zero hallucination output + deep link</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyVisualization;
