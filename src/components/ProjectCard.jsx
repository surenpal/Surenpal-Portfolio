import { motion } from "framer-motion";

export default function ProjectCard({ title, description, url, imgSrc }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      className="group relative w-[260px] xs:w-72 rounded-2xl overflow-hidden
      backdrop-blur-lg
      bg-white/10 dark:bg-white/5
      border border-white/20
      shadow-lg"
    >

      {/* 🌈 Gradient Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100
      bg-gradient-to-r from-yellow-400/20 via-pink-400/20 to-purple-400/20
      blur-2xl transition duration-500" />

      {/* 🖼️ Image */}
      <div className="relative overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-40 xs:h-48 object-cover
          transition duration-500
          group-hover:scale-110 group-hover:brightness-75"
        />

        {/* 🔥 Overlay */}
        <div className="
          absolute inset-0 flex items-center justify-center
          opacity-100 xs:opacity-0 xs:group-hover:opacity-100
          transition duration-500
        ">

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-4 py-2 xs:px-6 xs:py-2
              text-xs xs:text-sm
              rounded-lg
              bg-yellow-500 text-black font-semibold
              shadow-md
              hover:scale-105
              transition
              whitespace-nowrap
            "
          >
            View Project
          </a>
        </div>
      </div>

      {/* 📄 Content */}
      <div className="relative p-4 xs:p-5 text-center z-10">

        {/* Title */}
        <h2 className="text-base xs:text-lg font-semibold mb-2
        text-gray-900 dark:text-gray-100
        group-hover:text-yellow-500 transition">
          {title}
        </h2>

        {/* Description */}
        <p className="text-xs xs:text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>

      </div>
    </motion.div>
  );
}