import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {

  const [theme, setTheme] = useState("light");

  return (
    <div className="bg-gray-400 text-gray-900 min-h-screen bg-cover bg-center bg-fixed bg-no-repeat bg-[url('/bg-all.jpg')]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}