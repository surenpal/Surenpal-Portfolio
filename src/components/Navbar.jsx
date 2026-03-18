import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";


export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // 🔥 Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled
          ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-md"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">

        {/* Logo */}
        <a
          href="#hero"
          className="text-3xl font-extrabold tracking-wide
          bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500
          bg-clip-text text-transparent"
        >
          Portfolio
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 font-semibold text-gray-700 dark:text-gray-300">

          {["about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative group capitalize hover:text-yellow-500 transition"
            >
              {item}

              {/* ✨ Animated underline */}
              <span
                className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500
                transition-all duration-300 group-hover:w-full"
              />
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
  onClick={toggleTheme}
  className="p-2 rounded-full
  text-gray-700 dark:text-gray-300
  hover:bg-black/5 dark:hover:bg-white/10
  hover:scale-110
  transition-all duration-300 relative"
>
  <AnimatePresence mode="wait">
    {theme === "light" ? (
      <motion.span
        key="moon"
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <FiMoon size={20} />
      </motion.span>
    ) : (
      <motion.span
        key="sun"
        initial={{ rotate: 90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: -90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <FiSun size={20} />
      </motion.span>
    )}
  </AnimatePresence>
</button>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative w-6 h-6"
          >
            <span
              className={`absolute h-[2px] w-6 bg-black dark:bg-white transition-all duration-300
              ${menuOpen ? "rotate-45 top-3" : "top-1"}`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-black dark:bg-white transition-all duration-300
              ${menuOpen ? "opacity-0" : "top-3"}`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-black dark:bg-white transition-all duration-300
              ${menuOpen ? "-rotate-45 top-3" : "top-5"}`}
            />
          </button>

        </div>
      </div>

      {/* 📱 Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full
        bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl
        transition-all duration-300
        ${menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 font-semibold text-gray-700 dark:text-gray-300">

          {["about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={toggleMenu}
              className="capitalize hover:text-yellow-500 transition"
            >
              {item}
            </a>
          ))}

        </div>
      </div>

      {/* ✨ Bottom subtle glow line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px]
      bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

    </nav>
  );
}