import { TypeAnimation } from "react-type-animation";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
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

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
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
      bg-white dark:bg-gray-900 overflow-hidden
      text-gray-900 dark:text-gray-100"
    >

      {/* 🌫️ Soft Background Glow (still needed for depth) */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-yellow-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-purple-500/20 rounded-full blur-3xl" />

      {/* ✨ MAIN CONTENT (fully blended) */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto text-center flex flex-col items-center"
      >

        {/* 🌈 Gradient Name */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6
          bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500
          bg-clip-text text-transparent animate-gradient"
        >
          Hi, I'm Suren Pal
        </motion.h1>

        {/* ⌨️ Typing Role */}
        <motion.div variants={item}>
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

        {/* 🧲 Magnetic Button */}
        <motion.a
          variants={item}
          href="#projects"
          onMouseMove={handleMouseMove}
          onMouseLeave={reset}
          style={btnStyle}
          className="mt-10 px-8 py-3 bg-yellow-500 text-white rounded-xl
          hover:bg-yellow-600 hover:shadow-yellow-500/40
          transition-all duration-300 inline-block"
        >
          View Projects
        </motion.a>

      </motion.div>
    </section>
  );
}