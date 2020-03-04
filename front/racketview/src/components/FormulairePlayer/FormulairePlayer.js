import React, { useState } from "react";
import "./FormulairePlayer.css";

const playerApi = require("../../api/player");

const FormulairePlayer = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const newPlayer = { firstname: firstname, lastname: lastname, age: age };
    await playerApi.postPlayer(newPlayer);
  };

  return (
    <form className="formulairePlayer" onSubmit={handleSubmit}>
      <label htmlFor="lastname">
        Nom
        <input
          type="text"
          value={lastname}
          onChange={e => setLastname(e.target.value)}
        />
      </label>
      <label htmlFor="firstname">
        Prénom
        <input
          type="text"
          value={firstname}
          onChange={e => setFirstname(e.target.value)}
        />
      </label>
      <label htmlFor="age">
        Age
        <input
          type="number"
          min="18"
          max="60"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </label>
      <button type="submit">Créer</button>
    </form>
  );
};

export default FormulairePlayer;
