import { motion } from "framer-motion";
import {
  Copy,
  Database,
  UserCheck,
  Search,
  FileText,
  FileSpreadsheet,
  Headphones,
  Clock,
  Extract,
  BookOpen,
  ArrowRight,
  XCircle,
} from "lucide-react";

const manualTasks = [
  { icon: Copy, title: "Copying data between tools", subtitle: "Manual copy-pasting across open browser tabs" },
  { icon: Database, title: "Updating CRMs", subtitle: "Hand-entering deal notes, statuses & contacts" },
  { icon: UserCheck, title: "Lead qualification", subtitle: "Reading form submissions one-by-one" },
  { icon: Search, title: "Lead enrichment", subtitle: "Scouring LinkedIn and company sites manually" },
  { icon: FileSpreadsheet, title: "Reporting", subtitle: "Assembling weekly spreadsheets by hand" },
  { icon: FileText, title: "Document processing", subtitle: "Manually parsing invoices, PDFs and contracts" },
  { icon: Headphones, title: "Customer support", subtitle: "Answering repetitive FAQ tickets manually" },
  { icon: Clock, title: "Follow-ups", subtitle: "Remembering and drafting routine email check-ins" },
  { icon: FileText, title: "Data extraction", subtitle: "Pulling metrics from external platforms into tables" },
  { icon: BookOpen, title: "Internal knowledge search", subtitle: "Wasting hours hunting through scattered docs" },
];

const ProblemSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#050510] relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-red-400/90 mb-4 block">
              The Operational Bottleneck
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-[1.1]">
              Your team shouldn't be the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-300">
                integration layer.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed">
              Every growing business accumulates repetitive work. Data gets copied between systems. Leads are researched manually. Reports are assembled by hand. Employees search through documents for answers. Follow-ups get forgotten.
            </p>
          </motion.div>
        </div>

        {/* 10-Item Grid of Manual Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {manualTasks.map((task, index) => {
            const Icon = task.icon;
            return (
              <motion.div
                key={task.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-red-300 transition-colors">
                    {task.title}
                  </h3>
                  <p className="text-xs text-white/40 leading-normal">
                    {task.subtitle}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-semibold text-red-400/80">
                  <XCircle className="w-3.5 h-3.5" />
                  <span>Manual Overhead</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Solution Banner Anchor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-purple-900/30 border border-blue-500/30 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
                Blukaze turns these processes into automated systems.
              </h3>
              <p className="text-sm text-white/60">
                Replace friction with deterministic, hands-free production workflows.
              </p>
            </div>
            <a
              href="#before-after"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all whitespace-nowrap shadow-lg shadow-blue-600/30"
            >
              See The Transformation
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
