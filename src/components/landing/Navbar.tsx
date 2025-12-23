import { useState } from "react";
import { Link } from "react-router-dom";
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
    href: "/contact",
    isPage: true
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Blunicorn" className="h-10 w-auto rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
            <span className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary font-sans">Blunicorn</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => 
              link.isPage ? (
                <Link key={link.name} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                  {link.name}
                </Link>
              ) : (
                <a key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/auth" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300">
              Login
            </Link>
            <a href="https://cal.com/hellopaul/discovery-call-with-paul" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm" className="rounded-full px-5 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                Book a Call
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden mt-4 pb-4 border-t border-border/30 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => 
                link.isPage ? (
                  <Link key={link.name} to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300" onClick={() => setIsOpen(false)}>
                    {link.name}
                  </Link>
                ) : (
                  <a key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300" onClick={() => setIsOpen(false)}>
                    {link.name}
                  </a>
                )
              )}
              <div className="flex flex-col gap-3 mt-2">
                <Link to="/auth" className="text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
                <a href="https://cal.com/hellopaul/discovery-call-with-paul" target="_blank" rel="noopener noreferrer">
                  <Button variant="default" size="sm" className="rounded-full">
                    Book a Call
                  </Button>
                </a>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;