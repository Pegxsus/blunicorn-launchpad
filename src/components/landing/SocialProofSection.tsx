import { CheckCircle, Users, Clock } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const stats = [
  {
    icon: CheckCircle,
    value: "50+",
    label: "Automations Delivered",
    description: "Production-ready workflows powering real businesses.",
  },
  {
    icon: Users,
    value: "30+",
    label: "Happy Clients",
    description: "Businesses trust Blukaze to automate their operations.",
  },
  {
    icon: Clock,
    value: "10,000+",
    label: "Hours Saved",
    description: "Time given back to teams through intelligent automation.",
  },
];

const SocialProofSection = () => {
  const { ref, isRevealed } = useScrollReveal(0.1);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-10" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <p className={`text-center text-muted-foreground text-sm mb-12 scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          Trusted by businesses ready to scale with AI automation
        </p>

        <div className={`grid md:grid-cols-3 gap-4 max-w-4xl mx-auto scroll-reveal delay-200 ${isRevealed ? 'revealed' : ''}`}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-start gap-4 p-6 rounded-2xl border border-border/40 bg-gradient-to-br from-primary/5 to-card/60"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-bold text-lg">{stat.value} {stat.label}</p>
                <p className="text-muted-foreground text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
