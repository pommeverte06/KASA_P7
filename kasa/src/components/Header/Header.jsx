import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/header-logo.svg";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo Kasa" className="header-logo" />
      </div>
      <nav className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          end
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
