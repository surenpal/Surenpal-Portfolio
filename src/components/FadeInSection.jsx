import { motion, useScroll, useTransform } from "framer-motion";

export default function FadeInSection({ children }) {
  const { scrollY } = useScroll();

  // subtle parallax effect
  const parallaxY = useTransform(scrollY, [0, 1000], [0, -30]);

  return (
    <motion.div
      style={{ y: parallaxY }}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.8, 0.25, 1],
      }}
    >
      {children}
    </motion.div>

    
  );
}