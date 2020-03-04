import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <ul className="navbar">
      <li>
        <NavLink className="navlink"  exact to="/" activeClassName="active">
          <img
            src={require("../../assets/icons8-badminton-100.png")}
            alt="Raquette de badminton"
          />
        </NavLink>
      </li>
      <li>
        <NavLink className="navlink" activeClassName="active" to="/ajouter-joueur">
          Ajouter un joueur
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
