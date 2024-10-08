import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/routes"; 
import "./styles/main.css"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router /> 
  </React.StrictMode>
);
