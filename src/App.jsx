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
  const [theme, setTheme] = useState("system");

  // 🔥 Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  // 🔥 Toggle: light → dark → system
  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : prev === "dark" ? "system" : "light"
    );
  };

  // 🔥 Apply theme + listen to system changes
  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const systemDark = media.matches;

      const finalTheme =
        theme === "system" ? (systemDark ? "dark" : "light") : theme;

      root.classList.toggle("dark", finalTheme === "dark");
    };

    applyTheme();

    // ✅ Listen ONLY in system mode
    if (theme === "system") {
      media.addEventListener("change", applyTheme);
    }

    localStorage.setItem("theme", theme);

    return () => {
      media.removeEventListener("change", applyTheme);
    };
  }, [theme]);

  return (
    <div
      className="relative overflow-hidden transition-colors duration-500
      bg-[#fafafa] text-gray-800
      dark:bg-gray-900 dark:text-gray-100"
    >
      {/* 🧲 Cursor Glow */}
      <CursorGlow />

      {/* 🌈 GLOBAL LAYERS */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

        {/* Light gradient */}
        <div className="block dark:hidden absolute inset-0
          bg-[radial-gradient(circle_at_20%_20%,rgba(255,200,0,0.08),transparent)]" />

        {/* Dark gradient */}
        <div className="hidden dark:block absolute inset-0
          bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.12),transparent)]" />

        {/* Glow blobs */}
        <div className="absolute top-[-10%] left-[-10%]
        w-[420px] h-[420px]
        bg-yellow-400/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-[-10%] right-[-10%]
        w-[420px] h-[420px]
        bg-pink-400/10 blur-[140px] rounded-full" />

        <div className="absolute top-[40%] left-[50%]
        -translate-x-1/2 -translate-y-1/2
        w-[320px] h-[320px]
        bg-purple-400/10 blur-[120px] rounded-full" />
      </div>

      {/* 🌟 MAIN CONTENT */}
      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <Hero />

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