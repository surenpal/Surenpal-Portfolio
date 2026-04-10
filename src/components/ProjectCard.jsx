import { motion } from "motion/react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectCard({ title, description, url, github, imgSrc, tags = [], featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="group relative w-full rounded-2xl overflow-hidden flex flex-col
        bg-white/60 dark:bg-white/5
        border border-gray-200/60 dark:border-white/10
        shadow-lg shadow-black/5 dark:shadow-black/20
        hover:border-yellow-500/40 hover:shadow-yellow-500/10
        transition-all duration-300"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl
        bg-gradient-to-br from-yellow-400/5 via-pink-400/5 to-purple-400/5
        transition-opacity duration-300 pointer-events-none" />

      {/* Featured badge */}
      {featured && (
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5
          px-2.5 py-1 rounded-full text-[11px] font-bold
          bg-yellow-500 text-black shadow-md">
          ★ Featured
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden h-40">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover
            transition duration-500
            group-hover:scale-105 group-hover:brightness-90"
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col flex-1 p-3 z-10 text-left">

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold mb-2
          text-gray-900 dark:text-gray-100
          group-hover:text-yellow-500 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 mb-4 flex-1">
          {description}
        </p>

        {/* Tech tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full
                bg-gray-100 dark:bg-white/10
                text-gray-600 dark:text-gray-400">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex items-center gap-3 mt-auto">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-semibold
              bg-yellow-500 text-black
              hover:bg-yellow-400 transition-colors"
          >
            <FiExternalLink size={14} />
            Live Demo
          </a>

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-semibold
                border border-gray-300 dark:border-white/20
                text-gray-700 dark:text-gray-300
                hover:border-yellow-500 hover:text-yellow-500
                transition-colors"
            >
              <FiGithub size={14} />
              GitHub
            </a>
          )}
        </div>

      </div>
    </motion.div>
  );
}
