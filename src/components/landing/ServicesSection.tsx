import { Zap, MessageSquare, Search, TrendingUp, DollarSign, Shield } from "lucide-react";

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
  return (
    <section id="services" className="py-32 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-50" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex justify-center mb-8">
            <div className="pill-badge">
              Features
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
            Discover our powerful
            <br />
            features
          </h2>
          <p className="text-lg text-muted-foreground">
            Blunicorn delivers cutting-edge AI solutions with powerful, 
            easy-to-use features.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-5xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="group">
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center mb-5 group-hover:border-primary/50 transition-colors">
                <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold mb-2">{service.title}</h3>
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