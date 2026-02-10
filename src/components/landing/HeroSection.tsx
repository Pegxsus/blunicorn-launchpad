import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Bot, Database, Mail, FileText, BarChart3 } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import BookCallDialog from "./BookCallDialog";

const WorkflowNode = ({ icon: Icon, label, className = "", delay = "0s" }: { icon: any; label: string; className?: string; delay?: string }) => (
  <div 
    className={`flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card/80 backdrop-blur-sm shadow-lg shadow-black/10 ${className}`}
    style={{ animation: `float 6s ease-in-out infinite`, animationDelay: delay }}
  >
    <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
      <Icon className="w-4 h-4 text-primary" />
    </div>
    <span className="text-sm font-medium text-foreground/80">{label}</span>
  </div>
);

const HeroSection = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const { ref, isRevealed } = useScrollReveal(0.1);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      
      {/* Warm radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />
      
      {/* Section Fade */}
      <div className="section-fade-bottom" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="pill-badge">
                <Zap className="w-3.5 h-3.5" />
                <span>AI-Powered Automation Agency</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 tracking-tight">
              Automate your
              <br />
              <span className="gradient-text">business workflows</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              We build high-impact AI automations that save time, reduce errors, 
              and scale with your business. Powered by n8n.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <Button 
                size="lg" 
                className="rounded-full px-8 text-base group"
                onClick={() => setIsBookCallOpen(true)}
              >
                Book a Discovery Call
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href="#services">
                <Button variant="outline" size="lg" className="rounded-full px-8 text-base border-border hover:border-primary/40">
                  See What We Do
                </Button>
              </a>
            </div>

            {/* Workflow visualization */}
            <div className="relative max-w-3xl mx-auto h-48 hidden md:block">
              {/* Connector lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 700 180" fill="none">
                <path d="M120 40 Q 200 40 250 90" stroke="hsl(var(--primary) / 0.25)" strokeWidth="2" strokeDasharray="6 4" />
                <path d="M250 90 Q 300 140 350 90" stroke="hsl(var(--primary) / 0.25)" strokeWidth="2" strokeDasharray="6 4" />
                <path d="M350 90 Q 400 40 450 90" stroke="hsl(var(--primary) / 0.25)" strokeWidth="2" strokeDasharray="6 4" />
                <path d="M450 90 Q 500 140 580 140" stroke="hsl(var(--primary) / 0.25)" strokeWidth="2" strokeDasharray="6 4" />
              </svg>
              
              <WorkflowNode icon={Mail} label="Trigger" className="absolute top-2 left-4" delay="0s" />
              <WorkflowNode icon={Bot} label="AI Agent" className="absolute top-16 left-[30%]" delay="1s" />
              <WorkflowNode icon={Database} label="Database" className="absolute top-8 left-[50%]" delay="2s" />
              <WorkflowNode icon={FileText} label="Generate" className="absolute top-20 left-[65%]" delay="1.5s" />
              <WorkflowNode icon={BarChart3} label="Report" className="absolute top-28 right-4" delay="0.5s" />
            </div>
          </div>
        </div>
      </div>

      <BookCallDialog open={isBookCallOpen} onOpenChange={setIsBookCallOpen} />
    </section>
  );
};

export default HeroSection;
