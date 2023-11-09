import "./Card.css";

export const Card = ({ name, url, image }) => {
  return (
    <article className="card">
      <a className="card__link" href="#">
        link
      </a>
      <div className="card__image">{image}</div>
      <div className="card__info">
        <h2 className="card__title">{name}</h2>
      </div>
    </article>
  );
};
