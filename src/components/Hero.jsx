import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 pb-16
      bg-white dark:bg-oklch(86.8% 0.007 39.5)
      text-gray-900"
    >
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-yellow-500">
          Hi, I'm Suren Pal
        </h1>

        <TypeAnimation
          sequence={[
            "React Developer",
            2000,
            "Full Stack Developer",
            2000,
            "Good Learner",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-lg text-gray-600 mb-8"
        />

        <a
          href="#projects"
          className="mt-6 px-8 py-3 bg-slate-600 text-blue-200 rounded-lg shadow-lg
          hover:bg-slate-700 hover:shadow-xl transition-all duration-300"
        >
          View My Projects
        </a>

      </div>
    </section>
  );
}