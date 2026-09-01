import { motion } from "framer-motion";

const stats = [
  {
    figure: "30+",
    label: "Production Systems Deployed",
    sublabel: "Across sales, ops & data",
  },
  {
    figure: "500+",
    label: "Tools & APIs Connected",
    sublabel: "CRMs, LLMs, DBs & Custom APIs",
  },
  {
    figure: "40+",
    label: "Hours Saved / Week per Client",
    sublabel: "Verified client outcomes",
  },
  {
    figure: "99.99%",
    label: "Workflow Reliability",
    sublabel: "Built-in fallbacks & retries",
  },
];

const TrustProofBar = () => {
  return (
    <section className="py-12 bg-[#030308] border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col items-center text-center p-4 ${index > 0 ? "pt-6 sm:pt-4" : ""}`}
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-2">
                {stat.figure}
              </span>
              <span className="text-sm font-semibold text-white/80 mb-1">
                {stat.label}
              </span>
              <span className="text-xs text-white/40">
                {stat.sublabel}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustProofBar;
