import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { services } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#030308] text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <Button onClick={() => navigate("/")} variant="outline" className="border-white/20">
          Return Home
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030308] text-foreground font-sans selection:bg-blue-500/30">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 text-sm font-bold uppercase tracking-wider"
          >
            <ArrowLeft size={16} /> Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-black uppercase tracking-[0.3em] text-white/50 mb-8">
                Blukaze Services
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white mb-6">
                {service.title}
              </h1>
              
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8">
                {service.subtitle}
              </h3>

              <p className="text-lg text-white/60 leading-relaxed mb-12">
                {service.description}
              </p>

              {/* How We Help Section */}
              <div className="space-y-8">
                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white border-b border-white/10 pb-4">
                  How We Execute
                </h4>
                
                <div className="flex flex-col gap-6">
                  {service.howWeHelp.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                      className="flex items-start gap-4"
                    >
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle2 size={20} className="text-blue-500" />
                      </div>
                      <div>
                        <h5 className="text-white font-bold mb-1">{item.title}</h5>
                        <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10">
                <Link to="/contact">
                  <Button className="h-14 px-8 rounded-full bg-white text-black hover:bg-white/90 font-bold text-base transition-transform hover:scale-105">
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Image / Doodle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-square max-w-lg mx-auto lg:mx-0"
            >
              {/* Glow Behind Image */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bg} blur-3xl opacity-50 rounded-full scale-90`} />
              
              <div className="relative z-10 w-full h-full rounded-3xl border border-white/10 bg-[#080812]/50 backdrop-blur-sm overflow-hidden flex items-center justify-center p-8 group">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(59,130,246,0.3)] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </main>

      <Footer showCTA={true} />
    </div>
  );
};

export default ServiceDetail;
