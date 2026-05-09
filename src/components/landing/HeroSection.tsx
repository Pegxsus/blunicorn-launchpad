import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import BookCallDialog from "./BookCallDialog";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#030308] pt-20">
      {/* Dynamic Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#030308]" />
        
        {/* Animated Gradient Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" 
        />
        <motion.div 
          animate={{ 
            x: ["-20%", "20%", "-20%"],
            y: ["10%", "-10%", "10%"],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none" 
        />
        <motion.div 
          animate={{ 
            x: ["20%", "-20%", "20%"],
            y: ["-10%", "10%", "-10%"],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" 
        />

        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />
        
        {/* Fade Out Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#030308] to-transparent pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/70">
              The Next Era of Automation
            </span>
          </div>
        </motion.div>

        {/* Massive Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto mb-10"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.9] text-white">
            ARCHITECTING THE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 filter drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              INTELLIGENCE.
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-lg md:text-xl text-white/50 leading-relaxed font-medium mb-12"
        >
          We engineer custom AI agents and autonomous workflows that obliterate manual tasks, scale your operations, and multiply your margins.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button
            onClick={() => setIsBookCallOpen(true)}
            className="w-full sm:w-auto h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.3)] border-none"
          >
            Start Your Project
          </Button>
          
          <Link to="/works" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full sm:w-auto h-14 px-8 rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 font-bold text-base transition-all group"
            >
              View Our Works
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>

      <BookCallDialog open={isBookCallOpen} onOpenChange={setIsBookCallOpen} />
    </section>
  );
};

export default HeroSection;
