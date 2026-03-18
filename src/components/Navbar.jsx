import { useState } from "react";

export default function Navbar({ theme, toggleTheme }) {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 
    bg-pink-100 dark:bg-gray-900
    backdrop-blur-md shadow-sm">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">

        {/* Logo */}
        <a
          href="#hero"
          className="text-3xl font-extrabold text-yellow-500 tracking-wide"
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 font-semibold text-gray-700 dark:text-gray-300">

          <a href="#about" className="hover:text-yellow-500 transition">
            About
          </a>

          <a href="#skills" className="hover:text-yellow-500 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-yellow-500 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-yellow-500 transition">
            Contact
          </a>

        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">

          {/* Theme Button */}
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-lg text-sm font-medium
            bg-pink-200 dark:bg-gray-700
            text-gray-800 dark:text-gray-200
            hover:scale-105 transition"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-black dark:bg-white"></span>
            <span className="w-6 h-[2px] bg-black dark:bg-white"></span>
            <span className="w-6 h-[2px] bg-black dark:bg-white"></span>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full
        bg-white dark:bg-gray-900
        shadow-lg transition-all duration-300
        ${menuOpen ? "max-h-96 py-6" : "max-h-0 overflow-hidden"}`}
      >
        <div className="flex flex-col items-center gap-6 font-semibold text-gray-700 dark:text-gray-300">

          <a href="#about" onClick={toggleMenu} className="hover:text-yellow-500">About</a>
          <a href="#skills" onClick={toggleMenu} className="hover:text-yellow-500">Skills</a>
          <a href="#projects" onClick={toggleMenu} className="hover:text-yellow-500">Projects</a>
          <a href="#contact" onClick={toggleMenu} className="hover:text-yellow-500">Contact</a>

        </div>
      </div>

    </nav>
  );
}