import React, { useState } from "react";
import "./FormulairePlayer.css";

const playerApi = require("../../api/player");

const FormulairePlayer = ({create}) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");

  const [single, setSingle] = useState(null);
  const [double, setDouble] = useState(null);
  const [playerDouble_id, setPlayerDouble_id] = useState(null);

  const [isRanked, setIsRanked] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const newPlayer = { firstname: firstname, lastname: lastname, age: age };
    const response = await playerApi.postPlayer(newPlayer);
    if(response !== 'error') create(response);
  };

  return (
    <form className="formulaire" onSubmit={handleSubmit}>
      <div className="formulairePlayer">
        <label htmlFor="lastname">
          Nom
          <input
            type="text"
            name="lastname"
            value={lastname}
            required
            onChange={e => setLastname(e.target.value)}
          />
        </label>
        <label htmlFor="firstname">
          Prénom
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={e => setFirstname(e.target.value)}
            required
          />
        </label>
        <label htmlFor="age">
          Age
          <input
            type="number"
            min="18"
            max="60"
            name="age"
            value={age}
            onChange={e => setAge(e.target.value)}
            required
          />
        </label>
      </div>
      <div className="buttonRanked" onClick={ () => setIsRanked(!isRanked)}>{isRanked ? 'Enfaite non' : 'Déjà classé?'}</div>
      {isRanked && (
        <div className="formulairePlayer">
          <label htmlFor="single">
            Simple
            <input
              type="text"
              value={single}
              onChange={e => setSingle(e.target.value)}
            />
          </label>
          <label htmlFor="double">
            Double
            <input type="text" />
          </label>
          <label htmlFor="partner">
            Partenaire
            <input
              type="text"
              name="partner"
              value={playerDouble_id}
              onChange={e => setPlayerDouble_id(e.target.value)}
            />
          </label>
        </div>
      )}
      <button className="buttonRanked" type="submit">Ajouter</button>
    </form>
  );
};

export default FormulairePlayer;
