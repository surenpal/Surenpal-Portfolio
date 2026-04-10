import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { FiMonitor } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = ["about", "skills", "projects", "contact"];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Scroll effect
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

  // Scroll spy
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

  // Lock scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

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
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-yellow-500 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        {/* Logo */}
        <button
          onClick={() => handleScrollTo("hero")}
          className={`text-xl font-black tracking-tight ${theme === "light" ? "text-black" : "text-white"}`}
        >
          SP
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10 font-semibold text-gray-700 dark:text-gray-300">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScrollTo(item)}
              className={`relative capitalize hover:text-yellow-500 transition-colors
              ${active === item ? "text-yellow-500" : ""}`}
            >
              {item}
              {/* 4. Sliding active indicator with layoutId */}
              {active === item && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-yellow-500 rounded"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* 3. Resume button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-block px-4 py-1.5 rounded-lg text-sm font-semibold
            border border-yellow-500 text-yellow-500
            hover:bg-yellow-500 hover:text-white
            transition-all duration-200"
          >
            Resume
          </a>

          {/* 1. Theme toggle — fixed animation */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full
            text-gray-700 dark:text-gray-300
            hover:bg-black/5 dark:hover:bg-white/10"
          >
            <AnimatePresence mode="wait">
              {theme === "light" ? (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <FiMoon size={20} />
                </motion.span>
              ) : theme === "dark" ? (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <FiSun size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="system"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <FiMonitor size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Hamburger */}
          <button onClick={toggleMenu} className="md:hidden w-6 h-6 relative">
            <span
              className={`absolute w-6 h-[2px] bg-black dark:bg-white transition-all duration-300
              ${menuOpen ? "rotate-45 top-3" : "top-1"}`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-black dark:bg-white transition-all duration-300
              ${menuOpen ? "opacity-0" : "top-3"}`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-black dark:bg-white transition-all duration-300
              ${menuOpen ? "-rotate-45 top-3" : "top-5"}`}
            />
          </button>
        </div>
      </div>

      {/* 2. Mobile menu — AnimatePresence slide-down */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden
            bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollTo(item)}
                  className={`capitalize font-semibold text-lg transition-colors
                  ${active === item ? "text-yellow-500" : "text-gray-700 dark:text-gray-300"}
                  hover:text-yellow-500`}
                >
                  {item}
                </button>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 rounded-lg text-sm font-semibold
                border border-yellow-500 text-yellow-500
                hover:bg-yellow-500 hover:text-white transition-all duration-200"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
