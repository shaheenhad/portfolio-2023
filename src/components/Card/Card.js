import "./Card.css";

export const Card = ({ name, url, image }) => {
  return (
    <article className="card">
      <div className="card__wrapper">
        <div className="card__overlay">need to fix height of overlay</div>
        <img className="card__image" src={image}></img>
      </div>
      <div className="card__info">
        <h2 className="card__title">{name}</h2>
        <p className="card__description"></p>
      </div>
    </article>
  );
};
