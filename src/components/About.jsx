import MyCareer from "./MyCareer";
import FadeInSection from "./FadeInSection";
import AnimatedText from "./AnimatedText";
import { motion } from "motion/react";

const stats = [
  { value: "5+", label: "Years Learning" },
  { value: "7+", label: "Projects Built" },
  { value: "3", label: "Languages" },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="min-h-screen flex items-center justify-center px-6 py-24
      text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto w-full">
        <FadeInSection>

          {/* Header */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2"
            >
              Get to know me
            </motion.p>

            <motion.h2
              id="about-title"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
            >
              About Me
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-1 bg-yellow-500 mx-auto rounded"
            />
          </div>

          {/* Two-column: Avatar + Bio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">

            {/* Left — Avatar + Stats */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-8"
            >
              {/* Avatar */}
              <div className="relative">
                <div className="w-44 h-44 rounded-full
                  bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-500 p-[3px]
                  shadow-xl shadow-pink-500/20">
                  <div className="w-full h-full rounded-full
                    bg-gray-100 dark:bg-gray-800
                    flex items-center justify-center">
                    <span className="text-5xl font-black
                      bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-500
                      bg-clip-text text-transparent">
                      SP
                    </span>
                  </div>
                </div>
                {/* Online dot */}
                <span className="absolute bottom-3 right-3 w-5 h-5 bg-green-400
                  rounded-full border-4 border-white dark:border-gray-900 shadow-md" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-3 rounded-xl
                      bg-white/60 dark:bg-white/5
                      border border-gray-200/60 dark:border-white/10
                      shadow-sm"
                  >
                    <p className="text-2xl font-extrabold
                      bg-gradient-to-r from-yellow-400 to-pink-500
                      bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-tight">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — Bio */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-left"
            >
              <AnimatedText
                text="I am a Junior Frontend developer passionate about building modern, responsive web applications that deliver seamless user experiences. I enjoy breaking down complex problems into simple, elegant solutions, and I focus on creating clean, scalable code that drives real value. With a strong commitment to continuous learning and improvement, I strive to turn ideas into intuitive and high-quality digital products."
                className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300"
              />
            </motion.div>

          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <MyCareer />
          </motion.div>

        </FadeInSection>
      </div>
    </section>
  );
}
