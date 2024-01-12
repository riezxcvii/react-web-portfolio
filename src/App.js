import React, { useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import Frameworks from "./components/Frameworks";
import Database from "./components/Database";
import WebTechnologies from "./components/WebTechnologies";
import Tools from "./components/Tools";

function App() {
  useEffect(() => {
    document.title = "Web Portfolio";
  }, []);

  return (
    <div className="App max-w-screen">
      {/* Background */}
      <ul className="background z-10 h-full">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <Navbar />
      <Home />

      <div
        id="skills"
        className="pt-[5.2rem] min-h-screen flex flex-col justify-between"
      >
        <h1 className="name pb-6 tracking-wider my-auto text-[1.6rem] px-8 w-fit rounded-lg text-[#e6af2e]">
          SKILLS
        </h1>
        <div id="skills" className="my-auto">
          <Languages />
        </div>
        <div className="my-auto">
          <Frameworks />
        </div>
        <div className="my-auto">
          <Database />
        </div>
        <div className="my-auto">
          <WebTechnologies />
        </div>
        <div className="my-auto">
          <Tools />
        </div>
      </div>

      <div id="projects" className="min-h-screen flex flex-col justify-center">
        <Projects />
      </div>
    </div>
  );
}

export default App;
