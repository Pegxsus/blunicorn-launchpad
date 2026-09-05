import { motion } from "framer-motion";
import { Workflow, Cpu, Zap, Database, ArrowRight, ShieldCheck } from "lucide-react";

interface ArticleHeroVisualProps {
  caption: string;
}

export const ArticleHeroVisual = ({ caption }: ArticleHeroVisualProps) => {
  return (
    <figure className="my-10 max-w-4xl mx-auto px-5 sm:px-6">
      <div className="relative w-full rounded-3xl bg-[#050510] border border-white/10 overflow-hidden shadow-2xl p-6 sm:p-10">
        
        {/* Fine Dot Grid & Ambient Glow Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-8 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="text-[11px] font-mono text-white/30 ml-2">architecture // event-pipeline-v4.2</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
            <ShieldCheck size={12} />
            <span>99.99% RELIABLE</span>
          </div>
        </div>

        {/* Abstract Architectural Diagram */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center">
          
          {/* Node 1: Inbound Trigger */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-3 relative group hover:border-blue-500/40 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Zap size={20} />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 block mb-0.5">
                01. EVENT INGESTION
              </span>
              <h4 className="text-sm font-bold text-white mb-1">Manual Data Input</h4>
              <p className="text-xs text-white/50 leading-relaxed">
                Forms, Webhooks, Emails, CSV Exports & SaaS events.
              </p>
            </div>
          </motion.div>

          {/* Node 2: AI Workflow Engine */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-5 rounded-2xl bg-gradient-to-b from-blue-600/15 to-indigo-600/15 border border-blue-500/30 flex flex-col gap-3 relative shadow-[0_0_30px_rgba(37,99,235,0.15)]"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Cpu size={20} className="animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 block mb-0.5">
                02. ORCHESTRATION & AI
              </span>
              <h4 className="text-sm font-bold text-white mb-1">Blukaze n8n Engine</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                LLM Intent Triage, Schema Validation & Auto-Routing.
              </p>
            </div>
          </motion.div>

          {/* Node 3: Automated Action & Sync */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-3 relative group hover:border-indigo-500/40 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Database size={20} />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">
                03. ZERO-TOUCH OUTCOME
              </span>
              <h4 className="text-sm font-bold text-white mb-1">System Update</h4>
              <p className="text-xs text-white/50 leading-relaxed">
                Instant CRM updates, notifications & PO creation.
              </p>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Caption */}
      {caption && (
        <figcaption className="mt-4 text-center text-xs text-white/40 font-mono">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default ArticleHeroVisual;
