import "./App.css";
import { Header } from "../Header/Header";
import { Navbar } from "../nav/Navbar";
import { About } from "../About/About";
import { Projects } from "../Projects/Projects";
import { Email } from "../Email/Email";
import { Social } from "../Social/Social";
import { Contact } from "../Contact/Contact";
import { Footer } from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__content">
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <Email />
      <Social />
    </div>
  );
}

export default App;
