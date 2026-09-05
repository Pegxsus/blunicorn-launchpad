import { motion, useScroll } from "framer-motion";

export const ReadingProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-400 to-blue-500 origin-left z-50 pointer-events-none opacity-80"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ReadingProgress;
