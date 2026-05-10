import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    document.title = "404 - Page Not Found | Blukaze";
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#050505] text-white relative overflow-hidden font-sans">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6 md:px-12 flex flex-col items-center text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Link to="/">
            <img src={logo} alt="Blukaze" className="h-12 w-auto invert brightness-0 invert" />
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="relative mb-12">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[12rem] md:text-[20rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent select-none"
          >
            404
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Page vanished.
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto font-medium">
              The resource you are looking for has been moved or doesn't exist in our current architecture.
            </p>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center mt-8"
        >
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-black hover:bg-zinc-200 rounded-none px-12 py-8 text-xl font-bold group h-auto"
          >
            <Link to="/">
              Go to home
              <MoveRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        {/* Footer info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-32 pt-8 border-t border-white/10 w-full flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500 uppercase tracking-widest gap-4"
        >
          <div>Blukaze AI Automation Agency</div>
          <div className="flex gap-8">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/works" className="hover:text-white transition-colors">Works</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <div>© {new Date().getFullYear()}</div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
