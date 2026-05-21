import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  Solutions: [
    { label: "AI Automation", href: "/services/ai-automation" },
    { label: "Web Scrapers", href: "/services/web-scrapers" },
    { label: "Backend Development", href: "/services/backend-development" },
    { label: "Business Audit", href: "/services/business-audit" },
  ],
  Resource: [
    { label: "Blog", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

const Footer = ({ showCTA = true }: { showCTA?: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer className="bg-[#030308] border-t border-white/5 pt-20 md:pt-32 pb-12 overflow-hidden relative z-0" ref={ref}>
      {/* Bottom Ambient Blue Glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] sm:w-[120%] max-w-[1920px] h-[400px] md:h-[600px] pointer-events-none -z-10" 
        style={{ 
          background: 'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(37, 99, 235, 0.4) 0%, rgba(30, 58, 138, 0.15) 40%, rgba(3, 3, 8, 0) 100%)' 
        }} 
      />
      
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">

        {/* Massive CTA — WAC Signature */}
        {showCTA && (
          <div className="border-b border-white/5 pb-16 md:pb-24 mb-14 md:mb-20">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-black uppercase tracking-[0.4em] text-white/20 mb-10"
            >
              Ready to Transform?
            </motion.p>

            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 group cursor-pointer">
              <div>
                <div className="overflow-hidden mb-2">
                  <motion.h2
                    initial={{ y: "100%" }}
                    animate={isInView ? { y: 0 } : {}}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[clamp(2.5rem,8vw,9rem)] font-black uppercase tracking-tighter leading-[0.85] text-white pr-4"
                  >
                    Let's Build
                  </motion.h2>
                </div>
                <div className="overflow-hidden">
                  <motion.h2
                    initial={{ y: "100%" }}
                    animate={isInView ? { y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[clamp(2.5rem,8vw,9rem)] font-black uppercase tracking-tighter leading-[0.85] magic-text pr-4"
                  >
                    Together.
                  </motion.h2>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to="/contact">
                  <div className="w-36 h-36 md:w-48 md:h-48 rounded-full border-2 border-white/10 flex flex-col items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 hover:border-transparent transition-all duration-500 group">
                    <ArrowUpRight size={48} className="text-white/40 group-hover:text-white group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-all duration-300" />
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-white mt-2 transition-colors">Contact Us</span>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        )}

        {/* Footer Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16"
        >
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 flex items-center justify-center">
                <img src={logo} alt="Blukaze" className="w-full h-full object-contain brightness-0 invert" />
              </div>
              <span className="text-2xl font-semibold text-white">Blukaze</span>
            </Link>
            <p className="text-sm text-white/30 leading-relaxed max-w-xs mb-8">
              Automation with a human touch.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-6">{section}</p>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm font-semibold text-white/40 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
          <p className="text-[11px] font-bold text-white/20 uppercase tracking-widest w-full text-center md:text-left">
            © 2026 Blukaze. All rights reserved. Automation with a human touch.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
