import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center pb-24 px-6
      bg-white dark:bg-gray-900
      text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-2xl w-full text-center">

        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Contact Me
        </h2>

        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-10 rounded"></div>

        {/* ✅ Bold text */}
        <p className="text-gray-600 dark:text-gray-400 font-semibold mb-10">
          Feel free to reach out for collaboration or questions.
        </p>

        {/* ✅ Removed background + border container */}
        <div className="p-8">

          <form className="flex flex-col gap-8">

            {/* NAME */}
            <input
              type="text"
              placeholder="Your Name"
              className="
              bg-transparent
              border-b border-gray-400 dark:border-gray-600
              py-2
              focus:border-yellow-500
              focus:outline-none
              transition
              placeholder-gray-500 dark:placeholder-gray-400"
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Your Email"
              className="
              bg-transparent
              border-b border-gray-400 dark:border-gray-600
              py-2
              focus:border-yellow-500
              focus:outline-none
              transition
              placeholder-gray-500 dark:placeholder-gray-400"
            />

            {/* MESSAGE */}
            <textarea
              rows="4"
              placeholder="Your Message"
              className="
              bg-transparent
              border-b border-gray-400 dark:border-gray-600
              py-2
              resize-none
              focus:border-yellow-500
              focus:outline-none
              transition
              placeholder-gray-500 dark:placeholder-gray-400"
            ></textarea>

            <button
              className="mt-4 px-6 py-3
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