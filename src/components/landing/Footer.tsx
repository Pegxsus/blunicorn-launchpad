import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-14 relative border-t border-border/20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="flex flex-col gap-3">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Blukaze" className="h-8 w-auto rounded-lg" />
              <span className="text-lg font-bold text-foreground">Blukaze</span>
            </Link>
            <p className="text-muted-foreground text-sm">Automation with human touch.</p>
          </div>

          <div className="hidden md:block" />

          <div className="flex flex-col gap-3">
            <h4 className="text-foreground font-semibold text-sm">Company</h4>
            <Link to="/about" className="text-muted-foreground text-sm hover:text-foreground transition-colors">About Us</Link>
            <Link to="/contact" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-foreground font-semibold text-sm">Legal</h4>
            <Link to="/terms" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Privacy Policy</Link>
          </div>
        </div>

        <div className="border-t border-border/20 pt-6">
          <p className="text-muted-foreground text-sm">© {currentYear} Blukaze — Automation with human touch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
