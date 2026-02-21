import MyCareer from "./MyCareer";

export default function About() {
  return (
    <section
      id="about"
      className=" relative w-full py-24 px-6 text-center bg-[url('/bg-img-all.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-white/60"></div>

       <div className="bg-white/0 backdrop-blur-sm p-8 rounded-2xl inline-block max-w-3xl mx-auto border-none">
        <h2 className="text-4xl font-extrabold text-green-600 mb-6">
          About Me
        </h2>

        <p className="text-gray-700 leading-relaxed text-lg mb-10">
          I am a React developer who loves building learner-friendly resources.
          I enjoy simplifying complex topics and creating clean,<br /> scalable
          projects for teaching and real-world use.
        </p>
      <MyCareer />
      </div>
    </section>
  );
}