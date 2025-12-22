import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-purple/20 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-blue/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-pink/10 rounded-full blur-[180px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <div className="gradient-border rounded-3xl p-12 md:p-16 text-center">
            {/* Icon */}
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-gradient-purple via-gradient-blue to-gradient-pink flex items-center justify-center mb-8 shadow-2xl shadow-primary/40">
              <Mail className="w-10 h-10 text-primary-foreground" />
            </div>

            {/* Content */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Automate</span> Your Future?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Let's discuss how AI automation can transform your business. 
              Book a free consultation with our experts today.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gradient" size="xl" className="group">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                hello@blunicorn.ai
              </Button>
            </div>

            {/* Trust Badge */}
            <p className="text-sm text-muted-foreground mt-8">
              ✓ No commitment required · ✓ Free AI audit · ✓ Response within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
