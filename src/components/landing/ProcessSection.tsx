import { Bot, Settings, Rocket, Check } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const steps = [
  {
    icon: Bot,
    number: "01",
    title: "Discovery",
    description: "We analyze your requirements and identify the best automation opportunities for your business.",
    checks: ["Audit existing processes", "Identify quick wins"],
    accentColor: "text-red-400",
    accentBorder: "border-red-500/30",
    accentBg: "bg-red-500/10",
    glowColor: "from-red-500/10",
  },
  {
    icon: Settings,
    number: "02",
    title: "Build & Customize",
    description: "Our experts design and build custom AI solutions tailored to your specific needs.",
    checks: ["Custom n8n workflows", "AI agent integration"],
    accentColor: "text-yellow-400",
    accentBorder: "border-yellow-500/30",
    accentBg: "bg-yellow-500/10",
    glowColor: "from-yellow-500/10",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch & Iterate",
    description: "Go live in days with our client dashboard managing delivery, feedback, and iterations all in one place.",
    checks: ["End-to-end visibility", "Real-time feedback loop"],
    accentColor: "text-green-400",
    accentBorder: "border-green-500/30",
    accentBg: "bg-green-500/10",
    glowColor: "from-green-500/10",
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
        <div className={`max-w-2xl mx-auto text-center mb-20 scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 tracking-tight leading-tight">
            Get started in 3 simple steps.
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            The same fast feedback loops that make great engineering applied to your automation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`group relative scroll-reveal delay-${(index + 1) * 100} ${isRevealed ? 'revealed' : ''}`}
            >
              <div className={`relative p-8 h-full flex flex-col text-center items-center ${index < steps.length - 1 ? 'md:border-r md:border-border/30' : ''}`}>
                {/* Step number label */}
                <span className={`text-sm font-bold ${step.accentColor} tracking-widest uppercase self-start mb-10`}>
                  {step.number}
                </span>

                {/* Icon illustration */}
                <div className={`relative w-24 h-24 rounded-2xl ${step.accentBg} ${step.accentBorder} border flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500`}>
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${step.glowColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <step.icon className={`w-10 h-10 ${step.accentColor} relative z-10`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 tracking-tight">{step.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-[260px]">
                  {step.description}
                </p>

                {/* Checks */}
                <div className="space-y-2.5 mt-auto">
                  {step.checks.map((check) => (
                    <div key={check} className="flex items-center gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{check}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
