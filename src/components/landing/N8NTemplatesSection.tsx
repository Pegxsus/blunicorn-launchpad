import { Button } from "@/components/ui/button";
import { ArrowRight, Workflow, Sparkles, Zap } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import n8nLogo from "@/assets/n8n-logo.png";

const templates = [
  {
    icon: Workflow,
    title: "CRM Automation",
    description: "Sync leads, update contacts, and automate follow-ups across your sales stack.",
  },
  {
    icon: Sparkles,
    title: "AI Content Pipeline",
    description: "Generate, review, and publish content with AI-powered automation workflows.",
  },
  {
    icon: Zap,
    title: "Data Sync & ETL",
    description: "Connect databases, APIs, and spreadsheets with real-time data synchronization.",
  },
];

const N8NTemplatesSection = () => {
  const { ref, isRevealed } = useScrollReveal(0.1);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />
      
      <div className="absolute inset-0 dot-grid opacity-15" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center mb-6">
              <div className="pill-badge">
                <img src={n8nLogo} alt="n8n" className="h-4 w-4 rounded" />
                Free Templates
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Jumpstart with
              <br />
              <span className="gradient-text">ready-made templates</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Browse our collection of ready-to-use automation templates. Built by experts, customizable for your needs.
            </p>
          </div>

          {/* Templates Grid */}
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {templates.map((template, index) => (
              <div
                key={template.title}
                className={`scroll-reveal delay-${(index + 1) * 100} ${isRevealed ? 'revealed' : ''} group p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                  <template.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{template.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {template.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="https://n8n.io/creators/hellopaul/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="group rounded-full px-8 border-border hover:border-primary/40">
                Browse All Templates
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4">Powered by n8n — The workflow automation platform</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default N8NTemplatesSection;
