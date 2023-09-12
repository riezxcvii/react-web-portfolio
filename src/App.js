import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      {/* main page */}
      <Contact />

      {/* skills section */}
      <Skills />

      {/* experience and projects section */}
      <Experiences />
    </div>
  );
}

export default App;
