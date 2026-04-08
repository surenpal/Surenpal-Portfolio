import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
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

        {/* 🧲 Magnetic Button */}
        <motion.a
          variants={item}
          href="#projects"
          onMouseMove={handleMouseMove}
          onMouseLeave={reset}
          whileTap={{ scale: 0.95 }}
          style={btnStyle}
          className="mt-10 px-8 py-3
          bg-yellow-500 text-white
          rounded-xl
          shadow-md
          hover:bg-yellow-600
          hover:shadow-yellow-500/40
          transition-all duration-300 inline-block"
        >
          View Projects
        </motion.a>

    

      </motion.div>
    </section>
  );
}