import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart, 
  MessageSquare, 
  CheckSquare, 
  Clock, 
  CreditCard,
  ArrowRight
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
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -left-40 top-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-heading mb-6"
          >
            Your Personal <span className="magic-text">Launchpad</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Experience complete transparency and seamless collaboration through our proprietary client dashboard. Everything you need, right at your fingertips.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center lg:items-start">
          {/* Left Column: Feature List */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              const isActive = activeFeature === feature.id;
              
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`relative p-6 rounded-2xl text-left transition-all duration-300 border ${
                    isActive 
                      ? "bg-card border-primary/30 shadow-[0_0_30px_-10px_rgba(var(--primary),0.2)]" 
                      : "bg-transparent border-transparent hover:bg-card/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl transition-colors ${
                      isActive ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-semibold mb-2 transition-colors ${
                        isActive ? "text-foreground" : "text-foreground/70"
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm transition-colors ${
                        isActive ? "text-muted-foreground" : "text-muted-foreground/50"
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  {isActive && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="absolute inset-y-0 left-0 w-1 bg-primary rounded-l-2xl"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Interactive Image Viewer */}
          <div className="w-full lg:w-2/3 relative min-h-[400px] md:min-h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-card rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
              <div className="absolute top-0 inset-x-0 h-12 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              
              <div className="relative w-full h-[calc(100%-3rem)] mt-12 bg-background/50 flex items-center justify-center p-4">
                <AnimatePresence mode="wait">
                  {features.map((feature) => (
                    feature.id === activeFeature && (
                      <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.05, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full h-full flex flex-col items-center justify-center"
                      >
                        <img 
                          src={feature.image} 
                          alt={feature.title} 
                          className="w-full h-full object-contain rounded-lg drop-shadow-2xl"
                          onError={(e) => {
                            // Fallback to a styled placeholder if image not found
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.querySelector('.fallback-placeholder')!.classList.remove('hidden');
                          }}
                        />
                        {/* Fallback Placeholder (hidden by default) */}
                        <div className="fallback-placeholder hidden w-full h-full flex flex-col items-center justify-center text-center p-8 bg-muted/20 border border-dashed border-white/10 rounded-xl">
                          <feature.icon className="w-16 h-16 text-muted-foreground mb-4 opacity-50" />
                          <h4 className="text-lg font-medium text-muted-foreground mb-2">{feature.title} UI</h4>
                          <p className="text-sm text-muted-foreground/70 max-w-sm">
                            Please save the provided image as <br/>
                            <code className="text-primary">{feature.image}</code>
                          </p>
                        </div>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Decorative elements around the dashboard frame */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-[50px] -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-[50px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
