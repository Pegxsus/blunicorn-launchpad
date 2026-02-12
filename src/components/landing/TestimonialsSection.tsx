import { useState } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Quote, ArrowRight } from "lucide-react";
import sarahImg from "@/assets/testimonials/sarah-m.jpg";
import jamesImg from "@/assets/testimonials/james-r.jpg";
import priyaImg from "@/assets/testimonials/priya-k.jpg";

const testimonials = [
  {
    quote: "Blukaze transformed our lead pipeline. What took our team 4 hours daily now runs on autopilot with zero errors.",
    fullQuote: "Blukaze transformed our lead pipeline. What took our team 4 hours daily now runs on autopilot with zero errors. The team was incredibly responsive and understood our business needs from day one. We've seen a 3x improvement in conversion rates since implementing their automation workflows.",
    name: "Sarah M.",
    company: "Apollo",
    role: "HEAD OF OPERATIONS",
    initials: "SM",
    image: sarahImg,
  },
  {
    quote: "Their AI automation expertise is next level. We've cut manual data entry by 90% and our team finally focuses on strategy.",
    fullQuote: "Their AI automation expertise is next level. We've cut manual data entry by 90% and our team finally focuses on strategy. The n8n workflows they built are robust, well-documented, and easy for our team to maintain. Blukaze didn't just automate  they transformed how we think about operations.",
    name: "James R.",
    role: "CEO, TECHFLOW",
    initials: "JR",
    image: jamesImg,
  },
  {
    quote: "From discovery call to live automation in under a week. The ROI was immediate and the ongoing support is outstanding.",
    fullQuote: "From discovery call to live automation in under a week. The ROI was immediate and the ongoing support is outstanding. They identified bottlenecks we didn't even know existed and built solutions that saved us thousands of dollars monthly. Highly recommend for any business looking to scale.",
    name: "Priya K.",
    role: "OPERATIONS MANAGER",
    initials: "PK",
    image: priyaImg,
  },
];

const TestimonialsSection = () => {
  const { ref, isRevealed } = useScrollReveal(0.1);
  const [activeIndex, setActiveIndex] = useState(0);

  const active = testimonials[activeIndex];

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className={`scroll-reveal ${isRevealed ? "revealed" : ""}`}>
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-4">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              What our clients say
            </h2>
          </div>

          {/* Featured testimonial */}
          <div
            className={`max-w-5xl mx-auto mb-8 scroll-reveal delay-200 ${isRevealed ? "revealed" : ""}`}
          >
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-0 rounded-2xl border border-border/40 bg-card/40 overflow-hidden">
              {/* Left: Avatar / visual area */}
              <div className="relative bg-gradient-to-br from-primary/10 via-card to-card h-[300px] md:h-[400px] overflow-hidden">
                <div className="absolute inset-0 dot-grid opacity-20" />
                <img src={active.image} alt={active.name} className="relative z-10 w-full h-full object-cover object-top" />
              </div>

              {/* Right: Quote content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <Quote className="w-8 h-8 text-primary mb-6" />
                <p className="text-foreground text-lg md:text-xl font-medium leading-relaxed mb-8">
                  "{active.fullQuote}"
                </p>
                <div>
                   <p className="text-foreground font-semibold text-sm">
                     {active.name}
                   </p>
                   <p className="text-muted-foreground text-xs tracking-wide uppercase">
                     {active.company && `${active.company} • `}{active.role}
                   </p>
                 </div>
              </div>
            </div>
          </div>

          {/* Testimonial cards row */}
          <div
            className={`grid md:grid-cols-3 gap-4 max-w-5xl mx-auto scroll-reveal delay-300 ${isRevealed ? "revealed" : ""}`}
          >
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`text-left p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                  activeIndex === i
                    ? "border-primary/60 bg-gradient-to-b from-primary/10 to-card/80 shadow-lg shadow-primary/5"
                    : "border-border/40 bg-card/40 hover:border-primary/20"
                }`}
              >
                <p className="text-foreground/80 text-sm leading-relaxed mb-5 line-clamp-3">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 overflow-hidden flex-shrink-0">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                   <div>
                     <p className="text-foreground font-semibold text-xs">
                       {t.name}
                     </p>
                     <p className="text-muted-foreground text-[10px] tracking-wide uppercase">
                       {t.company && `${t.company} • `}{t.role}
                     </p>
                   </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
