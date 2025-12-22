import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-start gap-8 mb-12">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">B</span>
            </div>
          </a>
          
          <p className="text-muted-foreground text-sm max-w-xs">
            Blunicorn – Elevate Intelligence, Unleash Potential.
          </p>

          {/* Heart Icon */}
          <Heart className="w-4 h-4 text-primary" fill="currentColor" />
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