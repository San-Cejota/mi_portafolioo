import Hero from "./components/head";
import Navbar from "./components/navbar"
import Skills from "./components/skills";
import About from "./components/presentacion"; 
export default function Home() {
  return (
      <>
      <Hero />
      <Navbar /> 
      <About />
      <Skills />
      
    </>
  );
}
