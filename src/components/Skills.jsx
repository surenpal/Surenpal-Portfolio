import { motion } from "motion/react";
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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pb-20 sm:pb-24 text-gray-900 dark:text-gray-100"
    >
      <FadeInSection>
        <div className="max-w-6xl mx-auto text-center">

          {/* Title */}
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold mb-4">
            Skills
          </h2>

          <div className="w-14 sm:w-16 h-1 bg-yellow-500 mx-auto mb-10 sm:mb-12 rounded"></div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 justify-items-center">

            {skills.map((skill, i) => {
              const size = 112;
              const radius = size / 2 - 10;
              const circumference = 2 * Math.PI * radius;
              const offset = circumference - (skill.level / 100) * circumference;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="relative group w-[140px] xs:w-[160px] sm:w-52
                  backdrop-blur-lg
                  bg-white/10 dark:bg-white/5
                  border border-white/20
                  p-4 xs:p-5 sm:p-8 rounded-2xl
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
                  <div className="relative text-2xl xs:text-3xl sm:text-4xl text-yellow-500 mb-4 sm:mb-6 flex justify-center z-10">
                    {skill.icon}
                  </div>

                  {/* Progress Ring */}
                  <div className="relative w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 mx-auto mb-3 sm:mb-4 z-10">
                    <svg className="w-full h-full -rotate-90" viewBox={`0 0 ${size} ${size}`}>

                      {/* Background ring */}
                      <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="currentColor"
                        className="text-gray-300 dark:text-gray-700"
                        strokeWidth="6"
                        fill="transparent"
                      />

                      {/* Animated progress */}
                      <motion.circle
                        cx={size / 2}
                        cy={size / 2}
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
                    text-xs xs:text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Name */}
                  <p className="relative text-sm xs:text-base sm:text-lg font-semibold z-10">
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


