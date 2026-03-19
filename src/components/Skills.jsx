import { motion } from "framer-motion";

export default function MyCareer() {
  const items = [
    {
      year: "2019",
      title: "Japanese Language School",
      text: "Learned Japanese language and culture at Nagoya Fukutoku Nihongo Gakuin.",
    },
    {
      year: "2021",
      title: "2 Years IT College Degree",
      text: "Completed a two-year IT course at Nagoya Future Technology College.",
    },
    {
      year: "2022",
      title: "Sales Manager",
      text: "Developed strong communication and leadership skills.",
    },
    {
      year: "2023",
      title: "React Developer Journey",
      text: "Started building modern web applications and learner-friendly resources.",
    },
    {
      year: "Future",
      title: "Full Stack Developer",
      text: "Working toward becoming a skilled Full Stack Developer.",
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6">

      {/* Title */}
      <div className="text-center mb-16 sm:mb-20">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold">
          Career Timeline
        </h2>
        <div className="w-14 sm:w-16 h-1 bg-yellow-500 mx-auto mt-4 rounded"></div>
      </div>

      <div className="relative">

        {/* 🌈 Animated Line (hidden on small screens) */}
        <motion.div
          className="hidden xs:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px]
          bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-500
          origin-top blur-[1px]"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <div className="space-y-16 sm:space-y-20">
          {items.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }} // reduced for mobile
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >

                {/* 💎 Glass Card */}
                <div
                  className="group relative w-full md:w-[45%]
                  backdrop-blur-xl
                  bg-white/10 dark:bg-white/5
                  border border-white/20
                  rounded-2xl p-5 sm:p-8
                  shadow-lg
                  hover:-translate-y-2
                  hover:shadow-yellow-500/20
                  transition-all duration-300"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                  bg-gradient-to-r from-yellow-400/10 via-pink-400/10 to-purple-400/10
                  blur-xl transition" />

                  {/* Content */}
                  <p className="relative text-yellow-500 font-semibold mb-2 z-10 text-sm sm:text-base">
                    {item.year}
                  </p>

                  <h3 className="relative text-lg sm:text-xl font-semibold mb-2 sm:mb-3 z-10
                  group-hover:text-yellow-500 transition">
                    {item.title}
                  </h3>

                  <p className="relative text-gray-600 dark:text-gray-300 z-10 text-sm sm:text-base">
                    {item.text}
                  </p>
                </div>

                {/* 🔥 Animated Dot (only desktop) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  
                  <span className="absolute w-10 h-10 bg-yellow-400/30 rounded-full animate-ping"></span>

                  <div
                    className="relative w-6 h-6 rounded-full
                    bg-yellow-500
                    border-4 border-white dark:border-gray-900
                    shadow-[0_0_12px_rgba(234,179,8,0.8)]"
                  />
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}