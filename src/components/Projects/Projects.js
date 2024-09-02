import "./Projects.css";
import { Card } from "../Card/Card";
import Aos from "aos";
import "aos/dist/aos.css";
import { projects } from "../../util/projectData";
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
          Some Things I've Built
        </li>
      </ol>
      <div className="projects__content">
        {projects.map((project, index) => {
          return (
            <Card
              key={index}
              name={project.name}
              url={project.url}
              image={project.image}
              description={project.description}
              githubURL={project.githubURL}
            />
          );
        })}
      </div>
    </section>
  );
};
