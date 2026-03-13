export default function Navbar({ theme, setTheme }) {

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="w-full h-20 p-4 bg-white dark:bg-gray-800 fixed top-0 left-0 z-50 shadow-lg backdrop-blur-md">
      
      <div className="max-w-6xl mx-auto h-full px-6 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#hero"
          className="text-gray-900 dark:text-white text-4xl font-extrabold cursor-pointer"
        >
          SJ
        </a>

        {/* Navigation Links */}
        <div className="space-x-8 text-gray-700 dark:text-gray-300 font-bold">
          <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
        </div>

        {/* Theme Button */}
        <button
          onClick={toggleTheme}
          className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>

      </div>

    </nav>
  );
}