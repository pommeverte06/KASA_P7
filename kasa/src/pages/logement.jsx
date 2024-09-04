import React from 'react';
import { useParams } from 'react-router-dom';  // sert pour acceder a l'id de la route

function Logement() {
  const { id } = useParams();  // extrait l'id depuis l'URL

  // utiliser les ID du logement correspondant, bien regarder le fichier json pour voir comment il est fichu et les catégories et comment on importe en fonction de ce que j'ai besoin de récupérer comme données pour la suite.

  return (
    <div>
      <h1> {id}</h1>
      <p>Voici les détails du logement avec l'ID : {id}</p>
    </div>
  );
}

export default Logement;
