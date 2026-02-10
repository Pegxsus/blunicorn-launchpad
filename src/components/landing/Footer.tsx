import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer className="py-16 relative border-t border-border/30">
      <div className="absolute inset-0 dot-grid opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img src={logo} alt="Blukaze" className="h-9 w-auto rounded-lg transition-transform duration-300 group-hover:scale-105" />
              <span className="text-lg font-bold group-hover:text-primary transition-colors">Blukaze</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Automate Smarter. Scale Faster.
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden md:block" />

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-foreground font-semibold text-sm">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-foreground font-semibold text-sm">Legal</h4>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/30 pt-8">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Blukaze. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
