import Home from "./components/Home";
import Navbar from "./components/Navbar";
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

      <div className="min-h-screen pt-[4rem] flex flex-col justify-between">
        <div className="my-auto">
          <TechnicalSkills />
        </div>
        <div className="my-auto">
          <ToolsUsed />
        </div>
      </div>
    </div>
  );
}

export default App;
