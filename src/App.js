import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Volunteer from "./components/Volunteer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Volunteer />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
