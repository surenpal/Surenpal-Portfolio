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
    <section className="relative max-w-4xl mx-auto py-16">

      {/* Title */}
      <div className="text-center mb-14">

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
          My Career
        </h2>

        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-3 rounded"></div>

      </div>

      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-300 dark:bg-gray-700"></div>

      <div className="space-y-16">

        {items.map((item, i) => {

          const isLeft = i % 2 === 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"
                }`}
            >

              {/* Card */}
              <div className="w-[45%] bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition">

                <p className="text-sm font-semibold text-yellow-500 mb-1">
                  {item.year}
                </p>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.text}
                </p>

              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-yellow-500 border-4 border-white dark:border-gray-900"></div>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}