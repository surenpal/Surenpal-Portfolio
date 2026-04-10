import MyCareer from "./MyCareer";
import FadeInSection from "./FadeInSection";
import AnimatedText from "./AnimatedText";
import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="min-h-screen flex items-center justify-center px-6 py-24
      text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto text-center">

        <FadeInSection>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2"
          >
            Get to know me
          </motion.p>

          {/* Title */}
          <motion.h2
            id="about-title"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
          >
            About Me
          </motion.h2>

          {/* Animated Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-yellow-500 mx-auto mb-10 rounded"
          />

          {/* Description (Word-by-word animation) */}
          <div className="mb-20 max-w-xl sm:max-w-2xl mx-auto space-y-6 text-gray-600 dark:text-gray-300">

            <AnimatedText
              text="I am a Junior Frontend developer passionate about building modern, responsive web applications that deliver seamless user experiences. I enjoy breaking down complex problems into simple, elegant solutions, 
              and I focus on creating clean, scalable code that drives real value. With a strong commitment to continuous learning and improvement, I strive to turn ideas into intuitive and high-quality digital products."
              className="text-base sm:text-lg md:text-xl leading-relaxed"
            />

          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full mt-16"
          >
            <MyCareer />
          </motion.div>

        </FadeInSection>

      </div>
    </section>
  );
}