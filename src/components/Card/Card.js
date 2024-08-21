import "./Card.css";
import { Icon } from "../Icon/Icon";

export const Card = ({ name, url, githubURL, image, description }) => {
  return (
    <article className="card">
      <a className="card__link" href={url} target="_blank" rel="noreferrer">
        <div className="card__wrapper">
          <a href={githubURL} target="_blank" rel="noreferrer">
            <Icon name="GitHub" className="card__icon" />
          </a>
          <img className="card__image" alt="project example" src={image}></img>
        </div>
        <div className="card__info">
          <h2 className="card__title">{name}</h2>
          <p className="card__description">{description}</p>
        </div>
      </a>
    </article>
  );
};
