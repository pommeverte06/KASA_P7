import React from 'react';
import { useParams } from 'react-router-dom';  // Pour accéder à l'identifiant de la route

function Logement() {
  const { id } = useParams();  // Extraction de l'identifiant depuis l'URL

  // Ici tu pourrais utiliser cet ID pour chercher les détails du logement correspondant
  // Cela pourrait impliquer de faire un fetch/axios call pour récupérer les données d'une API
  // Ou bien simplement récupérer les données depuis un fichier JSON

  return (
    <div>
      <h1>Détails du logement {id}</h1>
      {/* Affichage des informations détaillées du logement */}
      <p>Voici les détails du logement avec l'ID : {id}</p>
      {/* Ici tu pourrais afficher l'image, la description, les équipements, etc. */}
    </div>
  );
}

export default Logement;
