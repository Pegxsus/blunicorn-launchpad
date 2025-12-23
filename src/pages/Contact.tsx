import { Mail } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Contact Section */}
      <section className="flex-1 flex items-center justify-center py-40 relative">
        <div className="absolute inset-0 grid-background opacity-10" />
        
        <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Mail Icon */}
            <div className="w-16 h-16 rounded-full bg-muted/50 border border-border flex items-center justify-center mb-8 opacity-0 animate-[fade-in_0.6s_ease-out_forwards]">
              <Mail className="w-7 h-7 text-muted-foreground" />
            </div>
            
            {/* Email Address */}
            <a 
              href="mailto:hello@blunicorn.org"
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground hover:text-primary transition-colors duration-300 opacity-0 animate-[fade-in_0.6s_ease-out_0.2s_forwards]"
            >
              hello@blunicorn.org
            </a>
            
            {/* Response Time */}
            <p className="text-muted-foreground mt-6 tracking-wide opacity-0 animate-[fade-in_0.6s_ease-out_0.4s_forwards]">
              we'll respond to your queries within 24 hours.
            </p>
            
            {/* Subtle Divider */}
            <div className="w-24 h-px bg-border mt-8 opacity-0 animate-[fade-in_0.6s_ease-out_0.6s_forwards]" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
