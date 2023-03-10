import "./App.css";
import { Header } from "../Header/Header";
import { Navbar } from "../nav/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__content">
        <Header />
      </div>
    </div>
  );
}

export default App;
