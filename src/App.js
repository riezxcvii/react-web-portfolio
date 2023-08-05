import Navbar from "./components/Navbar";
import Cover from "./components/Cover";

function App() {
  return (
    <div className="App">
      <div className="sticky top-0">
        <Navbar />
      </div>
      <div>
        <Cover />
      </div>
    </div>
  );
}

export default App;
