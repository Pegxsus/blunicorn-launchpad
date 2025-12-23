import { Button } from "@/components/ui/button";
import { ArrowRight, Workflow, Sparkles, Zap } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
const templates = [{
  icon: Workflow,
  title: "CRM Automation",
  description: "Sync leads, update contacts, and automate follow-ups across your sales stack."
}, {
  icon: Sparkles,
  title: "AI Content Pipeline",
  description: "Generate, review, and publish content with AI-powered automation workflows."
}, {
  icon: Zap,
  title: "Data Sync & ETL",
  description: "Connect databases, APIs, and spreadsheets with real-time data synchronization."
}];
const N8NTemplatesSection = () => {
  const {
    ref,
    isRevealed
  } = useScrollReveal(0.1);
  return <section className="py-32 relative overflow-hidden">
      {/* Section Fades */}
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />
      
      {/* Animated Gradient Orbs */}
      <div className="gradient-orb gradient-orb-2" />
      
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center mb-8">
              <div className="pill-badge animate-gradient bg-gradient-to-r from-[hsl(var(--gradient-purple)/0.3)] via-[hsl(var(--gradient-blue)/0.3)] to-[hsl(var(--gradient-pink)/0.3)] bg-[length:200%_200%] backdrop-blur-sm border border-border/30">
                <span className="text-foreground font-medium">Free Templates</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
              Jumpstart with
              <br />
              <span className="gradient-text">N8N Templates</span>
            </h2>
            <p className="text-lg text-muted-foreground">Browse our collection of ready-to-use automation templates. Built by experts, customizable for your needs.</p>
          </div>

          {/* Templates Preview */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {templates.map((template, index) => <div key={template.title} className={`scroll-reveal delay-${(index + 1) * 100} ${isRevealed ? 'revealed' : ''} group p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 cursor-pointer`}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--gradient-purple)/0.2)] to-[hsl(var(--gradient-blue)/0.2)] border border-border flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                  <template.icon className="w-5 h-5 text-primary group-hover:animate-pulse" />
                </div>
                <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{template.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {template.description}
                </p>
              </div>)}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="https://n8n.io/creators/hellopaul/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="group border-primary/50 hover:border-primary hover:bg-primary/10">
                Browse All Free Templates
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4">Powered by N8N - The workflow automation platform</p>
          </div>
        </div>
      </div>
    </section>;
};
export default N8NTemplatesSection;