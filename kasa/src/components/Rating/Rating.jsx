import "./rating.css";
import React from "react";
import starFull from "../../assets/star-full.svg"; 
import starEmpty from "../../assets/star-empty.svg"; 

function Rating({ rating }) {
  const stars = [];

  // boucle pour afficher les étoiles
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <img
        key={i}
        src={i <= rating ? starFull : starEmpty}
        alt={i <= rating ? "Étoile pleine" : "Étoile vide"}
        className="rating-star"
      />
    );
  }

  return <div className="rating">{stars}</div>;
}

export default Rating;
