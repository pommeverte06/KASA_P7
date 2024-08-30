import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // import de react router
import App from "./App"; // composant principal
import Home from "./pages/home"; // accueil
import About from "./pages/about"; //a propos
import  "./index.css"; //a propos



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* Encapsule ton application avec BrowserRouter */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />{" "}
          {/* Route par défaut pour la page d'accueil */}
          <Route path="about" element={<About />} />{" "}
          {/* Route pour la page "À propos" */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
