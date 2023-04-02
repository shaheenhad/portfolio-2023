import "./App.css";
import { Header } from "../Header/Header";
import { Navbar } from "../nav/Navbar";
import { About } from "../About/About";
import { SideEl } from "../SideEl/SideEl";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__content">
        <Header />
        <About />
      </div>
      <SideEl />
    </div>
  );
}

export default App;
