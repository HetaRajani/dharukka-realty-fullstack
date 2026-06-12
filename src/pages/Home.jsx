import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import Why from "../components/Why";

import CTA from "../components/CTA";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Projects />
      <Why />
      
      <CTA />
    </>
  );
}

export default Home;