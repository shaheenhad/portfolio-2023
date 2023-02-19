import "./App.css";
import { Header } from "../Header/Header";
import { Navbar } from "../nav/Navbar";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Navbar />
        <Header />
      </div>
    </div>
  );
}

export default App;
