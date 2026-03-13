export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 pb-16 p-10 
      bg-white dark:bg-gray-900 
      text-gray-900 dark:text-white"
    >
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

        <h1 className="text-6xl font-extrabold mb-4 text-yellow-500">
          Hi, I'm Suren Pal
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Good Learner • React Developer • Full Stack Developer
        </p>

        <a
          href="#projects"
          className="px-8 py-3 bg-slate-600 text-blue-200 rounded-lg shadow-lg 
          hover:bg-slate-700 hover:shadow-xl transition-all duration-300"
        >
          View My Projects
        </a>

      </div>
    </section>
  );
}