import { Bot, Settings, Rocket } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const steps = [
  {
    icon: Bot,
    number: "01",
    title: "Discovery",
    description: "We analyze your workflows and identify the best automation opportunities for your business.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Customize",
    description: "Our experts design and build custom AI solutions tailored to your specific needs.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch",
    description: "Deploy your automation and watch your business efficiency soar to new heights.",
  },
];

const ProcessSection = () => {
  const { ref, isRevealed } = useScrollReveal(0.1);

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />
      
      <div className="absolute inset-0 dot-grid opacity-20" />

      {/* Warm glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-20 scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <div className="flex justify-center mb-6">
            <div className="pill-badge">
              <Settings className="w-3.5 h-3.5" />
              Process
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Three steps to
            <br />
            <span className="gradient-text">smarter automation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Turn your business processes into a seamless experience in just three simple steps.
          </p>
        </div>

        {/* Process Steps — Connected nodes */}
        <div className="relative max-w-4xl mx-auto">
          {/* Horizontal connection line (desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`group relative scroll-reveal delay-${(index + 1) * 100} ${isRevealed ? 'revealed' : ''} text-center`}
              >
                {/* Node dot */}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-card border-2 border-border mx-auto mb-6 flex items-center justify-center group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                  <step.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>

                {/* Step number */}
                <span className="text-xs font-semibold text-primary/60 tracking-widest uppercase mb-2 block">{step.number}</span>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
