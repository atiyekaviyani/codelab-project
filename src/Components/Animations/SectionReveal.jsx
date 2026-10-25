
import { motion } from "framer-motion";

export default function SectionReveal({
  children,
  className = "",
  delay = 0,
}) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.08,
      }}
      transition={{
        duration: 1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.section>
  );
}
