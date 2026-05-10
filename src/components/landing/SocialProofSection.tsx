import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const logos = [
  "Airtable", "Slack", "Google Sheets", "HubSpot",
  "Shopify", "Notion", "PostgreSQL", "Stripe",
];

const SocialProofSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section className="py-16 md:py-20 bg-[#030308] relative overflow-hidden border-t border-white/[0.03]" ref={sectionRef}>
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/20 mb-8 md:mb-10"
        >
          Integrating with the tools you already use
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12 md:gap-x-16">
          {logos.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 + 0.15 }}
              className="text-sm sm:text-base font-bold text-white/[0.12] hover:text-white/30 transition-colors duration-300 select-none"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
