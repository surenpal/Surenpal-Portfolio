export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-gray-50 fixed top-0 left-0 z-50 shadow-lg backdrop-blur-md">
      <div className="max-w-6xl mx-auto h-full px-6 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-pink-600 text-shadow-md">
          Suren
        </h1>

        <div className="space-x-8 text-pink-700 font-medium">
          <a href="#about" className="hover:text-pink-600 transition-colors">About</a>
          <a href="#skills" className="hover:text-pink-600 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-pink-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-pink-600 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}