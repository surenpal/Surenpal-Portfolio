import MyCareer from "./MyCareer";
import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-24
      text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto text-center">

        <FadeInSection>

          {/* Section Title */}
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            About Me
          </h2>

          {/* Divider */}
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-8 rounded"></div>

          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            I am a React developer passionate about building modern, responsive
            web applications. I enjoy simplifying complex problems and creating
            clean, scalable projects that provide meaningful user experiences.
          </p>

        </FadeInSection>

        {/* Timeline */}
        <div className="w-full">
          <FadeInSection>
            <MyCareer />
          </FadeInSection>
        </div>

      </div>
    </section>
  );
}