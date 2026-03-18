import { TypeAnimation } from "react-type-animation";

export default function Hero() {

  const name = "Hi, I'm Suren Pal".split("");

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6
      bg-pink-100 dark:bg-gray-900
      text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

        {/* Animated Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-yellow-500">
          {name.map((letter, index) => (
            <span
              key={index}
              className="inline-block animate-jump"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: "0.8s",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>

        {/* Animated Role */}
        <TypeAnimation
          sequence={[
            "React Developer",
            2000,
            "Full Stack Developer",
            2000,
            "Fast Learner",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium"
        />

        <a
          href="#projects"
          className="mt-10 px-8 py-3 bg-yellow-500 text-white rounded-lg
          shadow-md hover:bg-yellow-600 hover:shadow-lg
          transition-all duration-300"
        >
          View Projects
        </a>

      </div>
    </section>
  );
}