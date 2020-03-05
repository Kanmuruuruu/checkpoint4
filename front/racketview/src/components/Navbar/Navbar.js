import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <ul className="navbar">
      <li>
        <NavLink className="navlink" exact to="/" activeClassName="active">
         Liste des joueurs
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navlink"
          activeClassName="active"
          to="/ajouter-joueur"
        >
          Ajouter un joueur
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
