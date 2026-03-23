import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CursorGlow from "./components/CursorGlow";


export default function App() {
  // 🌗 Theme state (light / dark / system)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "system";
  });

  // 🔁 Toggle theme (3-state)
  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : prev === "dark" ? "system" : "light"
    );
  };

  // 🎯 Apply theme
  useEffect(() => {
    const root = document.documentElement;

    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const finalTheme =
      theme === "system" ? (systemDark ? "dark" : "light") : theme;

    root.classList.toggle("dark", finalTheme === "dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className="relative overflow-hidden transition-colors duration-500
      bg-[#fafafa] text-gray-800
      dark:bg-gray-900 dark:text-gray-100

      /* 🌈 subtle gradients */
      bg-[radial-gradient(circle_at_20%_20%,rgba(255,200,0,0.08),transparent)]
      dark:bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.12),transparent)]
    "
    >
      {/* 🧲 Cursor Glow */}
      <CursorGlow />

      {/* 🌈 GLOBAL GLOW SYSTEM (Adaptive) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        
        {/* ☀️ Light mode glow */}
        <div className="block dark:hidden absolute top-[-10%] left-[-10%]
        w-[400px] h-[400px] bg-yellow-300/20 blur-[120px] rounded-full" />

        <div className="block dark:hidden absolute bottom-[-10%] right-[-10%]
        w-[400px] h-[400px] bg-pink-300/20 blur-[120px] rounded-full" />

        {/* 🌙 Dark mode glow */}
        <div className="hidden dark:block absolute top-[-10%] left-[-10%]
        w-[420px] h-[420px] bg-purple-500/20 blur-[140px] rounded-full" />

        <div className="hidden dark:block absolute bottom-[-10%] right-[-10%]
        w-[420px] h-[420px] bg-pink-500/20 blur-[140px] rounded-full" />

        {/* Center glow (shared) */}
        <div className="absolute top-[40%] left-[50%]
        -translate-x-1/2 -translate-y-1/2
        w-[300px] h-[300px]
        bg-purple-400/10 blur-[120px] rounded-full" />
      </div>

      {/* 🌟 MAIN CONTENT */}
      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <Hero />

        {/* 🎬 Animated Sections */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <About />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Skills />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Projects />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}