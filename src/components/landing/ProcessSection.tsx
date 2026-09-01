import { Search, Compass, Cpu, Rocket, Check } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description: "We identify repetitive processes, bottlenecks and high-ROI automation opportunities across your operations.",
    checks: ["Identify time taxes", "Assess software stack"],
    accentColor: "text-blue-400",
    accentBorder: "border-blue-500/30",
    accentBg: "bg-blue-500/10",
  },
  {
    icon: Compass,
    number: "02",
    title: "Design",
    description: "We map the complete end-to-end workflow and determine where AI, APIs and automation provide maximum leverage.",
    checks: ["Workflow mapping", "AI model selection"],
    accentColor: "text-purple-400",
    accentBorder: "border-purple-500/30",
    accentBg: "bg-purple-500/10",
  },
  {
    icon: Cpu,
    number: "03",
    title: "Build",
    description: "We engineer the production workflow, API integrations, fallback logic, and supporting infrastructure.",
    checks: ["n8n / API development", "Type-safe error handling"],
    accentColor: "text-amber-400",
    accentBorder: "border-amber-500/30",
    accentBg: "bg-amber-500/10",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Deploy & Optimize",
    description: "We test, monitor, and continuously refine the system for reliable, long-term production execution.",
    checks: ["Live monitoring", "Iterative improvements"],
    accentColor: "text-emerald-400",
    accentBorder: "border-emerald-500/30",
    accentBg: "bg-emerald-500/10",
  },
];

const ProcessSection = () => {
  const { ref, isRevealed } = useScrollReveal(0.1);

  return (
    <section id="process" className="py-24 md:py-36 relative overflow-hidden border-b border-white/5 bg-[#050510]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center mb-16 md:mb-20 scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-400 mb-4 block">
            Implementation Methodology
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight text-white">
            From idea to production.
          </h2>
          <p className="text-white/50 text-base max-w-lg mx-auto">
            A battle-tested 4-step process designed to deliver reliable automation systems quickly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={`group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between scroll-reveal delay-${(index + 1) * 100} ${isRevealed ? 'revealed' : ''}`}
              >
                <div>
                  <span className={`text-xs font-black ${step.accentColor} tracking-widest uppercase block mb-6`}>
                    {step.number} — STEP
                  </span>

                  <div className={`w-14 h-14 rounded-2xl ${step.accentBg} ${step.accentBorder} border flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                    <Icon className={`w-7 h-7 ${step.accentColor}`} />
                  </div>

                  <h3 className="text-xl font-bold mb-3 tracking-tight text-white">{step.title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  {step.checks.map((check) => (
                    <div key={check} className="flex items-center gap-2 text-xs text-white/70">
                      <Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
