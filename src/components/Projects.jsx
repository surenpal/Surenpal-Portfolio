import ProjectCard from "./ProjectCard";
import FadeInSection from "./FadeInSection";
import weatherImg from "../assets/weather-app.png";
import dateTimeImg from "../assets/date-time-app.png";
import ecommerceImg from "../assets/e-commerce.png";
import loginImg from "../assets/login-page.png";
import myCalculatorImg from "../assets/my-calculater.png";
import JapaneseLearningAppImg from "../assets/JapaneseLearningApp.jpg";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center pb-24 px-6
      text-gray-900 dark:text-gray-100"
    >
      <FadeInSection>
        <div className="max-w-6xl mx-auto text-center">

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Projects
          </h2>

          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-12 rounded"></div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            <ProjectCard
              imgSrc={JapaneseLearningAppImg}
              title="Nihongo Master"
              description="This is a Japanese learning app built with Typescript and Next.js. It features flashcards, quizzes, and a spaced repetition system to help users learn and retain Japanese vocabulary effectively."
              url="https://japanese-learning-app-uabb.vercel.app/"
            />

            <ProjectCard
              imgSrc={ecommerceImg}
              title="E-Commerce App"
              description="This is an e-commerce app built with React, Tailwind and useContext.
              It features product listing, shopping cart, and a simple checkout process."
              url="https://mela-shopping-e-commerce.vercel.app"
            />

            <ProjectCard
              imgSrc={weatherImg}
              title="Weather App"
              description="A clean weather app built with React and Tailwind.
              It fetches real-time weather data from the OpenWeatherMap API and displays it in a user-friendly interface."
              url="https://weatherappsuren.vercel.app/"
            />

            <ProjectCard
              imgSrc={dateTimeImg}
              title="Date Time App"
              description="A clean date-time app built with React and Tailwind.
              It displays the current date and time, and allows users to set alarms and timers."
              url="https://datetimeappsuren.vercel.app"
            />


            <ProjectCard
              imgSrc={myCalculatorImg}
              title="My Calculator"
              description="Full calculator built with React and Tailwind.
              It supports basic arithmetic operations, percentage calculations, and has a responsive design for both desktop and mobile devices."
              url="https://mycalculatersuren.vercel.app/"
            />


            <ProjectCard
              imgSrc={loginImg}
              title="Login Form"
              description="Login form built with React and Tailwind.
              It includes form validation, error handling, and a responsive design for both desktop and mobile devices."
              url="https://loginformreacttailwind.vercel.app/"
            />

          

          </div>
        </div>
      </FadeInSection>
    </section>
  );
}