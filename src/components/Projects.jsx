import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";
import FadeInSection from "./FadeInSection";
import weatherImg from "../assets/skycast.png";
import dateTimeImg from "../assets/Calender.png";
import ecommerceImg from "../assets/e-commerce.png";
import loginImg from "../assets/login-page.png";
import myCalculatorImg from "../assets/Calculator.png";
import JapaneseLearningAppImg from "../assets/JapaneseLearningApp.jpg";

const projects = [
  {
    imgSrc: JapaneseLearningAppImg,
    title: "Nihongo Master",
    description: "A Japanese learning app built with TypeScript and Next.js. Features flashcards, quizzes, and a spaced repetition system to help users learn and retain Japanese vocabulary effectively.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    url: "https://japanese-learning-app-uabb.vercel.app/",
    github: "https://github.com/surenpal",
    featured: true,
  },
  {
    imgSrc: ecommerceImg,
    title: "E-Commerce App",
    description: "An e-commerce app built with React, Tailwind, and useContext. Features product listing, shopping cart, and a simple checkout process.",
    tags: ["React", "Tailwind", "Context API"],
    url: "https://mela-shopping-e-commerce.vercel.app",
    github: "https://github.com/surenpal",
  },
  {
    imgSrc: weatherImg,
    title: "SkyCast",
    description: "A clean weather app built with React and Tailwind. Fetches real-time weather data from the OpenWeatherMap API and displays it in a user-friendly interface.",
    tags: ["React", "Tailwind", "REST API"],
    url: "https://weatherappsuren.vercel.app/",
    github: "https://github.com/surenpal",
  },
  {
    imgSrc: dateTimeImg,
    title: "Calendar",
    description: "A clean date-time app built with React and Tailwind. Displays the current date and time, and allows users to set alarms and timers.",
    tags: ["React", "Tailwind"],
    url: "https://datetimeappsuren.vercel.app",
    github: "https://github.com/surenpal",
  },
  {
    imgSrc: myCalculatorImg,
    title: "Calculator",
    description: "A full-featured calculator built with React and Tailwind. Supports basic arithmetic operations, percentage calculations, and has a responsive design.",
    tags: ["React", "Tailwind"],
    url: "https://mycalculatersuren.vercel.app/",
    github: "https://github.com/surenpal",
  },
  {
    imgSrc: loginImg,
    title: "Login Form",
    description: "A login form built with React and Tailwind. Includes form validation, error handling, and a responsive design for both desktop and mobile.",
    tags: ["React", "Tailwind", "Form Validation"],
    url: "https://loginformreacttailwind.vercel.app/",
    github: "https://github.com/surenpal",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center pb-24 px-6 py-24
      text-gray-900 dark:text-gray-100"
    >
      <FadeInSection>
        <div className="max-w-5xl mx-auto text-center">

          {/* Header */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2"
          >
            What I've built
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4"
          >
            Projects
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-yellow-500 mx-auto mb-14 rounded"
          />

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

        </div>
      </FadeInSection>
    </section>
  );
}
