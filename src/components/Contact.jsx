export default function Contact() {
  return (
<section
  id="contact"
  className="relative w-full py-24 px-6 text-center bg-[url('/bg-all.jpg')] bg-cover bg-center bg-absolute"
>
  <div className="absolute inset-0 bg-black/60"></div>

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