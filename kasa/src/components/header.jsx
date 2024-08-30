import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/kasaLogo.svg"; // Remplace par le chemin correct de ton logo
import "./header.css";

function Header() {
  return (
    <header className="banner">
      <div className="logo">
        <img src={logo} alt="logo Kasa" className="header-logo" />
      </div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  );
}
console.log(logo);
export default Header;
