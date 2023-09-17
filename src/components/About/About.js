import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import mePath from "../../images/shaheen.jpg";

export const About = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-once={true}
      id="about"
      className="about"
    >
      <ol className="about__title">
        <li className="about__title-li">About Me</li>
      </ol>
      <div className="about__content">
        <div className="about__desc">
          <p className="about_text">
            Hello! My name is Shaheen. Like many, my first experience with web
            development was adding custom HTML and CSS to my MySpace page circa
            2007.
          </p>
          <p className="about_text">
            And for over a decade, that was it. My real interest in the field
            took off after watching one of my best friends make the leap from
            chemical engineering to software.
          </p>
          <p className="about__text">
            Now, in 2023, I've completed the software engineering program
            offered by TripleTen (formerly Practicum). After learning so much, I
            am incredibly excited to apply my skills with you, tackling your
            challenging and innovate projects.
          </p>
        </div>
        <div className="about__pic-wrapper">
          <div className="about__overlay"></div>
          <img
            className="about__pic"
            src={mePath}
            alt="it's me, but in Iceland"
          />
        </div>
      </div>
    </section>
  );
};
