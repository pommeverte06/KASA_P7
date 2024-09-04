
import React from "react";
import Header from "./components/header"; // Import du Header
import { Outlet } from 'react-router-dom';
import Footer from './components/footer';

import './App.css';


function App() {
  return (
    <div>
      <Header /> 
      {/* Autres contenus de l'application */}
      <main>
      <Outlet />  {/* Ceci rendra le contenu des routes enfants */}
        {/* Contenu spécifique */}
      </main>
      <Footer />  {/* Ajout du footer ici */}
    </div>
  );
}

export default App;
