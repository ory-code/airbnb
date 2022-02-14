import React from "react";
import "./style/card.css";
const Card = ({ src, title, description, price }) => {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card__info">
        <p>{title}</p>
        <span> {description}</span>
        <p> {price} </p>
      </div>
    </div>
  );
};

export default Card;
