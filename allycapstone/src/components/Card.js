import React from 'react';
import '../styles/Partners.css'

const Card = ({ imageSrc, title, text, link }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="card__content">
        <p className="card__title">{title}</p>
        <p className="card__text">{text}</p>
        <a className="card__button" href={link}>Visit Site</a>
      </div>
    </div>
  );
};

export default Card;
