import "./Projects.css";
import { Card } from "../Card/Card";
import Aos from "aos";
import "aos/dist/aos.css";
import { projects } from "../../util/config";
import { useEffect } from "react";

export const Projects = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-once={true}
      id="projects"
      className="projects"
    >
      <ol className="projects__title">
        <li value="2" className="projects__title-li">
          Some things I've done
        </li>
      </ol>
      <div className="projects__grid">
        <Card name={projects.name} url={projects.url} image={projects.image} />
      </div>
    </section>
  );
};
