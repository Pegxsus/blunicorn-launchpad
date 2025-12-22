import { Bot, Workflow, Brain, Zap, LineChart, Shield } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots & Assistants",
    description: "Custom conversational AI that understands your business and engages customers 24/7.",
    gradient: "from-gradient-purple to-gradient-blue",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline operations by automating repetitive tasks and complex business processes.",
    gradient: "from-gradient-blue to-gradient-pink",
  },
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    description: "Predictive analytics and intelligent systems that learn and improve over time.",
    gradient: "from-gradient-pink to-gradient-purple",
  },
  {
    icon: Zap,
    title: "Integration Services",
    description: "Connect your existing tools and platforms with seamless AI-powered integrations.",
    gradient: "from-gradient-purple to-gradient-pink",
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced AI analysis.",
    gradient: "from-gradient-blue to-gradient-purple",
  },
  {
    icon: Shield,
    title: "AI Consulting",
    description: "Strategic guidance to identify and implement the right AI solutions for your needs.",
    gradient: "from-gradient-pink to-gradient-blue",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-purple/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-blue/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer comprehensive AI automation solutions tailored to transform 
            every aspect of your business operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-foreground transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
