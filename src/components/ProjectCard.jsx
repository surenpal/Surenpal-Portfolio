export default function ProjectCard({ title, description, url, imgSrc }) {
  return (
    <div
      className="group relative w-72
      bg-gray-100 dark:bg-gray-800
      rounded-xl overflow-hidden
      shadow-md
      hover:-translate-y-2
      hover:shadow-yellow-500/20 hover:shadow-lg
      transition duration-300"
    >

      {/* Animated Border */}
      <div
        className="absolute inset-0 rounded-xl
        border border-yellow-400/20
        group-hover:border-yellow-400
        transition"
      />

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-44 object-contain p-6
          transition duration-500
          group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5 text-center">

        {/* Title */}
        <h2
          className="text-lg font-semibold
          text-gray-800 dark:text-gray-200
          transition duration-300
          group-hover:text-yellow-500"
        >
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          {description}
        </p>

        {/* Button */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4
          font-semibold
          text-gray-800 dark:text-gray-200
          transition duration-300
          group-hover:text-yellow-500"
        >
          Visit Project →
        </a>

      </div>
    </div>
  );
}