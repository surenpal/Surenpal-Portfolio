import { motion } from "framer-motion";

export default function MyCareer() {

  const items = [
    {
      year: "2019",
      title: "Japanese Language School",
      text: "Learned Japanese language and culture at Nagoya Fukutoku Nihongo Gakuin."
    },
    {
      year: "2021",
      title: "2 Years IT College Degree",
      text: "Completed a two-year IT course at Nagoya Future Technology College."
    },
    {
      year: "2022",
      title: "Sales Manager",
      text: "Developed strong communication and leadership skills."
    },
    {
      year: "2023",
      title: "React Developer Journey",
      text: "Started building modern web applications and learner-friendly resources."
    },
    {
      year: "Future",
      title: "Full Stack Developer",
      text: "Working toward becoming a skilled Full Stack Developer."
    }
  ];

  return (
    <section className="w-full py-20 px-6">

      {/* Section Title */}
      <div className="text-center mb-20">

        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100">
          Career Timeline
        </h2>

        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4 rounded"></div>

      </div>

      {/* Timeline Container */}
      <div className="relative">

        {/* Animated Timeline Line */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px]
          bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600
          origin-top shadow-[0_0_10px_rgba(234,179,8,0.7)]"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <div className="space-y-20">

          {items.map((item, i) => {

            const isLeft = i % 2 === 0;

            return (

              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >

                {/* Career Card */}
                <div
                  className="group w-full md:w-[45%]
                  bg-gray-100 dark:bg-gray-800
                  rounded-xl p-8
                  shadow-md
                  hover:-translate-y-2
                  hover:shadow-yellow-500/20 hover:shadow-lg
                  transition duration-300"
                >

                  {/* Year */}
                  <p
                    className="text-base font-semibold text-yellow-500 mb-2
                    transition duration-300
                    group-hover:scale-110"
                  >
                    {item.year}
                  </p>

                  {/* Title */}
                  <h3
                    className="text-xl font-semibold text-gray-900 dark:text-white mb-3
                    transition-all duration-300
                    group-hover:text-yellow-500 group-hover:scale-105"
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {item.text}
                  </p>

                </div>

                {/* Timeline Dot */}
                <div
                  className="absolute left-1/2 -translate-x-1/2
                  w-6 h-6 rounded-full
                  bg-yellow-500
                  border-4 border-white dark:border-gray-900
                  transition-transform duration-300
                  hover:scale-125"
                />

              </motion.div>

            );
          })}

        </div>
      </div>

    </section>
  );
}