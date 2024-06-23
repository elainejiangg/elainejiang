import "./App.css";
import React from "react";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Resume from "./components/Resume.js";
import Skills from "./components/Skills.js";
import Contact from "./components/Contact.js";
const App = () => {
  return (
    <>
      <Header></Header>
      <About> </About>
      <Projects></Projects>
      <Skills></Skills>
      <Resume> </Resume>
      <Contact></Contact>
    </>
  );
};

export default App;
