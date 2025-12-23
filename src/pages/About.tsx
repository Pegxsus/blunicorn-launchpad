import { Zap, Target, Users, Lightbulb } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 grid-background opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              We've been quietly building{" "}
              <span className="text-primary">intelligent automation</span>{" "}
              solutions.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              We help businesses transform their operations through cutting-edge AI and automation, 
              without the complexity of traditional implementations.
            </p>
          </div>
        </div>
      </section>

      {/* The Breakthrough Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-primary">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">The Breakthrough</span>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We started with a vision to democratize automation. Since then, we've had a 
                breakthrough in our approach that made our solutions{" "}
                <span className="text-foreground font-medium">faster to implement and more reliable</span>{" "}
                than traditional enterprise tools.
              </p>
            </div>

            {/* Right Content - Roadmap Card */}
            <div className="glass-card p-8 rounded-2xl">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-6">
                Our Journey
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-1.5" />
                  <div>
                    <p className="font-semibold text-foreground">Founded</p>
                    <p className="text-sm text-muted-foreground">2023</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Started with a mission to simplify AI automation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-1.5" />
                  <div>
                    <p className="font-semibold text-foreground">Growing</p>
                    <p className="text-sm text-muted-foreground">2024</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Expanding our services and client base.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 grid-background opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What We Stand For</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-colors duration-300">
              <Target className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Precision</h3>
              <p className="text-muted-foreground">
                Every solution is tailored to your specific needs, ensuring maximum impact and efficiency.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-colors duration-300">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Partnership</h3>
              <p className="text-muted-foreground">
                We work alongside you as partners, not just vendors. Your success is our success.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-colors duration-300">
              <Lightbulb className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We stay ahead of the curve, constantly exploring new technologies to bring you the best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="glass-card p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how we can help you leverage AI and automation to achieve your goals.
            </p>
            <a 
              href="https://cal.com/hellopaul/discovery-call-with-paul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Book a Call
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
