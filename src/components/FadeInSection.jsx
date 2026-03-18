import { motion, useScroll, useTransform } from "framer-motion";

export default function FadeInSection({ children }) {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1000], [0, -80]); // parallax shift

  return (
    <motion.div
      style={{ y }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}