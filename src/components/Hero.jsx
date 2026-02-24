export default function Hero() {
  return (
    <section id="Hero" className="min-h-screen flex flex-col items-center justify-center px-6 pb-16 relative">      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative flex flex-col items-center text-center max-w-3xl mx-auto">
        <h1 className="text-6xl font-extrabold mb-4 text-gray-300 text-shadow-md">
          Hi, I'm Suren Pal
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Good Learner • React Developer • Full Stack Developer
        </p>

        <a
          href="#projects"
          className="px-8 py-3 bg-slate-600 text-blue-200 rounded-lg shadow-lg hover:bg-slate-700 hover:shadow-xl transition-all duration-300"
        >
          View My Projects
        </a>
      </div>
    </section>
  );
}