import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import BookCallDialog from "./BookCallDialog";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Works", href: "/works", isPage: true },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "/contact", isPage: true },
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
        className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-500 ${
          isScrolled
            ? "bg-[#050510]/90 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img src={logo} alt="Blukaze" className="w-full h-full object-contain brightness-0 invert" />
            </div>
            <span className="text-2xl font-black tracking-tight text-white">Blukaze</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) =>
              link.isPage ? (
                <Link key={link.name} to={link.href} className="text-sm font-semibold text-white/50 hover:text-white transition-colors">
                  {link.name}
                </Link>
              ) : (
                <a key={link.name} href={link.href} onClick={(e) => handleAnchorClick(e, link.href)} className="text-sm font-semibold text-white/50 hover:text-white transition-colors">
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="https://app.blukaze.com" className="text-sm font-bold text-white/50 hover:text-white transition-colors">
              Login
            </a>
            <Button
              onClick={() => setIsBookCallOpen(true)}
              className="rounded-full px-8 h-12 font-bold text-sm bg-blue-600 hover:bg-blue-500 hover:scale-[1.03] transition-all border-none shadow-lg shadow-blue-600/20"
            >
              Book a Free Call
            </Button>
          </div>

          {/* Hamburger */}
          <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
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
            className="fixed inset-0 z-50 bg-[#050510] flex flex-col p-10"
          >
            <div className="flex items-center justify-between mb-16">
              <span className="text-2xl font-black text-white">Blukaze</span>
              <button onClick={() => setIsOpen(false)} className="text-white"><X size={28} /></button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                >
                  {link.isPage ? (
                    <Link to={link.href} className="text-5xl font-black text-white hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-5xl font-black text-white hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
                      {link.name}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="mt-auto space-y-4">
              <a 
                href="https://app.blukaze.com" 
                onClick={() => setIsOpen(false)} 
                className="block text-center text-white/50 font-bold hover:text-white transition-colors py-2"
              >
                Login
              </a>
              <Button
                className="w-full h-16 text-lg font-bold rounded-full bg-blue-600 hover:bg-blue-500"
                onClick={() => { setIsBookCallOpen(true); setIsOpen(false); }}
              >
                Book a Free Call
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
