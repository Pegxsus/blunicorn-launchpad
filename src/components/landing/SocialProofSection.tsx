import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Users, Clock } from "lucide-react";

const stats = [
  { 
    value: "50+ Automations Delivered", 
    desc: "Production-ready workflows powering real businesses.",
    icon: CheckCircle2
  },
  { 
    value: "30+ Happy Clients", 
    desc: "Businesses trust Blukaze to automate their operations.",
    icon: Users
  },
  { 
    value: "10,000+ Hours Saved", 
    desc: "Time given back to teams through intelligent automation.",
    icon: Clock
  },
];

const SocialProofSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section className="py-24 md:py-32 bg-[#030308] relative overflow-hidden" ref={sectionRef}>
      {/* Parallax glow */}
      <motion.div style={{ y }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-white/50"
          >
            Trusted by businesses ready to scale with AI automation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i + 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#0a0a12] border border-white/5 rounded-2xl p-8 hover:bg-[#0c0c16] hover:border-white/10 transition-all duration-300"
            >
              <div className="flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed font-medium">
                    {stat.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
