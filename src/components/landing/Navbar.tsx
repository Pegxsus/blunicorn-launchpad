import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import BookCallDialog from "./BookCallDialog";

const navLinks = [
  { name: "Solutions", href: "#solutions" },
  { name: "Industries", href: "#what-we-automate" },
  { name: "Case Studies", href: "/works", isPage: true },
  { name: "Templates", href: "#templates" },
  { name: "About", href: "/about", isPage: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed z-50 left-0 right-0 mx-auto transition-all duration-700 ease-in-out flex items-center ${
          isScrolled
            ? "top-4 w-[calc(100%-2rem)] max-w-6xl h-16 bg-[#050510]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
            : "top-0 w-full max-w-none h-20 bg-transparent border-b border-transparent rounded-none"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between w-full transition-all duration-700">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group relative z-50">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src={logo} alt="Blukaze" className="w-full h-full object-contain brightness-0 invert" />
            </div>
            <span className="text-2xl font-semibold tracking-tight text-white">Blukaze</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isPage ? (
                <Link key={link.name} to={link.href} className="text-sm font-semibold text-white/60 hover:text-white transition-colors">
                  {link.name}
                </Link>
              ) : (
                <a key={link.name} href={link.href} onClick={(e) => handleAnchorClick(e, link.href)} className="text-sm font-semibold text-white/60 hover:text-white transition-colors">
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="https://app.blukaze.com" className="text-sm font-bold text-white/60 hover:text-white transition-colors">
              Login
            </a>
            <Button
              onClick={() => setIsBookCallOpen(true)}
              className="rounded-full px-6 h-11 font-bold text-xs bg-blue-600 hover:bg-blue-500 hover:scale-[1.03] transition-all border-none shadow-lg shadow-blue-600/20"
            >
              Get Free Automation Audit
            </Button>
          </div>

          {/* Hamburger */}
          <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#050510] flex flex-col p-8 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="text-2xl font-semibold text-white">Blukaze</span>
              <button onClick={() => setIsOpen(false)} className="text-white p-2"><X size={28} /></button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                >
                  {link.isPage ? (
                    <Link to={link.href} className="text-3xl font-black text-white hover:text-blue-500 transition-colors" onClick={() => setIsOpen(false)}>
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-3xl font-black text-white hover:text-blue-500 transition-colors" onClick={(e) => { setIsOpen(false); handleAnchorClick(e, link.href); }}>
                      {link.name}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="mt-auto pt-10 space-y-4">
              <a 
                href="https://app.blukaze.com" 
                onClick={() => setIsOpen(false)} 
                className="block text-center text-white/60 font-bold hover:text-white transition-colors py-2 text-sm"
              >
                Login
              </a>
              <Button
                className="w-full h-14 text-sm font-bold rounded-full bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30"
                onClick={() => { setIsBookCallOpen(true); setIsOpen(false); }}
              >
                Get Free Automation Audit
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookCallDialog open={isBookCallOpen} onOpenChange={setIsBookCallOpen} />
    </>
  );
};

export default Navbar;
