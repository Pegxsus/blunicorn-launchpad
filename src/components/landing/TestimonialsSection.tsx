import useScrollReveal from "@/hooks/useScrollReveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Blukaze transformed our lead pipeline. What took our team 4 hours daily now runs on autopilot with zero errors.",
    name: "Sarah M.",
    role: "Head of Operations",
  },
  {
    quote: "Their AI automation expertise is next level. We've cut manual data entry by 90% and our team finally focuses on strategy.",
    name: "James R.",
    role: "CEO, TechFlow",
  },
  {
    quote: "From discovery call to live automation in under a week. The ROI was immediate and the ongoing support is outstanding.",
    name: "Priya K.",
    role: "Operations Manager",
  },
];

const TestimonialsSection = () => {
  const { ref, isRevealed } = useScrollReveal(0.1);

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-4">Testimonials</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              What our clients say
            </h2>
          </div>

          <div className={`grid md:grid-cols-3 gap-6 max-w-5xl mx-auto scroll-reveal delay-200 ${isRevealed ? 'revealed' : ''}`}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-border/40 bg-card/40 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-primary/40 mb-4" />
                  <p className="text-foreground/90 text-base leading-relaxed mb-8">
                    "{t.quote}"
                  </p>
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
