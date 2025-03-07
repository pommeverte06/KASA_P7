import React, { useState } from "react";
import arrow from "../../assets/arrow.svg";
import "./collapse.css"; 

function Collapse({ title, content, className = "", contentClassName = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${className}`}>
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <img
          src={arrow}
          alt="flèche d'ouverture"
          className={`arrow ${isOpen ? "rotate" : ""}`}
        />
      </div>
      {isOpen && (
        <div className={`collapse-content ${contentClassName}`}>{content}</div>
      )}
    </div>
  );
}

export default Collapse;
