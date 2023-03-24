import "./App.css";
import { Header } from "../Header/Header";
import { Navbar } from "../nav/Navbar";
import { About } from "../About/About";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__content">
        <Header />
        <About />
      </div>
    </div>
  );
}

export default App;
