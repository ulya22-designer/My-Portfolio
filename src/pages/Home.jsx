import Hero from "../sections/Hero";
import Statistics from "../sections/Statistics";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Expertise from "../sections/Expertise";
import Projects from "../sections/Projects"; 
import Certificates from "../sections/Certificates"; 
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <About />
      <Experience />
      <Expertise />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}