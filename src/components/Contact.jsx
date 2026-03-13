import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 pb-16
      bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-xl w-full text-center">

        <h2 className="text-4xl font-extrabold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Feel free to reach out for collaboration or questions.
        </p>

        {/* Contact Form */}
        <form className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 outline-none"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 outline-none"
          ></textarea>

          <button
            className="px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg
            hover:bg-gray-700 dark:hover:bg-gray-600 transition transform hover:scale-105"
          >
            Send Message
          </button>

        </form>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8 text-2xl">

          <a
            href="https://github.com"
            target="_blank"
            className="hover:scale-125 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:scale-125 transition"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </section>
  );
}