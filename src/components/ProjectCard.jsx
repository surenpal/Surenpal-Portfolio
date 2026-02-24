export default function ProjectCard({ title, description, url, imgSrc }) {
  return (
    <div className="w-64 bg-gray-900 rounded-xl overflow-hidden shadow-md">
      <div className="overflow-hidden">
        <img
          src={imgSrc}
          className="w-full h-40 object-contain transition duration-300 hover:scale-110 p-5"
        />
      </div>

      <div className="p-4 text-center bg-gray-900">
        <h2 className="text-lg font-semibold text-gray-300">{title}</h2>

        <p className="text-sm text-gray-400 mt-2">
          {description}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-medium hover:underline mt-3 inline-block text-shadow-md" 
        >
          Visit Project
        </a>
      </div>
    </div>
  );
}