import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechnicalSkills from "./components/TechnicalSkills";
import ToolsUsed from "./components/ToolsUsed";

function App() {
  return (
    <div className="App">
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

      <div className="min-h-screen flex flex-col justify-between">
        <div id="skills" className="my-auto">
          <TechnicalSkills />
        </div>
        <div className="my-auto">
          <ToolsUsed />
        </div>
      </div>

      <div id="projects" className="min-h-screen flex flex-col justify-center">
        <Projects />
      </div>
    </div>
  );
}

export default App;
