import React, { useState } from "react";
import arrow from "../../assets/arrow.svg"; // l'icône de flèche
import "./collapse.css";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <img
          src={arrow}
          alt="flèche d'ouverture"
          className={`arrow ${isOpen ? "rotate" : ""}`} // rotate appliquée quand ouvert
        />
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
}

export default Collapse;
