import "./SideEl.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const SideEl = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once={true}
      data-aos-anchor=".header"
      data-aos-delay="1800"
      className="sideEl"
    >
      <div className="sideEl__content">
        <a className="sideEl__link" href="mailto:shaheenhad@gmail.com">
          shaheenhad@gmail.com
        </a>
      </div>
    </div>
  );
};
