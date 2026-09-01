import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Cpu, Megaphone, Headphones, Database, ChevronRight, CheckCircle } from "lucide-react";

const categories = [
  {
    id: "sales",
    title: "Sales",
    icon: TrendingUp,
    description: "Shorten lead response times from hours to seconds and fill sales calendars automatically.",
    color: "from-blue-500/20 to-blue-900/40 border-blue-500/30",
    badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    items: [
      { name: "Lead qualification", detail: "Instantly score inbound web leads against your Ideal Customer Profile." },
      { name: "Lead enrichment", detail: "Scrape LinkedIn, clearbit and company metadata automatically." },
      { name: "CRM automation", detail: "Sync contacts, update opportunity stages & log deal activity." },
      { name: "Outreach", detail: "Draft hyper-personalized email sequences powered by AI context." },
      { name: "Meeting booking", detail: "Negotiate calendar slots & schedule calls without back-and-forth." },
    ],
  },
  {
    id: "operations",
    title: "Operations",
    icon: Cpu,
    description: "Eliminate manual data entry and orchestrate internal approval flows effortlessly.",
    color: "from-purple-500/20 to-purple-900/40 border-purple-500/30",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    items: [
      { name: "Data entry", detail: "Parse incoming emails, spreadsheets and web forms into master DBs." },
      { name: "Reporting", detail: "Aggregate metrics across tools into automated daily/weekly dashboards." },
      { name: "Document processing", detail: "Extract key fields from PDFs, invoices, contracts and receipts." },
      { name: "Approvals", detail: "Route requests via Slack or Teams with instant approval buttons." },
      { name: "Notifications", detail: "Send real-time alerts when threshold metrics or anomalies occur." },
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    icon: Megaphone,
    description: "Scale content generation, competitor research, and publishing workflows.",
    color: "from-indigo-500/20 to-indigo-900/40 border-indigo-500/30",
    badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    items: [
      { name: "Content workflows", detail: "Generate, review, format, and stage blog posts & newsletters." },
      { name: "Research", detail: "Track competitor site changes, pricing updates and market news." },
      { name: "SEO workflows", detail: "Automate keyword research, SERP scraping, and cluster analysis." },
      { name: "Publishing", detail: "Multi-channel distribution across CMS, social media & email tools." },
      { name: "Campaign automation", detail: "Sync leads from Facebook/LinkedIn Ads directly into nurture drips." },
    ],
  },
  {
    id: "support",
    title: "Customer Support",
    icon: Headphones,
    description: "Provide 24/7 instant AI support while reducing support ticket volume.",
    color: "from-emerald-500/20 to-emerald-900/40 border-emerald-500/30",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    items: [
      { name: "Ticket classification", detail: "Categorize and prioritize incoming tickets based on urgency and topic." },
      { name: "Knowledge retrieval", detail: "Search company knowledge bases to draft accurate answers instantly." },
      { name: "AI responses", detail: "Deploy empathetic, context-aware bots on WhatsApp, Slack or Web." },
      { name: "Escalation", detail: "Detect customer sentiment and hand off complex cases to humans." },
    ],
  },
  {
    id: "data",
    title: "Data & Engineering",
    icon: Database,
    description: "Connect disparate software, sync databases in real-time, and expose APIs.",
    color: "from-cyan-500/20 to-cyan-900/40 border-cyan-500/30",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    items: [
      { name: "ETL", detail: "Extract, transform and load data across SaaS tools and data warehouses." },
      { name: "Data synchronization", detail: "Bi-directional sync between CRMs, ERPs, BigCommerce & Airtable." },
      { name: "API integrations", detail: "Build custom webhooks and machine-readable REST endpoints." },
      { name: "Database workflows", detail: "Automate backup checks, indexing, schema sync & maintenance." },
    ],
  },
];

const WhatWeAutomateSection = () => {
  const [activeId, setActiveId] = useState(categories[0].id);
  const activeCategory = categories.find((c) => c.id === activeId) || categories[0];

  return (
    <section id="what-we-automate" className="py-24 md:py-32 bg-[#050510] relative overflow-hidden border-b border-white/5">
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
              Capabilities Overview
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              What can we automate?
            </h2>
            <p className="text-base text-white/50">
              We design and deploy custom automation across every core business department.
            </p>
          </motion.div>
        </div>

        {/* Department Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-white/10 text-white border border-white/20 shadow-lg scale-105"
                    : "bg-white/[0.02] text-white/50 border border-white/5 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                <Icon size={16} className={isActive ? "text-blue-400" : "text-white/40"} />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className={`p-8 md:p-12 rounded-3xl bg-gradient-to-br ${activeCategory.color} border shadow-2xl`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
                <div>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${activeCategory.badgeColor} mb-2`}>
                    <activeCategory.icon size={14} />
                    {activeCategory.title} Automation
                  </span>
                  <p className="text-base text-white/80 font-medium">
                    {activeCategory.description}
                  </p>
                </div>
              </div>

              {/* Items List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeCategory.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-white/20 transition-all flex items-start gap-3.5"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{item.name}</h4>
                      <p className="text-xs text-white/50 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WhatWeAutomateSection;
