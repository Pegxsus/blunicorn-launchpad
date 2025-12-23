import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import BookCallDialog from "./BookCallDialog";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
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

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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
                <a key={link.name} href={link.href} onClick={(e) => handleAnchorClick(e, link.href)} className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
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
            <Button 
              variant="default" 
              size="sm" 
              className="rounded-full px-5 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              onClick={() => setIsBookCallOpen(true)}
            >
              Book a Call
            </Button>
          </div>

          <BookCallDialog open={isBookCallOpen} onOpenChange={setIsBookCallOpen} />

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-4 pb-4 border-t border-border/30 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => 
                link.isPage ? (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
                    style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={(e) => { handleAnchorClick(e, link.href); setIsOpen(false); }} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
                    style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
                  >
                    {link.name}
                  </a>
                )
              )}
              <div className="flex flex-col gap-3 mt-2">
                <Link 
                  to="/auth" 
                  className="text-sm text-muted-foreground transition-all duration-300" 
                  style={{ transitionDelay: isOpen ? '150ms' : '0ms' }}
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="rounded-full transition-all duration-300"
                  style={{ transitionDelay: isOpen ? '200ms' : '0ms' }}
                  onClick={() => { setIsBookCallOpen(true); setIsOpen(false); }}
                >
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;