import { motion } from "motion/react";
import FadeInSection from "./FadeInSection";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiGithub, SiNodedotjs } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const categories = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML",       level: 80, label: "Advanced",     icon: <FaHtml5 />,      color: "#e34f26" },
      { name: "CSS",        level: 80, label: "Advanced",     icon: <FaCss3Alt />,    color: "#1572b6" },
      { name: "JavaScript", level: 70, label: "Intermediate", icon: <FaJs />,         color: "#f7df1e" },
      { name: "React",      level: 60, label: "Intermediate", icon: <FaReact />,      color: "#61dafb" },
      { name: "Tailwind",   level: 75, label: "Intermediate", icon: <SiTailwindcss />,color: "#06b6d4" },
    ],
  },
  {
    label: "Backend & DB",
    skills: [
      { name: "Node.js",  level: 40, label: "Beginner",     icon: <SiNodedotjs />, learning: true, color: "#339933" },
      { name: "MongoDB",  level: 45, label: "Beginner",     icon: <SiMongodb />,   learning: true, color: "#47a248" },
      { name: "Python",   level: 50, label: "Beginner",     icon: <FaPython />,    color: "#3776ab" },
      { name: "Java",     level: 50, label: "Beginner",     icon: <FaJava />,      color: "#f89820" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "GitHub",   level: 65, label: "Intermediate", icon: <SiGithub />,  color: "#ffffff" },
      { name: "VS Code",  level: 80, label: "Advanced",     icon: <VscVscode />, color: "#007acc" },
    ],
  },
];

const levelColor = {
  Beginner:     "text-blue-400",
  Intermediate: "text-yellow-500",
  Advanced:     "text-green-400",
};

function SkillCard({ skill, i }) {
  const size = 112;
  const radius = size / 2 - 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (skill.level / 100) * circumference;
  const gradientId = `grad-${skill.name.replace(/\s/g, "")}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: i * 0.07 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group relative
        backdrop-blur-lg
        bg-white/60 dark:bg-white/5
        border border-gray-200/60 dark:border-white/10
        p-5 sm:p-6 rounded-2xl
        shadow-lg shadow-black/5 dark:shadow-black/20
        hover:border-yellow-500/40 hover:shadow-yellow-500/10
        transition-all duration-300 flex flex-col items-center"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
        bg-gradient-to-br from-yellow-400/5 via-pink-400/5 to-purple-400/5
        transition-opacity duration-300" />

      {/* Learning badge */}
      {skill.learning && (
        <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5
          rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
          Learning
        </span>
      )}

      {/* Icon */}
      <div className="relative text-3xl mb-4 z-10" style={{ color: skill.color }}>
        {skill.icon}
      </div>

      {/* Gradient Progress Ring */}
      <div className="relative w-24 h-24 mx-auto mb-3 z-10">
        <svg className="w-full h-full -rotate-90" viewBox={`0 0 ${size} ${size}`}>
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#facc15" />
              <stop offset="50%"  stopColor="#ec4899" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>

          {/* Background ring */}
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            stroke="currentColor"
            className="text-gray-200 dark:text-gray-700"
            strokeWidth="7" fill="transparent"
          />

          {/* Animated gradient progress */}
          <motion.circle
            cx={size / 2} cy={size / 2} r={radius}
            stroke={`url(#${gradientId})`}
            strokeWidth="7" fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </svg>

        {/* Center label */}
        <span className={`absolute inset-0 flex items-center justify-center
          text-[11px] font-bold ${levelColor[skill.label]}`}>
          {skill.label}
        </span>
      </div>

      {/* Skill name */}
      <p className="relative text-sm sm:text-base font-semibold z-10 group-hover:text-yellow-500 transition-colors">
        {skill.name}
      </p>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-24
      text-gray-900 dark:text-gray-100"
    >
      <FadeInSection>
        <div className="max-w-6xl mx-auto text-center">

          {/* Header */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2"
          >
            What I work with
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4"
          >
            Skills
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-yellow-500 mx-auto mb-16 rounded"
          />

          {/* Categories */}
          <div className="space-y-14">
            {categories.map((cat) => (
              <div key={cat.label}>

                {/* Category label */}
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-left text-xs uppercase tracking-widest
                    text-gray-400 dark:text-gray-500 mb-6 pl-1
                    border-l-2 border-yellow-500 pl-3"
                >
                  {cat.label}
                </motion.h3>

                {/* Skill cards */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  {cat.skills.map((skill, i) => (
                    <div key={skill.name} className="w-[140px] sm:w-[160px]">
                      <SkillCard skill={skill} i={i} />
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-6 mt-14 text-xs text-gray-500 dark:text-gray-400"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400" /> Advanced
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-yellow-500" /> Intermediate
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400" /> Beginner
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400" /> Learning
            </span>
          </motion.div>

        </div>
      </FadeInSection>
    </section>
  );
}
