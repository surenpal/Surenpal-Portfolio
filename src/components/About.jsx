import MyCareer from "./MyCareer";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 pb-16
      bg-white dark:bg-gray-900
      text-gray-900 dark:text-white"
    >

      <div className="relative p-8 rounded-2xl inline-block max-w-3xl mx-auto">

        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
          About Me
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-10">
          I am a React developer who loves building learner-friendly resources.
          I enjoy simplifying complex topics and creating clean, scalable
          projects for teaching and real-world use.
        </p>

        <MyCareer />

      </div>

    </section>
  );
}