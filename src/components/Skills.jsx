import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiGithub } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", level: 60, icon: <FaReact /> },
    { name: "JavaScript", level: 70, icon: <FaJs /> },
    { name: "Tailwind", level: 75, icon: <SiTailwindcss /> },
    { name: "HTML", level: 80, icon: <FaHtml5 /> },
    { name: "CSS", level: 80, icon: <FaCss3Alt /> },
    { name: "GitHub", level: 65, icon: <SiGithub /> },
    { name: "MongoDB", level: 55, icon: <SiMongodb /> },
    { name: "Java", level: 50, icon: <FaJava /> },
    { name: "Python", level: 50, icon: <FaPython /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 pb-24
      text-gray-900 dark:text-gray-100"
    >
      <FadeInSection>
        <div className="max-w-6xl mx-auto text-center">

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Skills
          </h2>

          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-12 rounded"></div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">

            {skills.map((skill, i) => {
              const radius = 42;
              const circumference = 2 * Math.PI * radius;
              const offset = circumference - (skill.level / 100) * circumference;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="relative group w-52
                  backdrop-blur-lg
                  bg-white/10 dark:bg-white/5
                  border border-white/20
                  p-8 rounded-2xl
                  shadow-lg
                  hover:shadow-yellow-500/20
                  hover:-translate-y-2
                  transition-all duration-300"
                >

                  {/* Glow Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                  bg-gradient-to-r from-yellow-400/10 via-pink-400/10 to-purple-400/10
                  blur-xl transition" />

                  {/* Icon */}
                  <div className="relative text-4xl text-yellow-500 mb-6 flex justify-center z-10">
                    {skill.icon}
                  </div>

                  {/* Progress Ring */}
                  <div className="relative w-28 h-28 mx-auto mb-4 z-10">
                    <svg className="w-full h-full -rotate-90">

                      {/* Background ring */}
                      <circle
                        cx="56"
                        cy="56"
                        r={radius}
                        stroke="currentColor"
                        className="text-gray-300 dark:text-gray-700"
                        strokeWidth="6"
                        fill="transparent"
                      />

                      {/* Animated progress */}
                      <motion.circle
                        cx="56"
                        cy="56"
                        r={radius}
                        stroke="#eab308"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />

                    </svg>

                    <span className="absolute inset-0 flex items-center justify-center
                    text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Name */}
                  <p className="relative text-lg font-semibold z-10">
                    {skill.name}
                  </p>

                </motion.div>
              );
            })}

          </div>
        </div>
      </FadeInSection>
    </section>
  );
}