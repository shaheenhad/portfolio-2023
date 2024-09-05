import "./Navbar.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Navbar = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className="nav">
      <a
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="1000"
        className="nav__logo"
        href="/"
      ></a>
      <div className="nav__content">
        <ol className="nav__list">
          <li
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="nav__li"
          >
            <a className="nav__link hover-underline-animation" href="#about">
              About
            </a>
          </li>
          <li
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="nav__li"
          >
            <a className="nav__link hover-underline-animation" href="#projects">
              Projects
            </a>
          </li>
          <li
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="nav__li"
          >
            <a className="nav__link hover-underline-animation" href="#contact">
              Contact
            </a>
          </li>
        </ol>
        <div data-aos="fade-down" data-aos-delay="400" data-aos-duration="1000">
          <a
            className="nav__resume"
            rel="noopener noreferrer"
            target="_blank"
            href="https://app.rezi.ai/s/ZNa9v6g3cTeaOLc6GF8W"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};
