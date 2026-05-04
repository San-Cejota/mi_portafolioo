import Hero from "./components/head";
import Navbar from "./components/navbar"
import Skills from "./components/skills";
import About from "./components/presentacion"; 
import Projects from "./components/projects";
import Contact from "./components/contacto";
export default function Home() {
  return (
      <>
      <Hero />
      <Navbar /> 
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
