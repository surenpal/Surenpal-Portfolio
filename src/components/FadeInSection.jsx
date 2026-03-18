import { motion, useScroll, useTransform } from "framer-motion";

export default function FadeInSection({ children }) {
  const { scrollY } = useScroll();

  // 🌊 Parallax (small, smooth)
  const parallaxY = useTransform(scrollY, [0, 1000], [0, -50]);

  return (
    <motion.div
      style={{ y: parallaxY }} // ONLY for parallax
      initial={{ opacity: 0, scale: 0.98 }} // 👈 no y here
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}