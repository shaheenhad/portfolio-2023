import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { email } from "../../util/config";

export const Contact = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-once={true}
      id="contact"
      className="contact"
    >
      <ol className="contact__title">
        <li value="3" className="contact__title-li">
          The Next Step
        </li>
      </ol>
      <h2 className="contact__header">What Can I Do</h2>
      <h2 className="contact__header">
        For <span className="contact__header_alt">You</span>?
      </h2>
      <p className="contact__description">
        I am looking for new opportunities and would love to speak about
        potential positions. Please feel free to reach out to me!
      </p>

      <a href={`mailto:${email}`} className="contact__link shake">
        Say Hello
      </a>
    </section>
  );
};
