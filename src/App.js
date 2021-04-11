import "./App.css";
import Bus from "./components/pages/Bus";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Bus />
      <Contact />
    </div>
  );
}

export default App;
