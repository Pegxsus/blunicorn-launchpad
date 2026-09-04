import { useState, useRef } from "react";
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useMotionValueEvent, 
  useTransform 
} from "framer-motion";
import { 
  MessageSquare, 
  CheckSquare, 
  Clock, 
  CreditCard 
} from "lucide-react";

const features = [
  {
    id: "timeline",
    title: "Project Timeline",
    description: "View the exact phases of your project from discovery to deployment, with clear success criteria for every step.",
    icon: Clock,
    image: "/dashboard/rag-overview.png",
  },
  {
    id: "deliverables",
    title: "Instant Deliverables",
    description: "Access your setup videos, documentation, and configuration files directly from a centralized deliverables hub.",
    icon: CheckSquare,
    image: "/dashboard/deliverables.png",
  },
  {
    id: "feedback",
    title: "Direct Feedback Chat",
    description: "Discuss revisions, ask questions, and collaborate directly with our team using the built-in communication interface.",
    icon: MessageSquare,
    image: "/dashboard/feedback.png",
  },
  {
    id: "payments",
    title: "Invoices & Payments",
    description: "Easily manage your project milestones, view detailed invoices, and handle payments securely in one place.",
    icon: CreditCard,
    image: "/dashboard/payments.png",
  }
];

const DashboardSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Bind scroll progress to container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate active card index based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalSteps = features.length;
    // Map 0 -> 1 to index 0 -> 3
    const calculatedIndex = Math.min(
      totalSteps - 1,
      Math.max(0, Math.floor(latest * totalSteps))
    );
    if (calculatedIndex !== activeIndex) {
      setActiveIndex(calculatedIndex);
    }
  });

  // Smooth height progress bar for active card
  const progressHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    if (containerRef.current) {
      const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
      const totalScrollableHeight = containerRef.current.offsetHeight - window.innerHeight;
      const targetScroll = containerTop + (index / (features.length - 1)) * totalScrollableHeight;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  const activeFeature = features[activeIndex];

  return (
    <section 
      ref={containerRef} 
      className="relative h-[240vh] bg-background border-b border-white/5"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 min-h-screen flex flex-col justify-center py-12 md:py-20 overflow-hidden">
        
        {/* Background Ambient Glows */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute right-0 bottom-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-400 mb-3 block">
              Client Experience
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white tracking-tight">
              What working with Blukaze looks like.
            </h2>
            <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto">
              Experience complete transparency through your Personal Launchpad — track deliverables, discuss feedback, view timelines, and manage invoices in one centralized dashboard.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-stretch">
            
            {/* Left Column: Cards List with Smooth Scroll Indicator */}
            <div className="w-full lg:w-5/12 flex flex-col gap-3 relative">
              
              {/* Overall Scroll Track Accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/5 rounded-full overflow-hidden hidden lg:block">
                <motion.div 
                  className="w-full bg-blue-500 rounded-full" 
                  style={{ height: progressHeight }} 
                />
              </div>

              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeIndex === index;

                return (
                  <button
                    key={feature.id}
                    onClick={() => handleCardClick(index)}
                    className={`relative p-5 sm:p-6 rounded-2xl text-left transition-all duration-500 border ${
                      isActive 
                        ? "bg-white/[0.05] border-blue-500/40 shadow-[0_0_30px_rgba(37,99,235,0.15)] scale-[1.02]" 
                        : "bg-white/[0.01] border-white/5 hover:bg-white/[0.03] opacity-60 hover:opacity-90"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? "bg-blue-600/20 text-blue-400 border border-blue-500/30" 
                          : "bg-white/5 text-white/50 border border-white/5"
                      }`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h3 className={`text-base sm:text-lg font-bold mb-1 transition-colors ${
                          isActive ? "text-white" : "text-white/70"
                        }`}>
                          {feature.title}
                        </h3>
                        <p className={`text-xs sm:text-sm leading-relaxed transition-colors ${
                          isActive ? "text-white/70" : "text-white/40"
                        }`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Active Left Border Highlight */}
                    {isActive && (
                      <motion.div 
                        layoutId="active-card-indicator"
                        className="absolute inset-y-0 left-0 w-1 bg-blue-500 rounded-l-2xl shadow-[0_0_12px_#3b82f6]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Column: Interactive Dashboard Mockup Screen */}
            <div className="w-full lg:w-7/12 relative min-h-[350px] sm:min-h-[450px] lg:min-h-[520px] flex items-center justify-center">
              <div className="w-full h-full bg-[#050510] rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col">
                
                {/* Window Header */}
                <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-[10px] font-mono text-white/30 ml-2">app.blukaze.com / launchpad</span>
                </div>
                
                {/* Dynamic Screen Transition */}
                <div className="relative w-full flex-1 bg-black/40 p-3 sm:p-4 flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFeature.id}
                      initial={{ opacity: 0, scale: 0.96, y: 12 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 1.04, y: -12 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <img 
                        src={activeFeature.image} 
                        alt={activeFeature.title} 
                        className="w-full h-full object-contain rounded-lg drop-shadow-2xl max-h-[460px]"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.querySelector('.fallback-placeholder')!.classList.remove('hidden');
                        }}
                      />

                      {/* Fallback Placeholder (if image not found) */}
                      <div className="fallback-placeholder hidden w-full h-full min-h-[300px] flex flex-col items-center justify-center text-center p-6 bg-white/[0.02] border border-dashed border-white/10 rounded-xl">
                        <activeFeature.icon className="w-14 h-14 text-blue-400 mb-3 opacity-60" />
                        <h4 className="text-base font-bold text-white mb-1">{activeFeature.title} Interface</h4>
                        <p className="text-xs text-white/50 max-w-sm">
                          Personal Launchpad UI view for <br/>
                          <code className="text-blue-400 font-mono">{activeFeature.image}</code>
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
