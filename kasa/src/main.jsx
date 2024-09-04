import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/routes"; // Ou './Router' si tu as mis le fichier dans src directement
import "./index.css"; // Styles globaux

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router /> {/* Utilisation du routeur */}
  </React.StrictMode>
);
