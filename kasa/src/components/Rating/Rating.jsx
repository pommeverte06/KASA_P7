

import './rating.css';

// function Rating({ rating }) {
//   const maxRating = 5; // Nombre maximum d'étoiles
//   const stars = [];

//   // Boucle pour créer les étoiles pleines et vides
//   for (let i = 1; i <= maxRating; i++) {
//     stars.push(
//       <span key={i} className={i <= rating ? 'star star-filled' : 'star star-empty'}>
//         ★
//       </span>
//     );
//   }

//   return <div className="rating">{stars}</div>;
// }

// export default Rating;

import React from "react";
import starFull from "../../assets/star-full.svg"; // Remplace avec ton icône étoile pleine
import starEmpty from "../../assets/star-empty.svg"; // Remplace avec ton icône étoile vide

function Rating({ rating }) {
  const stars = [];

  // Boucle pour afficher les étoiles
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
