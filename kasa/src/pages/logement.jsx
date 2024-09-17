import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logements from "../data/logements.json";
import Slideshow from "../components/Slideshow/Slideshow";
import Rating from "../components/Rating/Rating";
import Host from "../components/Host/Host";
import Collapse from "../components/Collapse/collapse";
import "./logements.css";

function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();

  const logement = logements.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logement) {
      navigate("/notfound");
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  return (
    <div className="logement-page">
      <Slideshow pictures={logement.pictures} />

      {/* Container pour les éléments sous le Slideshow */}
      <div className="logement-content">
        {/* Titre et Localisation */}
        <div className="logement-header">
          <h1 className="logement-title">{logement.title}</h1>
          {/* Host info */}
          <Host name={logement.host.name} picture={logement.host.picture} />
        </div>
        <p className="logement-location">{logement.location}</p>

        {/* Tags */}
        <div className="logement-tags">
          <div>{logement.tags.map((tag, index) => (
            <span className="tag" key={index}>
              {tag}
            </span>
          ))}
          </div>
          <Rating rating={logement.rating} /> {/* Affichage des étoiles */}
        </div>

        <div className="logement-details">
          <div className="infos">
            {/* Réutiliser Collapse pour la Description et Équipements */}
            <Collapse  title="Description" content={logement.description} />
            <Collapse
              title="Équipements"
              content={
                <ul>
                  {logement.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logement;
