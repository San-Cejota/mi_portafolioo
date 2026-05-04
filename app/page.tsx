import Hero from "./components/head";
import Navbar from "./components/navbar"
import Skills from "./components/skills";
import About from "./components/presentacion"; 
import Projects from "./components/projects";
import Contact from "./components/contacto";
import Footer from "./components/footer";
export default function Home() {
  return (
      <>
      <Hero />
      <Navbar /> 
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
    
  );
  
}

