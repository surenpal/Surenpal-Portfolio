import ProjectCard from "./ProjectCard";
import weatherImg from "../assets/weather-app.png";
import dateTimeImg from "../assets/date-time-app.png";
import ecommerceImg from "../assets/e-commerce.png";
import loginImg from "../assets/login-page.png";
import myCalculatorImg from "../assets/my-calculater.png";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6
      bg-white dark:bg-gray-900
      text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Title (same style as Skills) */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Projects
        </h2>

        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-12 rounded"></div>

        {/* Responsive Grid (matches Skills layout style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <ProjectCard
            imgSrc={ecommerceImg}
            title="E-Commerce App"
            description="Undergoing e-commerce app built with React, Tailwind and useContext."
            url="https://mela-shopping-e-commerce.vercel.app"
          />

          <ProjectCard
            imgSrc={weatherImg}
            title="Weather App"
            description="A clean weather app built with React and Tailwind."
            url="https://weatherappsuren.vercel.app/"
          />

          <ProjectCard
            imgSrc={dateTimeImg}
            title="Date Time App"
            description="A clean date-time app built with React and Tailwind."
            url="https://datetimeappsuren.vercel.app"
          />

          <ProjectCard
            imgSrc={loginImg}
            title="Login Form"
            description="Login form built with React and Tailwind."
            url="https://loginformreacttailwind.vercel.app/"
          />

          <ProjectCard
            imgSrc={myCalculatorImg}
            title="My Calculator"
            description="Full calculator built with React and Tailwind."
            url="https://mycalculatersuren.vercel.app/"
          />

        </div>

      </div>
    </section>
  );
}