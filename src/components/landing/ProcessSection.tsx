import { Bot, Settings, Rocket } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const steps = [
  {
    icon: Bot,
    title: "Discovery",
    description: "We analyze your workflows and identify the best automation opportunities for your business.",
  },
  {
    icon: Settings,
    title: "Customize",
    description: "Our experts design and build custom AI solutions tailored to your specific needs.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Deploy your automation and watch your business efficiency soar to new heights.",
  },
];

const ProcessSection = () => {
  const { ref, isRevealed } = useScrollReveal(0.1);

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      {/* Animated Gradient Orb */}
      <div className="gradient-orb gradient-orb-3" style={{ bottom: '10%', right: '10%' }} />

      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-50" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-20 scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <div className="flex justify-center mb-8">
            <div className="pill-badge">
              The Process
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
            Three Steps to Smarter
            <br />
            <span className="gradient-text">Automation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Turn your business processes into a seamless experience in just
            three simple steps.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className={`relative p-8 scroll-reveal delay-${(index + 1) * 100} ${isRevealed ? 'revealed' : ''}`}
            >
              {/* Vertical divider */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl border border-border bg-card flex items-center justify-center mb-6 hover:scale-110 hover:border-primary/50 transition-all duration-300">
                <step.icon className="w-5 h-5 text-muted-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;