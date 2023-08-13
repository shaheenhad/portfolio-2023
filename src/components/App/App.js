import "./App.css";
import { Header } from "../Header/Header";
import { Navbar } from "../nav/Navbar";
import { About } from "../About/About";
import { Email } from "../Email/Email";
import { Social } from "../Social/Social";
import { Footer } from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__content">
        <Header />
        <About />
        <Footer />
      </div>
      <Email />
      <Social />
    </div>
  );
}

export default App;
