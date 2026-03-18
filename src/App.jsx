import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";

export default function App() {

  // Theme state, default from localStorage or light
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Toggle function passed to Navbar
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Apply/remove dark class on <html> and save theme
  useEffect(() => {
    const root = document.documentElement;

    // Reset classes
    root.classList.remove("dark");

    if (theme === "dark") {
      root.classList.add("dark");
    }

    // Save theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-pink-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar with toggle function */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}