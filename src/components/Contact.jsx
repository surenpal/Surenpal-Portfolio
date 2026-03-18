import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

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
    } else {
      setErrors({});
      setSuccess(true);

      // Reset form
      setForm({ name: "", email: "", message: "" });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

        <p className="text-gray-600 dark:text-gray-400 font-semibold mb-12">
          Feel free to reach out for collaboration or questions.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-10 text-left">

          {/* FLOATING INPUT */}
          {["name", "email"].map((field) => (
            <div key={field} className="relative">
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={form[field]}
                onChange={handleChange}
                className="peer w-full bg-transparent border-b border-gray-400 dark:border-gray-600
                py-2 focus:outline-none focus:border-yellow-500 transition"
                placeholder=" "
              />
              <label
                className="absolute left-0 top-2 text-gray-500 dark:text-gray-400
                text-sm transition-all
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
          <div className="relative">
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="peer w-full bg-transparent border-b border-gray-400 dark:border-gray-600
              py-2 resize-none focus:outline-none focus:border-yellow-500 transition"
              placeholder=" "
            ></textarea>

            <label
              className="absolute left-0 top-2 text-gray-500 dark:text-gray-400
              text-sm transition-all
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

          {/* SUCCESS MESSAGE */}
          {success && (
            <p className="text-green-500 font-medium text-center">
              ✅ Message sent successfully!
            </p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="mt-4 px-6 py-3
            bg-gray-800 dark:bg-gray-700
            text-white font-semibold
            rounded-xl
            hover:bg-yellow-500 hover:text-black
            transition transform hover:scale-105
            shadow-md hover:shadow-yellow-500/30"
          >
            Send Message
          </button>

        </form>

        {/* SOCIALS */}
        <div className="flex justify-center gap-8 mt-12 text-2xl">

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