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
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />
      
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-20 scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <div className="flex justify-center mb-6">
            <div className="pill-badge">
              <Zap className="w-3.5 h-3.5" />
              Features
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Everything you need to
            <br />
            <span className="gradient-text">automate at scale</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Blukaze delivers cutting-edge AI solutions with powerful,
            easy-to-use features.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group scroll-reveal delay-${(index % 3 + 1) * 100} ${isRevealed ? 'revealed' : ''} p-6 rounded-2xl border border-transparent transition-all duration-300 hover:bg-card/60 hover:border-border hover:shadow-lg hover:shadow-primary/5 cursor-pointer`}
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Content */}
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
