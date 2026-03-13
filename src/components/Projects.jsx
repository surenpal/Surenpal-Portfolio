import ProjectCard from "./ProjectCard";
import weatherImg from "../assets/weather-app.png";
import dateTimeImg from "../assets/date-time-app.png";
import ecommerceImg from "../assets/e-commerce.png";
import loginImg from "../assets/login-page.png";
import myCalculaterImg from "../assets/my-calculater.png";

export default function Project() {
  return (
    <section
      id="projects"
      className=" relative w-full py-24 px-6 text-center"
    >
      <div className="absolute inset-0 bg-black/50"></div>


      <div className="relative z-10">

        <h2 className="text-4xl font-extrabold text-gray-400 mb-10 text-shadow-md">
          Projects
        </h2>


        <div className="flex flex-wrap justify-center gap-20">

          <ProjectCard
            imgSrc={ecommerceImg}
            title="E-Commerce-App"
            description="Undergoing e-commerce app built with React and Tailwind and the useContext."
            url="https://mela-shopping-e-commerce.vercel.app"
          />

          <ProjectCard
            imgSrc={weatherImg}
            title="Weather-App"
            description="A clean weather app built with React and Tailwind."
            url="https://weatherappsuren.vercel.app/"
          />
          <ProjectCard
            imgSrc={dateTimeImg}
            title="Date-Time-App"
            description="A clean date-time app built with React and Tailwind."
            url="https://datetimeappsuren.vercel.app"
          />

          <ProjectCard
            imgSrc={loginImg}
            title="Login-Form"
            description="Login form built with React and Tailwind."
            url="https://loginformreacttailwind.vercel.app/"
          />

          <ProjectCard
            imgSrc={myCalculaterImg}
            title="my-calculater"
            description="Full calculater built with React and Tailwind."
            url="https://mycalculatersuren.vercel.app/"
          />


        </div>

      </div>


    </section>
  );
}