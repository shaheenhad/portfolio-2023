import "./App.css";
import { Header } from "../Header/Header";
import { Navbar } from "../nav/Navbar";
import { About } from "../About/About";
import { Email } from "../SideEmail/SideEmail";

function App() {
  console.log(<Email />);
  return (
    <div className="app">
      <Navbar />
      <div className="app__content">
        <Header />
        <About />
      </div>
      <Email />
    </div>
  );
}

export default App;
