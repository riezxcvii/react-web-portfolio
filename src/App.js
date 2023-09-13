import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      {/* main page */}
      <Contact />

      {/* skills section */}
      <Skills />

      {/* experiences section */}
      <Experiences />

      {/* projects section */}
      <Projects />
    </div>
  );
}

export default App;
