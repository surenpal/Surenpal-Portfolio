import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";
import "./index.css";
import "./fonts.css";
import "./App.css";

export default function App() {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
});

  useEffect(() => 
  {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="bg-gray-400 text-gray-900 min-h-screen bg-cover bg-center bg-fixed bg-no-repeat bg-[url('/bg-all.jpg')]">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>

  );
}