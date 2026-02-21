export default function Hero() {
  return (
    <section id="Hero" className=" relative min-h-screen flex flex-col md:flex-row items-center px-6 pb-16 bg-[url('/src/assets/bg-image3.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/40"></div>
      <div className="relative flex-1 flex flex-col items-center mt-30 md:items-start text-center md:text-left pl-10">
        <h1 className="text-5xl font-extrabold mb-4 text-black-600 text-shadow-md">
          Hi, I'm Suren Pal
        </h1>
        <p className="text-lg text-black-600 mb-8">
          Good Learner • React Developer • Full Stack Developer
        </p>

        <a
          href="#projects"
          className="px-8 py-3 bg-slate-600 text-blue-200 rounded-lg shadow-lg hover:bg-slate-700 hover:shadow-xl transition-all duration-300"
        >
          Upcoming Projects
        </a>
      </div>
    </section>
  );
}