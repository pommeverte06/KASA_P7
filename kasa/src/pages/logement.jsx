import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logements from "../data/logements.json";

function Logement() {
  const { id } = useParams(); // extrait l'id depuis l'URL
  const navigate = useNavigate(); // initialise le hook pour rediriger

  const logement = logements.find((logement) => logement.id === id);

  // redirige vers la page NotFound 404 si le logement n'est pas trouvé
  useEffect(() => {
    if (!logement) {
      navigate("/notfound"); // redirige vers la route notfound
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  return (
    <div>
      <img src={logement.cover} alt={logement.title} />
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
      <h3>Description</h3>
      <p>{logement.description}</p>

      <h3>Équipements</h3>
      <ul>
        {logement.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
    </div>
  );
}

export default Logement;
