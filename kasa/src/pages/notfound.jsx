import React from 'react';
import { Link } from 'react-router-dom';  // Pour permettre à l'utilisateur de revenir à la page d'accueil

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default NotFound;
