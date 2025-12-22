import { Search, Lightbulb, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "We dive deep into understanding your business, challenges, and goals to identify automation opportunities.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy",
    description: "Our experts design a tailored AI solution roadmap that aligns with your objectives and budget.",
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description: "We build and integrate your custom AI automation solution with precision and care.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Scale",
    description: "Deploy your solution and continuously optimize for maximum impact and ROI.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-pink/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven process that delivers results. From initial concept to 
            full-scale deployment, we're with you every step of the way.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="text-center group">
                {/* Number Badge */}
                <div className="text-6xl font-bold gradient-text opacity-30 mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-gradient-purple via-gradient-blue to-gradient-pink flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
