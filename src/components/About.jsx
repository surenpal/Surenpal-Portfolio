import MyCareer from "./MyCareer";
import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="min-h-screen flex items-center justify-center px-6 py-24
      text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto text-center">

        <FadeInSection>

          {/* Intro */}
          <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Get to know me
          </p>

          {/* Title */}
          <h2
            id="about-title"
            className="text-4xl sm:text-5xl font-extrabold mb-4"
          >
            About Me
          </h2>

          {/* Divider */}
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-8 rounded"></div>

          {/* Description */}
          <div className="mb-16 max-w-xl sm:max-w-2xl mx-auto space-y-4 text-gray-600 dark:text-gray-300">

            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              I am a <span className="text-yellow-500 font-semibold">React developer</span>
              passionate about building
              <span className="text-yellow-500 font-semibold"> modern, responsive web applications</span>.
            </p>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              I enjoy simplifying
              <span className="text-yellow-500 font-semibold"> complex problems</span>
              and creating clean, scalable projects that deliver
              <span className="text-yellow-500 font-semibold"> meaningful user experiences</span>.
            </p>

          </div>

          {/* Timeline */}
          <div className="w-full mt-16">
            <MyCareer />
          </div>

        </FadeInSection>

      </div>
    </section>
  );
}