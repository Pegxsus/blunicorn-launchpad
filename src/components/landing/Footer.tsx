import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "#contact" },
  ];

  const legalLinks = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer className="py-16 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-3 group">
              <img 
                src={logo} 
                alt="Blunicorn" 
                className="h-10 w-auto rounded-lg transition-transform duration-300 group-hover:scale-110" 
              />
              <span className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary">Blunicorn</span>
            </a>
            
            <p className="text-muted-foreground text-sm max-w-xs">
              Blunicorn – Elevate Intelligence, Unleash Potential.
            </p>

            {/* Heart Icon */}
            <Heart className="w-4 h-4 text-primary transition-transform duration-300 hover:scale-125 hover:animate-pulse cursor-pointer" fill="currentColor" />
          </div>

          {/* Spacer for larger screens */}
          <div className="hidden md:block" />

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-foreground font-semibold">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/") ? (
                    <Link 
                      to={link.href}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-foreground font-semibold">Legal</h4>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
