import "./SideEl.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const SideEl = ({ side, children }) => {
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
      className={`sideEl sideEl_${side}`}
    >
      <div className="sideEl__content">{children}</div>
    </div>
  );
};
