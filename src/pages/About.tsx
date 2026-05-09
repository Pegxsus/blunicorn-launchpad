import { Zap, Target, Users, Lightbulb } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import CursorGlow from "@/components/landing/CursorGlow";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <div className="min-h-screen bg-[#030308] text-white">
      <SEO 
        title="About Us" 
        description="Learn about Blukaze's mission to democratize AI automation and help businesses scale through intelligent workflows."
      />
      <CursorGlow />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl">
            <motion.h1 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.5rem,7.5vw,5.5rem)] font-black tracking-tighter leading-[1.1] text-white mb-14"
            >
              We've been quietly building
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-400 to-blue-500">
                intelligent automation solutions.
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-white/40 max-w-2xl leading-relaxed font-medium"
            >
              We help businesses transform their operations through cutting-edge AI and automation, 
              without the complexity of traditional implementations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* The Meaning of Blukaze */}
      <section className="py-32 relative bg-[#050510] border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-white/20 mb-8">
              The Meaning of Blukaze
            </h2>
            <p className="text-2xl md:text-4xl text-white/40 leading-relaxed font-medium tracking-tight">
              "Blu" represents the color Blue in English, standing for <span className="text-blue-600 font-black">calm</span> and clarity. "Kaze" (風) is Japanese for <span className="text-white font-black">wind</span>, representing swift, seamless, and powerful motion. Together, Blukaze brings the calm of structure to the powerful winds of automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Breakthrough Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3 text-blue-600">
                <Zap className="w-6 h-6" />
                <span className="text-sm font-black uppercase tracking-[0.2em]">The Breakthrough</span>
              </div>
              <p className="text-white/40 text-2xl leading-relaxed font-medium tracking-tight">
                We started with a vision to democratize automation. Since then, we've had a 
                breakthrough in our approach that made our solutions{" "}
                <span className="text-white font-bold">faster to implement and more reliable</span>{" "}
                than traditional enterprise tools.
              </p>
            </motion.div>

            {/* Right Content - Roadmap Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#050510] border border-white/5 p-12 rounded-3xl"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-12">
                Our Journey
              </p>
              <div className="space-y-12">
                <div className="flex items-start gap-6 group">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mt-2 shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-transform group-hover:scale-150" />
                  <div>
                    <p className="text-2xl font-black text-white tracking-tight">Founded</p>
                    <p className="text-sm font-bold text-blue-600 mb-3 uppercase tracking-widest mt-1">2023</p>
                    <p className="text-sm text-white/40 leading-relaxed font-medium">
                      Started with a mission to simplify AI automation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mt-2 shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-transform group-hover:scale-150" />
                  <div>
                    <p className="text-2xl font-black text-white tracking-tight">Growing</p>
                    <p className="text-sm font-bold text-purple-400 mb-3 uppercase tracking-widest mt-1">2024</p>
                    <p className="text-sm text-white/40 leading-relaxed font-medium">
                      Expanding our services and client base globally.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 relative bg-[#030308]">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(3rem,8vw,6rem)] font-black uppercase tracking-tighter leading-[0.9] text-white mb-16"
          >
            What We
            <br />
            Stand For.
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-[#050510] p-12 group hover:bg-[#0a0d17] transition-colors duration-500 relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">Precision</h3>
              <p className="text-sm text-white/40 leading-relaxed font-medium group-hover:text-white/60 transition-colors">
                Every solution is tailored to your specific needs, ensuring maximum impact and efficiency.
              </p>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r from-blue-600 to-transparent" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#050510] p-12 group hover:bg-[#110e1b] transition-colors duration-500 relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">Partnership</h3>
              <p className="text-sm text-white/40 leading-relaxed font-medium group-hover:text-white/60 transition-colors">
                We work alongside you as partners, not just vendors. Your success is our success.
              </p>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r from-purple-600 to-transparent" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-[#050510] p-12 group hover:bg-[#0a0d17] transition-colors duration-500 relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">Innovation</h3>
              <p className="text-sm text-white/40 leading-relaxed font-medium group-hover:text-white/60 transition-colors">
                We stay ahead of the curve, constantly exploring new technologies to bring you the best.
              </p>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r from-blue-600 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
