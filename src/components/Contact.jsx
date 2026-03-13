export default function Contact() {
  return (
<section
  id="contact"
  className="min-h-screen flex flex-col items-center justify-center px-6 pb-16 p-10 
      bg-white dark:bg-gray-900 
      text-gray-900 dark:text-white "
>
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10">
    <h2 className="text-4xl font-extrabold text-gray-400 mb-6">
      Contact
    </h2>

    <p className="text-gray-100 text-lg mb-8">
      Feel free to reach out for collaboration or questions.
    </p>

    <a
      href="mailto:example@email.com"
      className="px-8 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 hover:shadow-xl transition-all duration-300"
    >
      Email Me
    </a>
  </div>
</section>

  );
}