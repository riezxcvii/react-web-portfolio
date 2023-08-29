import Contact from "./components/Contact";
import Header from "./components/Header";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">

      {/* main page */}
      <Header />
      <Contact />

      {/* skills section */}
      <Skills />
    </div>
  );
}

export default App;
