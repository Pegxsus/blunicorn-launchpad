import { Bot, Settings, Rocket, ArrowRight, Check } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const steps = [
  {
    icon: Bot,
    number: "1",
    title: "Discovery",
    description: "We analyze your workflows and identify the best automation opportunities for your business.",
    checks: ["Audit existing processes", "Identify quick wins"],
    iconColor: "text-red-400",
    iconBg: "bg-red-500/10 border-red-500/15",
  },
  {
    icon: Settings,
    number: "2",
    title: "Build & Customize",
    description: "Our experts design and build custom AI solutions tailored to your specific needs.",
    checks: ["Custom n8n workflows", "AI agent integration"],
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-500/10 border-yellow-500/15",
  },
  {
    icon: Rocket,
    number: "3",
    title: "Launch & Iterate",
    description: "Deploy your automation and watch your business efficiency soar to new heights.",
    checks: ["Go live in days", "Ongoing optimization"],
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10 border-green-500/15",
  },
];

const ProcessSection = () => {
  const { ref, isRevealed } = useScrollReveal(0.1);

  return (
    <section id="process" className="py-28 relative overflow-hidden">
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center mb-16 scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-4">How we work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 tracking-tight leading-tight">
            Design. Build. Repeat.
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            The same fast feedback loops that make great engineering — applied to your automation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`group relative scroll-reveal delay-${(index + 1) * 100} ${isRevealed ? 'revealed' : ''}`}
            >
              <div className="p-7 rounded-2xl border border-border/40 bg-card/40 hover:border-primary/30 hover:bg-card/60 transition-all duration-300">
                <span className="text-5xl font-bold text-muted-foreground/40 group-hover:text-muted-foreground/60 transition-colors duration-300 block mb-4">{step.number}</span>
                
                <div className={`w-10 h-10 rounded-lg ${step.iconBg} border flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300`}>
                  <step.icon className={`w-5 h-5 ${step.iconColor}`} />
                </div>

                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                <div className="space-y-2">
                  {step.checks.map((check) => (
                    <div key={check} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{check}</span>
                    </div>
                  ))}
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-border" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
