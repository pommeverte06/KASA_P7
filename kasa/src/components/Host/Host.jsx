import React from 'react';
import './host.css';

function Host({ name, picture }) {
  return (
    <div className="host">
      <p className="host-name">{name}</p>
      <img className="host-picture" src={picture} alt={`Portrait de ${name}`} />
    </div>
  );
}

export default Host;
