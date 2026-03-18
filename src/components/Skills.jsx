import { motion } from "framer-motion";
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
    { name: "Python", level: 50, icon: <FaPython /> }
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 pb-30
      bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group w-52
                bg-gray-100 dark:bg-gray-800
                p-8 rounded-2xl shadow-md
                hover:shadow-yellow-500/20 hover:shadow-lg
                transition duration-300"
              >

                {/* Icon */}
                <div className="text-4xl text-yellow-500 mb-6 flex justify-center">
                  {skill.icon}
                </div>

                {/* Progress Ring */}
                <div className="relative w-28 h-28 mx-auto mb-4">

                  <svg className="w-full h-full transform -rotate-90">

                    <circle
                      cx="56"
                      cy="56"
                      r={radius}
                      stroke="#374151"
                      strokeWidth="7"
                      fill="transparent"
                    />

                    <circle
                      cx="56"
                      cy="56"
                      r={radius}
                      stroke="#eab308"
                      strokeWidth="7"
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      className="transition-all duration-700"
                    />

                  </svg>

                  <span className="absolute inset-0 flex items-center justify-center
                  text-base font-semibold text-gray-700 dark:text-gray-200">
                    {skill.level}%
                  </span>

                </div>

                {/* Skill Name */}
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {skill.name}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}