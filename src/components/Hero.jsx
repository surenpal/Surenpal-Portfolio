import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {

  const [btnStyle, setBtnStyle] = useState({});

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // ✅ Fixed animation (no disappearing text)
  const item = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // 🧲 Magnetic button
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setBtnStyle({
      transform: `translate(${x * 0.2}px, ${y * 0.2}px)`,
    });
  };

  const reset = () => setBtnStyle({ transform: "translate(0,0)" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6
      overflow-hidden text-gray-900 dark:text-gray-100"
    >

      {/* ✨ MAIN CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto text-center flex flex-col items-center"
      >

        {/* 🧠 Text Reveal */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6
          bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500
          bg-clip-text text-transparent"
        >
          {["Hi,", "I'm", "Suren Pal"].map((word, index) => (
            <span
              key={index}
              className="inline-block overflow-hidden mr-4"
            >
              <motion.span
                variants={item}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* ⌨️ Typing Role */}
        <motion.div variants={item} transition={{ delay: 0.6 }}>
          <TypeAnimation
            sequence={[
              "React Developer",
              2000,
              "Full Stack Developer",
              2000,
              "Fast Learner",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium"
          />
        </motion.div>

        {/* 📝 Tagline */}
        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-gray-500 dark:text-gray-400 text-base sm:text-lg leading-relaxed"
        >
          I build fast, accessible, and visually polished web experiences —
          from pixel-perfect UIs to scalable backends.
        </motion.p>

        {/* 🔗 Social Links */}
        <motion.div variants={item} className="flex items-center gap-5 mt-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/surendra-jirel-592b8a397/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition text-2xl"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        {/* 🧲 CTA Buttons */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <motion.a
            href="#projects"
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            whileTap={{ scale: 0.95 }}
            style={btnStyle}
            className="px-8 py-3 bg-yellow-500 text-white rounded-xl shadow-md
            hover:bg-yellow-600 hover:shadow-yellow-500/40
            transition-all duration-300 inline-block font-semibold"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            className="px-8 py-3 rounded-xl border border-gray-300 dark:border-gray-600
            text-gray-700 dark:text-gray-300
            hover:border-yellow-500 hover:text-yellow-500 dark:hover:text-yellow-400
            transition-all duration-300 inline-block font-semibold"
          >
            Contact Me
          </motion.a>
        </motion.div>

      </motion.div>

      {/* ⬇️ Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 dark:text-gray-600"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-[1px] h-8 bg-gray-300 dark:bg-gray-700"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
      </motion.div>

    </section>
  );
}