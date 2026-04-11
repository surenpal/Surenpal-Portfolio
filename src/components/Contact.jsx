import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiMapPin, FiCopy, FiCheck, FiSend } from "react-icons/fi";

// ── Replace these with your EmailJS credentials ──────────────────────────────
const SERVICE_ID  = "service_01vctup";
const TEMPLATE_ID = "template_xjo0bae";
const PUBLIC_KEY  = "S_SSqHYhPJcqObC8g";
// ─────────────────────────────────────────────────────────────────────────────

const EMAIL    = "surenpal@email.com";       // ← your email
const GITHUB   = "https://github.com/surenpal";     // ← your GitHub
const LINKEDIN = "https://www.linkedin.com/in/surendra-jirel-592b8a397/"; // ← your LinkedIn

const info = [
  {
    icon: <FiMail size={16} />,
    label: "Email",
    value: EMAIL,
    copyable: true,
  },
  {
    icon: <FiMapPin size={16} />,
    label: "Location",
    value: "Tokyo, Japan",
  },
  {
    icon: <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />,
    label: "Status",
    value: "Open to opportunities",
  },
];

export default function Contact() {
  const formRef = useRef(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center pb-24 px-6 py-24
      text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto w-full">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2"
          >
            Get in touch
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4"
          >
            Contact Me
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-yellow-500 mx-auto rounded"
          />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left — Info + Socials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">Let's work together</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                I'm currently open to new opportunities — whether it's a full-time role,
                freelance project, or just a chat. Feel free to reach out!
              </p>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-4">
              {info.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-yellow-500/10 text-yellow-500
                    flex items-center justify-center shrink-0">
                    {item.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-400 dark:text-gray-500">{item.label}</p>
                    <p className="text-sm font-medium truncate">{item.value}</p>
                  </div>
                  {item.copyable && (
                    <button
                      onClick={copyEmail}
                      className="text-gray-400 hover:text-yellow-500 transition-colors shrink-0"
                      title="Copy email"
                    >
                      {copied ? <FiCheck size={15} className="text-green-400" /> : <FiCopy size={15} />}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                Find me on
              </p>
              <div className="flex gap-4">
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold
                    border border-gray-200 dark:border-white/10
                    text-gray-700 dark:text-gray-300
                    hover:border-yellow-500 hover:text-yellow-500
                    transition-all duration-200"
                >
                  <FaGithub size={16} /> GitHub
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold
                    border border-gray-200 dark:border-white/10
                    text-gray-700 dark:text-gray-300
                    hover:border-yellow-500 hover:text-yellow-500
                    transition-all duration-200"
                >
                  <FaLinkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="backdrop-blur-xl bg-white/60 dark:bg-white/5
              border border-gray-200/60 dark:border-white/10
              rounded-2xl p-6 sm:p-8 shadow-lg shadow-black/5 dark:shadow-black/20">

              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">

                {/* Name */}
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-transparent py-2
                      border-b border-gray-300/60 dark:border-gray-600/50
                      focus:outline-none transition"
                  />
                  <span className="absolute left-0 bottom-0 w-0 h-[2px]
                    bg-yellow-500 transition-all duration-300 group-focus-within:w-full" />
                  <label className="absolute left-0 top-2 text-gray-500 dark:text-gray-400
                    transition-all text-sm pointer-events-none
                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-base
                    peer-focus:-top-3 peer-focus:text-sm peer-focus:text-yellow-500
                    peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm">
                    Your Name
                  </label>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-transparent py-2
                      border-b border-gray-300/60 dark:border-gray-600/50
                      focus:outline-none transition"
                  />
                  <span className="absolute left-0 bottom-0 w-0 h-[2px]
                    bg-yellow-500 transition-all duration-300 group-focus-within:w-full" />
                  <label className="absolute left-0 top-2 text-gray-500 dark:text-gray-400
                    transition-all text-sm pointer-events-none
                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-base
                    peer-focus:-top-3 peer-focus:text-sm peer-focus:text-yellow-500
                    peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm">
                    Your Email
                  </label>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Message */}
                <div className="relative group">
                  <textarea
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-transparent py-2 resize-none
                      border-b border-gray-300/60 dark:border-gray-600/50
                      focus:outline-none transition"
                  />
                  <span className="absolute left-0 bottom-0 w-0 h-[2px]
                    bg-yellow-500 transition-all duration-300 group-focus-within:w-full" />
                  <label className="absolute left-0 top-2 text-gray-500 dark:text-gray-400
                    transition-all text-sm pointer-events-none
                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-base
                    peer-focus:-top-3 peer-focus:text-sm peer-focus:text-yellow-500
                    peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm">
                    Your Message
                  </label>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Status messages */}
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.p
                      key="success"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-green-500 text-sm font-medium text-center"
                    >
                      ✅ Message sent successfully!
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p
                      key="error"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-500 text-sm font-medium text-center"
                    >
                      ❌ Something went wrong. Please try again.
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-center gap-2
                    px-6 py-3 rounded-xl font-semibold text-sm
                    bg-yellow-500 text-black
                    hover:bg-yellow-400
                    disabled:opacity-60 disabled:cursor-not-allowed
                    transition-all duration-200 shadow-md hover:shadow-yellow-500/30"
                >
                  {status === "loading" ? (
                    <span className="w-4 h-4 border-2 border-black border-t-transparent
                      rounded-full animate-spin" />
                  ) : (
                    <>
                      <FiSend size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
