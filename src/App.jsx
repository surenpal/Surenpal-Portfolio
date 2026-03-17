import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";

export default function App() {

const [theme, setTheme] = useState(() => {
const savedTheme = localStorage.getItem("theme");

```
if (savedTheme) return savedTheme;

// Detect system preference
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  return "dark";
}

return "light";
```

});

useEffect(() => {
localStorage.setItem("theme", theme);

```
if (theme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
```

}, [theme]);

return ( <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"> <Navbar theme={theme} setTheme={setTheme} /> <Hero /> <About /> <Skills /> <Projects /> <Contact /> </div>
);
}
