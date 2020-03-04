import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            <img
              src={require("../../assets/streamline-icon-badminton-shuttlecock-racquet@48 x48 (1).png")}
              alt="Raquette de badminton"
            />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/classement">Liste des joueurs</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
