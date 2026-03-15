import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center  pb-24 px-6
      bg-white dark:bg-gray-900
      text-gray-900 dark:text-gray-100"
    >

      {/* WIDTH INCREASED HERE */}
      <div className="max-w-2xl w-full text-center">

        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Contact Me
        </h2>

        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-10 rounded"></div>

        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Feel free to reach out for collaboration or questions.
        </p>

        <div
          className="group relative
          bg-gray-100 dark:bg-gray-800
          p-8 rounded-xl
          shadow-md
          hover:-translate-y-1
          hover:shadow-yellow-500/20 hover:shadow-lg
          transition duration-300"
        >

          <div
            className="absolute inset-0 rounded-xl
            border border-yellow-400/20
            group-hover:border-yellow-400
            transition"
          />

          <form className="flex flex-col gap-4 relative z-10">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg
              bg-white dark:bg-gray-900
              border border-gray-300 dark:border-gray-700
              focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500
              outline-none transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg
              bg-white dark:bg-gray-900
              border border-gray-300 dark:border-gray-700
              focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500
              outline-none transition"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="p-3 rounded-lg
              bg-white dark:bg-gray-900
              border border-gray-300 dark:border-gray-700
              focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500
              outline-none transition"
            ></textarea>

            <button
              className="mt-2 px-6 py-3
              bg-gray-800 dark:bg-gray-700
              text-white font-semibold
              rounded-lg
              hover:bg-yellow-500 hover:text-black
              transition transform hover:scale-105"
            >
              Send Message
            </button>

          </form>

        </div>

        <div className="flex justify-center gap-8 mt-10 text-2xl">

          <a
            href="https://github.com"
            target="_blank"
            className="text-gray-700 dark:text-gray-300
            hover:text-yellow-500
            hover:scale-125
            transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-700 dark:text-gray-300
            hover:text-yellow-500
            hover:scale-125
            transition"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

    </section>
  );
}