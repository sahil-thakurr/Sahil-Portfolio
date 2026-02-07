import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Extracurricular from "@/components/sections/Extracurricular";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Education />
      <Extracurricular />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
