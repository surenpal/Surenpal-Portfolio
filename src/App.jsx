import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";

export default function App() {

  // Theme state (persisted)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Apply theme to <html>
  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("dark");

    if (theme === "dark") {
      root.classList.add("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative overflow-hidden
    bg-white dark:bg-gray-900
    text-gray-900 dark:text-gray-100
    transition-colors duration-500">

      {/* 🌈 GLOBAL GLOW SYSTEM (Improved) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

        {/* Top Left Glow */}
        <div className="absolute top-[-10%] left-[-10%]
        w-[420px] h-[420px]
        bg-yellow-400/10
        blur-[140px]
        rounded-full" />

        {/* Bottom Right Glow */}
        <div className="absolute bottom-[-10%] right-[-10%]
        w-[420px] h-[420px]
        bg-pink-400/10
        blur-[140px]
        rounded-full" />

        {/* Center Glow (NEW – balances whole page) */}
        <div className="absolute top-[40%] left-[50%]
        -translate-x-1/2 -translate-y-1/2
        w-[320px] h-[320px]
        bg-purple-400/10
        blur-[120px]
        rounded-full" />

      </div>

      {/* 🌟 MAIN CONTENT */}
      <div className="relative z-10">

        {/* Navbar */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Sections */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

      </div>

    </div>
  );
}