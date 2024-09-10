import React from 'react';
import { Link } from 'react-router-dom'; 
import '../App.css';

function NotFound() {
  return (
    <div className="notfound-page">
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      
      <Link to="/">Retourner sur la page d'accueil</Link>
      <p></p>
    </div>
  );
}

export default NotFound;
