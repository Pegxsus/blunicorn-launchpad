import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-start gap-8 mb-12">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Blunicorn" 
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" 
            />
            <span className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary">Blunicorn</span>
          </a>
          
          <p className="text-muted-foreground text-sm max-w-xs">
            Blunicorn – Elevate Intelligence, Unleash Potential.
          </p>

          {/* Heart Icon */}
          <Heart className="w-4 h-4 text-primary transition-transform duration-300 hover:scale-125 hover:animate-pulse cursor-pointer" fill="currentColor" />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Blunicorn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;