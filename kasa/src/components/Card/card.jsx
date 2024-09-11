

import React from 'react';
import './Card.css'; 

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
