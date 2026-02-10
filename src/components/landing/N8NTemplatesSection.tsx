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
    <section className="py-28 relative overflow-hidden">
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />
      <div className="absolute inset-0 dot-grid opacity-15" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <img src={n8nLogo} alt="n8n" className="h-5 w-5 rounded" />
              <p className="text-primary text-sm font-semibold tracking-wide uppercase">Templates</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 tracking-tight leading-tight">
              Jumpstart with
              <br />
              <span className="gradient-text">ready-made templates</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              Browse our collection of ready-to-use automation templates. Built by experts, customizable for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
            {templates.map((template, index) => (
              <div
                key={template.title}
                className={`scroll-reveal delay-${(index + 1) * 100} ${isRevealed ? 'revealed' : ''} group p-6 rounded-2xl border border-border/40 bg-card/40 hover:border-primary/30 hover:bg-card/60 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                  <template.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{template.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {template.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="https://n8n.io/creators/hellopaul/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="group rounded-full px-8 border-border/60 hover:border-primary/40 text-foreground/80">
                Browse All Templates
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default N8NTemplatesSection;
