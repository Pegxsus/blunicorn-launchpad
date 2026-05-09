import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "@/data/works";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, CheckCircle2, ChevronRight, Clock, ShieldCheck, Zap } from "lucide-react";

const WorkDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030308] text-foreground font-sans flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-white font-bold mb-4">Project Not Found</h1>
          <Link to="/works" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 justify-center">
            <ArrowLeft size={16} /> Back to Works
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030308] text-foreground font-sans selection:bg-blue-500/30">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header Section */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 mb-16 max-w-5xl">
          <Link to="/works" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 text-sm font-medium">
            <ArrowLeft size={16} /> Back to all projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {project.category}
              </span>
              <span className="text-white/40 text-sm flex items-center gap-1.5">
                <Clock size={14} /> Case Study
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-8">
              {project.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light mb-12 border-l-2 border-blue-500 pl-6">
              {project.description}
            </p>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
              {project.metrics.map((metric, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex flex-col justify-center items-start">
                  <p className="text-white/40 text-sm mb-1 uppercase tracking-wider font-semibold">{metric.label}</p>
                  <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">{metric.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl relative z-10">
          <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-400 prose-p:text-white/70 prose-p:leading-relaxed">
            
            {/* Problem Statement */}
            <h2 className="text-3xl text-white mt-16 mb-6">{project.problemStatement.title}</h2>
            {project.problemStatement.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {/* Solution */}
            <h2 className="text-3xl text-white mt-16 mb-6">{project.solution.title}</h2>
            {project.solution.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {/* Steps */}
            <div className="my-12 bg-blue-900/10 border border-blue-500/20 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl text-white mb-8 font-semibold">The Automated Flow</h3>
              <div className="space-y-6">
                {project.steps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold border border-blue-500/30">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg text-white font-semibold m-0 mb-1">{step.title}</h4>
                      <p className="text-white/60 m-0 text-base">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features / Capabilities */}
            <h2 className="text-3xl text-white mt-16 mb-8">What This System Does That Manual Processes Can't</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {project.features.map((feature, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                  <h4 className="text-xl text-white font-semibold flex items-center gap-2 mb-3 m-0">
                    <Zap size={20} className="text-blue-400" />
                    {feature.title}
                  </h4>
                  <p className="text-white/60 text-base m-0 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Before vs After */}
            <h2 className="text-3xl text-white mt-16 mb-8">Before vs. After: What Changes</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-red-950/20 border border-red-500/20 p-8 rounded-3xl">
                <h4 className="text-red-400 font-bold mb-4 m-0 uppercase tracking-wider text-sm flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400" /> Before
                </h4>
                <p className="text-white/70 m-0 text-base">{project.beforeVsAfter.before}</p>
              </div>
              <div className="bg-green-950/20 border border-green-500/20 p-8 rounded-3xl">
                <h4 className="text-green-400 font-bold mb-4 m-0 uppercase tracking-wider text-sm flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" /> After
                </h4>
                <p className="text-white/70 m-0 text-base">{project.beforeVsAfter.after}</p>
              </div>
            </div>

            {/* Implementation Details */}
            <h2 className="text-3xl text-white mt-16 mb-6">{project.implementation.title}</h2>
            <ul className="space-y-3 list-none pl-0">
              {project.implementation.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <CheckCircle2 size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>

          </article>
        </div>
        
        {/* Call to Action for the specific project */}
        <div className="container mx-auto px-6 lg:px-12 mt-24 max-w-4xl relative z-10">
          <div className="bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 rounded-3xl p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to eliminate your manual bottlenecks?</h2>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              Let's build a custom {project.category.toLowerCase()} solution that perfectly aligns with your operations and scales your output.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-blue-50 transition-colors"
            >
              Get a Free Consultation <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>

      </main>

      <Footer showCTA={false} />
    </div>
  );
};

export default WorkDetail;
