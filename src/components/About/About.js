import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
        <p className="about_text">
          Hello! My name is Shaheen. Like many, my first experience with web
          development was adding custom HTML and CSS to my MySpace page circa
          2007. And for over a decade, that was it. My real interest in the
          field took off after watching one of my best friends make the leap
          from chemical engineering to tech.
        </p>
        <p className="about__text">
          Now, in 2023, I've completed the software engineering program offered
          by TripleTen (formerly Practicum). After learning so much, I am
          incredibly excited to apply my skills with you, tackling your
          challenging and innovate projects.
        </p>
      </div>
    </section>
  );
};
