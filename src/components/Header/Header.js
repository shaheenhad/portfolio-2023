import "./Header.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Header = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <section className="header">
      <p
        data-aos="fade-up"
        data-aos-delay="1200"
        data-aos-duration="1000"
        className="header__intro"
      >
        hey, my name is
      </p>
      <h1
        data-aos="fade-up"
        data-aos-delay="1250"
        data-aos-duration="1000"
        className="header__title"
      >
        Shaheen Hadadzadeh.
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="1300"
        data-aos-duration="1000"
        data-aos-anchor=".header__title"
        className="header__desc"
      >
        Fullstack developer, engineer, and lifelong learner
      </p>
      <p
        data-aos="fade-up"
        data-aos-delay="1350"
        data-aos-duration="1000"
        data-aos-anchor=".header__title"
        className="header__desc_alt"
      >
        I'm a pharmaceutical production engineer, turned software engineer, with
        an interest in building exceptional web experiences. Keep going to see
        what I've done so far!
      </p>
    </section>
  );
};
