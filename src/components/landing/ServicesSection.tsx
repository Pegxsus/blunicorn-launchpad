import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Network, Zap, GitMerge, Globe, Server, LineChart } from "lucide-react";

import { Link } from "react-router-dom";

const services = [
  { number: "01", slug: "ai-automation", title: "n8n AI Automation", description: "Self-hosted, highly custom node-based automations linking your entire data stack seamlessly.", icon: Network, color: "blue" },
  { number: "02", slug: "ai-automation", title: "Zapier Automation", description: "Rapid, reliable workflow automation connecting thousands of popular business apps instantly.", icon: Zap, color: "purple" },
  { number: "03", slug: "ai-automation", title: "Make.com AI Workflows", description: "Visual, highly complex integration workflows that trigger intelligent AI agent processes.", icon: GitMerge, color: "blue" },
  { number: "04", slug: "web-scrapers", title: "Web Scrapers", description: "Custom scraping architecture to extract competitive intel, product data, and leads at scale.", icon: Globe, color: "purple" },
  { number: "05", slug: "backend-development", title: "Backend Development", description: "Robust server-side logic, custom API development, and secure database architecture.", icon: Server, color: "blue" },
  { number: "06", slug: "business-audit", title: "AI Audit in Business", description: "Comprehensive analysis of your operations to identify high-ROI automation and AI opportunities.", icon: LineChart, color: "purple" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-20 md:py-32 lg:py-48 bg-[#050510] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-700/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-6 lg:px-12" ref={headerRef}>
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 md:mb-24 border-b border-white/5 pb-10 md:pb-16">
          <div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={headerInView ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2.5rem,7vw,7rem)] font-black uppercase tracking-tighter leading-[0.9] text-white"
              >
                What We
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500">Build.</span>
              </motion.h2>
            </div>
          </div>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5" ref={ref}>
          {services.map((service, i) => (
            <Link to={`/services/${service.slug}`} key={service.number} className="block">
              <motion.div
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className={`group p-10 h-full relative overflow-hidden cursor-pointer transition-colors duration-500 bg-[#050510] ${
                  service.color === "blue" ? "hover:bg-[#0a0d17]" : "hover:bg-[#110e1b]"
                }`}
              >
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-16">
                    <span className="text-7xl font-black text-white/[0.03] tracking-tighter leading-none group-hover:text-white/[0.08] transition-colors">
                      {service.number}
                    </span>
                    <div className={`w-10 h-10 rounded-xl ${service.color === "blue" ? "bg-blue-500/10" : "bg-purple-500/10"} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                      <service.icon className={`w-5 h-5 ${service.color === "blue" ? "text-blue-400 group-hover:text-blue-300" : "text-purple-400 group-hover:text-purple-300"} transition-colors`} />
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all">{service.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{service.description}</p>
                  </div>

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 h-[1px] w-full transition-opacity duration-700 opacity-0 group-hover:opacity-100 bg-gradient-to-r ${service.color === "blue" ? "from-transparent via-blue-500 to-transparent" : "from-transparent via-purple-500 to-transparent"}`} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
