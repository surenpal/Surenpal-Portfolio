import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    setErrors({});
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center pb-24 px-6
      text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-2xl w-full text-center">

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Contact Me
        </h2>

        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-10 rounded"></div>

        <p className="font-semibold mb-12 text-gray-600 dark:text-gray-400">
          Feel free to reach out for collaboration or questions.
        </p>

        {/* 💎 Glass Form */}
        <div className="backdrop-blur-xl bg-white/10 dark:bg-white/5
        border border-white/20 rounded-2xl p-8 shadow-lg">

          <form onSubmit={handleSubmit} className="flex flex-col gap-10 text-left">

            {/* INPUTS */}
            {["name", "email"].map((field) => (
              <div key={field} className="relative group">

                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full bg-transparent py-2
                  border-b border-gray-400/50 dark:border-gray-600/50
                  focus:outline-none transition"
                />

                {/* Animated underline */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px]
                bg-yellow-500 transition-all duration-300
                group-focus-within:w-full" />

                <label
                  className="absolute left-0 top-2 text-gray-500 dark:text-gray-400
                  transition-all text-sm
                  peer-placeholder-shown:top-2
                  peer-placeholder-shown:text-base
                  peer-focus:-top-3 peer-focus:text-sm peer-focus:text-yellow-500
                  peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm"
                >
                  {field === "name" ? "Your Name" : "Your Email"}
                </label>

                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[field]}
                  </p>
                )}
              </div>
            ))}

            {/* TEXTAREA */}
            <div className="relative group">

              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-transparent py-2 resize-none
                border-b border-gray-400/50 dark:border-gray-600/50
                focus:outline-none transition"
              />

              <span className="absolute left-0 bottom-0 w-0 h-[2px]
              bg-yellow-500 transition-all duration-300
              group-focus-within:w-full" />

              <label
                className="absolute left-0 top-2 text-gray-500 dark:text-gray-400
                transition-all text-sm
                peer-placeholder-shown:top-2
                peer-placeholder-shown:text-base
                peer-focus:-top-3 peer-focus:text-sm peer-focus:text-yellow-500
                peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm"
              >
                Your Message
              </label>

              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* SUCCESS */}
            {success && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-500 text-center font-medium"
              >
                ✅ Message sent successfully!
              </motion.p>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="mt-4 px-6 py-3 rounded-xl
              bg-gray-800 dark:bg-gray-700 text-white font-semibold
              hover:bg-yellow-500 hover:text-black
              transition flex items-center justify-center gap-2
              shadow-md hover:shadow-yellow-500/30"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent
                rounded-full animate-spin"></span>
              ) : (
                "Send Message"
              )}
            </button>

          </form>
        </div>

        {/* SOCIALS */}
        <div className="flex justify-center gap-8 mt-12 text-2xl">

          <a
            href="https://github.com"
            target="_blank"
            className="text-gray-700 dark:text-gray-300
            hover:text-yellow-500 hover:scale-125 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-700 dark:text-gray-300
            hover:text-yellow-500 hover:scale-125 transition"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </section>
  );
}