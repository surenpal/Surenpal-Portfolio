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
          className="text-3xl font-extrabold tracking-wide
          bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500
          bg-clip-text text-transparent"
        >
          Portfolio
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10 font-semibold text-gray-700 dark:text-gray-300">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScrollTo(item)}
              className={`relative group capitalize
              ${active === item ? "text-yellow-500" : ""}
              hover:text-yellow-500`}
            >
              {item}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-500 transition-all
                ${active === item ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </button>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full
            text-gray-700 dark:text-gray-300
            hover:bg-black/5 dark:hover:bg-white/10"
          >
            <AnimatePresence mode="wait">
              {theme === "light" ? (
                <motion.span key="moon">
                  <FiMoon size={20} />
                </motion.span>
              ) : theme === "dark" ? (
                <motion.span key="sun">
                  <FiSun size={20} />
                </motion.span>
              ) : (
                <motion.span key="system">💻</motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Hamburger */}
          <button onClick={toggleMenu} className="md:hidden w-6 h-6 relative">
            <span
              className={`absolute w-6 h-[2px] bg-black dark:bg-white
              ${menuOpen ? "rotate-45 top-3" : "top-1"}`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-black dark:bg-white
              ${menuOpen ? "opacity-0" : "top-3"}`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-black dark:bg-white
              ${menuOpen ? "-rotate-45 top-3" : "top-5"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full
        bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl
        ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col items-center gap-6 py-6">
          {navItems.map((item) => (
            <button key={item} onClick={() => handleScrollTo(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}