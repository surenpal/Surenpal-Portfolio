import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function MyCareer() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      id: 1,
      year: "2019",
      title: "Japanese Language School",
      text: "Learned Japanese language and culture at Nagoya Fukutoku Nihongo Gakuin.",
      icon: <FaGraduationCap />,
    },
    {
      id: 2,
      year: "2021",
      title: "2 Years IT College Degree",
      text: "Completed a two-year IT course at Nagoya Future Technology College.",
      icon: <FaGraduationCap />,
    },
    {
      id: 3,
      year: "2022",
      title: "Sales Manager",
      text: "Developed strong communication and leadership skills.",
      icon: <FaBriefcase />,
    },
    {
      id: 4,
      year: "2023",
      title: "React Developer Journey",
      text: "Started building modern web applications and learner-friendly resources.",
      icon: <FaCode />,
    },
    {
      id: 5,
      year: "Future",
      title: "Full Stack Developer",
      text: "Working toward becoming a skilled Full Stack Developer.",
      icon: <FaCode />,
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 px-3 xs:px-4 sm:px-6">

      {/* Title */}
      <div className="text-center mb-14 sm:mb-20">
        <h2 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold">
          Career Timeline
        </h2>
        <div className="w-12 sm:w-16 h-1 bg-yellow-500 mx-auto mt-3 sm:mt-4 rounded"></div>
      </div>

      <div className="relative">

        {/* 🌈 Center Line */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px]
          bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-500 blur-[1px]"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        />

        <div className="space-y-14 sm:space-y-20">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >

              {/* 💎 Card (WIDER on large screens) */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="group relative w-full sm:w-[90%] md:w-[65%] lg:w-[70%] max-w-3xl
                backdrop-blur-xl
                bg-gradient-to-br from-white/10 to-white/5
                rounded-2xl p-4 xs:p-5 sm:p-8
                shadow-xl shadow-black/10 dark:shadow-black/30
                hover:-translate-y-2
                hover:shadow-yellow-500/20
                transition-all duration-300 cursor-pointer"
              >

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                bg-gradient-to-r from-yellow-400/10 via-pink-400/10 to-purple-400/10
                blur-xl transition" />

                {/* Icon */}
                <div className="relative text-yellow-500 text-xl mb-2 z-10">
                  {item.icon}
                </div>

                {/* Year */}
                <p className="relative text-yellow-500 font-semibold mb-1 z-10 text-sm sm:text-base">
                  {item.year}
                  {item.year === "Future" && (
                    <span className="ml-2 text-xs bg-yellow-500 text-black px-2 py-0.5 rounded-full">
                      Current
                    </span>
                  )}
                </p>

                {/* Title */}
                <h3 className="relative text-lg sm:text-xl md:text-2xl font-semibold mb-2 z-10
                group-hover:text-yellow-500 transition">
                  {item.title}
                </h3>

                {/* Text */}
                <p
                  className={`relative text-gray-600 dark:text-gray-300 z-10 text-sm sm:text-base leading-relaxed
                  ${openIndex === i ? "" : "line-clamp-2 sm:line-clamp-none"}`}
                >
                  {item.text}
                </p>
              </motion.div>

              {/* 🔥 Center Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                <span className="absolute w-10 h-10 bg-yellow-400/30 rounded-full animate-ping"></span>
                <div className="relative w-6 h-6 rounded-full
                  bg-yellow-500
                  border-4 border-white dark:border-gray-900
                  shadow-[0_0_12px_rgba(234,179,8,0.8)]"
                />
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}