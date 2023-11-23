import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TechnicalSkills from "./components/TechnicalSkills";
import Tools from "./components/Tools";

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
      <TechnicalSkills />
      <Tools />
    </div>
  );
}

export default App;
