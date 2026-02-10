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

  const navLinks = [
    { name: "Features", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "/contact", isPage: true },
  ];

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Blukaze" className="h-8 w-auto rounded-lg" />
            <span className="text-lg font-bold text-foreground">Blukaze</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link =>
              link.isPage ? (
                <Link key={link.name} to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  {link.name}
                </Link>
              ) : (
                <a key={link.name} href={link.href} onClick={(e) => handleAnchorClick(e, link.href)} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  {link.name}
                </a>
              )
            )}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://app.blukaze.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Sign in
            </a>
            <Button
              size="sm"
              className="rounded-full px-5"
              onClick={() => setIsBookCallOpen(true)}
            >
              Get Started
            </Button>
          </div>

          <BookCallDialog open={isBookCallOpen} onOpenChange={setIsBookCallOpen} />

          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="mt-4 pb-4 border-t border-border/30 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.isPage ? (
                  <Link key={link.name} to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
                    {link.name}
                  </Link>
                ) : (
                  <a key={link.name} href={link.href} onClick={(e) => { handleAnchorClick(e, link.href); setIsOpen(false); }} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                )
              )}
              <div className="flex flex-col gap-3 mt-2">
                <a href="https://app.blukaze.com" className="text-sm text-muted-foreground">Sign in</a>
                <Button size="sm" className="rounded-full" onClick={() => { setIsBookCallOpen(true); setIsOpen(false); }}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
