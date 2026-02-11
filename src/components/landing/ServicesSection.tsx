import { Zap, MessageSquare, Search, TrendingUp, DollarSign, Shield } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Streamline repetitive tasks and complex processes. Save time and eliminate human error with intelligent automation.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "Deploy conversational AI that understands context and delivers personalized customer experiences 24/7.",
  },
  {
    icon: Search,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights. Make data-driven decisions with AI-powered analysis.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Accommodate high volumes and diverse requirements. Our solutions grow with your business needs.",
  },
  {
    icon: DollarSign,
    title: "Cost Savings",
    description: "By automating processes, we reduce operational costs while increasing productivity and output quality.",
  },
  {
    icon: Shield,
    title: "Secure Solutions",
    description: "Enterprise-grade security and reliability. Your data stays safe with our robust infrastructure.",
  },
];

const ServicesSection = () => {
  const { ref, isRevealed } = useScrollReveal(0.1);

  return (
    <section id="services" className="py-16 relative overflow-hidden">
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="container mx-auto px-10 md:px-16 lg:px-20 relative z-10" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-12 scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-4">What we do</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 tracking-tight leading-tight">
            The fast way to actually
            <br />
            <span className="gradient-text">get AI working in your business</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Blukaze delivers cutting-edge AI solutions with powerful, easy-to-use features.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30 rounded-2xl overflow-hidden border border-border/40">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group scroll-reveal delay-${(index % 3 + 1) * 100} ${isRevealed ? 'revealed' : ''} p-7 bg-background hover:bg-card/80 transition-all duration-300 cursor-pointer`}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
