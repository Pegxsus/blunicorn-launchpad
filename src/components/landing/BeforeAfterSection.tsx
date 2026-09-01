import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Zap, ArrowDown, ArrowRight, AlertTriangle, CheckCircle2, UserCheck, Bot } from "lucide-react";

const beforeSteps = [
  { step: "01", title: "Lead arrives", desc: "Form submitted on website" },
  { step: "02", title: "Employee researches company", desc: "Manual web search" },
  { step: "03", title: "Searches LinkedIn", desc: "Hunting prospect profiles" },
  { step: "04", title: "Checks CRM", desc: "Cross-checking for duplicates" },
  { step: "05", title: "Updates fields", desc: "Hand-typing details into CRM" },
  { step: "06", title: "Writes email", desc: "Drafting organic outreach" },
  { step: "07", title: "Sends email", desc: "Sending from personal inbox" },
  { step: "08", title: "Creates follow-up", desc: "Setting calendar reminder" },
];

const afterSteps = [
  { step: "01", title: "Lead arrives", desc: "Real-time webhook trigger" },
  { step: "02", title: "AI researches", desc: "Deep web & company extraction" },
  { step: "03", title: "Lead scored", desc: "LLM qualification & ICP fit" },
  { step: "04", title: "CRM updated", desc: "Automated instant field write" },
  { step: "05", title: "Personalised outreach generated", desc: "Contextual AI email draft" },
  { step: "06", title: "Follow-up scheduled", desc: "Automated sequence enqueued" },
  { step: "07", title: "Sales team notified", desc: "Slack alert with meeting link" },
];

const BeforeAfterSection = () => {
  const [activeTab, setActiveTab] = useState<"after" | "before">("after");

  return (
    <section id="before-after" className="py-24 md:py-32 bg-[#030308] relative overflow-hidden border-b border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-400 mb-4 block">
              Workflow Transformation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              From Manual Work to Automated Systems
            </h2>
            <p className="text-base text-white/50 max-w-xl mx-auto">
              Compare how traditional manual lead operations compare to a Blukaze production AI system.
            </p>
          </motion.div>

          {/* Toggle Switch */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-white/[0.04] border border-white/10">
            <button
              onClick={() => setActiveTab("before")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === "before"
                  ? "bg-red-500/20 text-red-300 border border-red-500/30 shadow-lg"
                  : "text-white/40 hover:text-white"
              }`}
            >
              <AlertTriangle size={14} />
              BEFORE (Manual)
            </button>
            <button
              onClick={() => setActiveTab("after")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === "after"
                  ? "bg-blue-600 text-white border border-blue-400 shadow-lg shadow-blue-600/30"
                  : "text-white/40 hover:text-white"
              }`}
            >
              <CheckCircle2 size={14} />
              AFTER (Blukaze Automated)
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Flow Comparison */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "before" ? (
              <motion.div
                key="before-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="p-8 sm:p-10 rounded-3xl bg-red-950/10 border border-red-500/20"
              >
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-red-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                      <Clock className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Manual Sales Process</h3>
                      <p className="text-xs text-red-300/70">Average duration: 40-48 hours per batch</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold border border-red-500/30">
                    High Latency & Human Error
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {beforeSteps.map((s, idx) => (
                    <div
                      key={s.step}
                      className="p-4 rounded-xl bg-white/[0.02] border border-red-500/15 relative"
                    >
                      <span className="text-[10px] font-black text-red-400/60 uppercase tracking-wider block mb-1">
                        STEP {s.step}
                      </span>
                      <h4 className="text-sm font-bold text-white mb-1">{s.title}</h4>
                      <p className="text-xs text-white/40">{s.desc}</p>

                      {idx < beforeSteps.length - 1 && (
                        <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-red-500/40">
                          <ArrowRight size={14} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="after-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="p-8 sm:p-10 rounded-3xl bg-blue-950/20 border border-blue-500/30 shadow-2xl shadow-blue-600/10"
              >
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-blue-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/40">
                      <Zap className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Blukaze Automated Pipeline</h3>
                      <p className="text-xs text-blue-300/70">Execution time: &lt; 2 minutes end-to-end</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
                    100% Reliable &amp; Deterministic
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
                  {afterSteps.map((s, idx) => (
                    <motion.div
                      key={s.step}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.08 }}
                      className="p-3.5 rounded-xl bg-blue-900/20 border border-blue-500/30 relative flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[9px] font-black text-blue-400 uppercase tracking-wider block mb-1">
                          0{idx + 1}
                        </span>
                        <h4 className="text-xs font-bold text-white leading-tight mb-1">{s.title}</h4>
                        <p className="text-[10px] text-white/50 leading-tight">{s.desc}</p>
                      </div>

                      {idx < afterSteps.length - 1 && (
                        <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-blue-400">
                          <ArrowRight size={12} />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
