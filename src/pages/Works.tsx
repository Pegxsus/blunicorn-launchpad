import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Workflow, Search, Database, Share2, MessageSquare, Zap, TrendingUp, Sparkles } from "lucide-react";

import { Link } from "react-router-dom";
import { projects } from "@/data/works";
const Works = () => {
  return (
    <div className="min-h-screen bg-[#030308] text-foreground font-sans selection:bg-blue-500/30">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header Section */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">Works</span>
            </h1>
            <p className="text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-medium">
              Explore how we've transformed operations for businesses using intelligent automation and custom AI agents.
            </p>
          </motion.div>
        </div>

        {/* Grid Section */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link to={`/works/${project.slug}`} key={project.slug}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col bg-[#080812] rounded-2xl border border-white/5 hover:border-white/15 transition-all duration-300 overflow-hidden h-full cursor-pointer hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:-translate-y-1"
                >
                  {/* Abstract Image Area */}
                  <div className={`h-56 relative bg-gradient-to-br ${project.bg} border-b flex items-center justify-center overflow-hidden`}>
                    {/* Subtle Grid Overlay */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik00MCAwaC00MHY0MGg0MHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHYxSDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+CjxwYXRoIGQ9Ik0wIDB2NDBoMXYtNDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+Cjwvc3ZnPg==')] opacity-30" />
                    
                    {/* AI Badge */}
                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-xl">
                      <Sparkles size={12} className="text-blue-400" />
                      AI-POWERED
                    </div>

                    {/* Large Icon */}
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`relative z-10 p-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 shadow-2xl ${project.iconColor}`}
                    >
                      <project.icon size={48} strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">
                      {project.description}
                    </p>

                    {/* Footer Stats */}
                    <div className="flex items-center justify-between pt-5 border-t border-white/5 mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-sm bg-white/20" />
                        <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">{project.category}</span>
                      </div>
                      
                      <div className="flex items-center gap-1.5 text-green-400">
                        <TrendingUp size={14} strokeWidth={2.5} />
                        <span className="text-xs font-bold tracking-wide">{project.roi}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer showCTA={true} />
    </div>
  );
};

export default Works;
