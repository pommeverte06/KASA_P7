// import React from 'react';
// import './card.css'; 

// function Card({ cover, title }) {
//   return (
//     <div className="card">
//       <img src={cover} alt={title} className="card-image" />
//       <div className="card-title">{title}</div>
//     </div>
//   );
// }

// export default Card;

import React from 'react';
import './Card.css'; // Le fichier CSS pour styliser les cards

function Card({ cover, title }) {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card-image" />
      <div className="card-overlay">
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
}

export default Card;
