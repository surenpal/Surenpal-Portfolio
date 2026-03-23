import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = ["about", "skills", "projects", "contact"];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // 🔥 Optimized scroll handling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);

          const total =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

          setScrollProgress((window.scrollY / total) * 100);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Scroll Spy
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // 🔥 Prevent background scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // 🔥 Smooth scroll with offset
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* 🔥 Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-yellow-500 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        {/* Logo */}
        <button
          onClick={() => handleScrollTo("hero")}
          className="text-3xl font-extrabold tracking-wide
          bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500
          bg-clip-text text-transparent"
        >
          Portfolio
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 font-semibold text-gray-700 dark:text-gray-300">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScrollTo(item)}
              className={`relative group capitalize transition
              ${active === item ? "text-yellow-500" : ""}
              hover:text-yellow-500`}
            >
              {item}

              {/* underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-500 transition-all duration-300
                ${active === item ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full
            text-gray-700 dark:text-gray-300
            hover:bg-black/5 dark:hover:bg-white/10
            hover:scale-110 transition-all duration-300"
          >
            <AnimatePresence mode="wait">
              {theme === "light" ? (
                <motion.span
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <FiMoon size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="sun"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <FiSun size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="md:hidden relative w-6 h-6"
          >
            <span
              className={`absolute h-[2px] w-6 bg-black dark:bg-white transition-all
              ${menuOpen ? "rotate-45 top-3" : "top-1"}`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-black dark:bg-white transition-all
              ${menuOpen ? "opacity-0" : "top-3"}`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-black dark:bg-white transition-all
              ${menuOpen ? "-rotate-45 top-3" : "top-5"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full
        bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl
        transition-all duration-300
        ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 font-semibold text-gray-700 dark:text-gray-300">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScrollTo(item)}
              className="capitalize hover:text-yellow-500 transition"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* bottom glow */}
      <div className="absolute bottom-0 left-0 w-full h-[1px]
      bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />
    </nav>
  );
}