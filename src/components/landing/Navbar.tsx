import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [{
    name: "Features",
    href: "#services"
  }, {
    name: "Process",
    href: "#process"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img src={logo} alt="Blunicorn" className="h-10 w-auto rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
            <span className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary font-sans">Blunicorn</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                {link.name}
              </a>)}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300">
              Login
            </a>
            <Button variant="default" size="sm" className="rounded-full px-5 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden mt-4 pb-4 border-t border-border/30 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <a key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300" onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>)}
              <div className="flex flex-col gap-3 mt-2">
                <a href="#" className="text-sm text-muted-foreground">
                  Login
                </a>
                <Button variant="default" size="sm" className="rounded-full">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;