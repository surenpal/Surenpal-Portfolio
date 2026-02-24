export default function Navbar() {
  return (
    <nav className="w-full h-20 bg-black-600 fixed top-0 left-0 z-50 shadow-lg backdrop-blur-md">
      <div className="max-w-6xl mx-auto h-full px-6 flex justify-between items-center">
        <a
          href="#Hero"
          className="text-gray-400 text-4xl font-extrabold cursor-pointer">
          SJ
        </a>

        <div className="space-x-8 text-gray-300 font-bold">
          <a href="#about" className="hover:text-gray-100 transition-colors">About</a>
          <a href="#skills" className="hover:text-gray-100 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-gray-100 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-gray-100 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}