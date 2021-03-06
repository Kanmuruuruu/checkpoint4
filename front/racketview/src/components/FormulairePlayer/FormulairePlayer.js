import React, { useState } from "react";
import Response from "../Response/Response";
import "./FormulairePlayer.css";
import InputPlayerDouble from "./InputPlayerDouble";
import InputRank from "./InputRank";

const playerApi = require("../../api/player");

const FormulairePlayer = ({ create }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");

  const [single, setSingle] = useState(null);
  const [double, setDouble] = useState(null);
  const [playerDouble_id, setPlayerDouble_id] = useState(null);

  const [isRanked, setIsRanked] = useState(false);
  const [message, setMessage] = useState({});

  const rankedStyle = {
    boxShadow: isRanked ? 'inset #FFFFFF -6px -6px 16px,inset #D1CDC7 6px 6px 16px': '#FFFFFF -6px -6px 16px,#D1CDC7 6px 6px 16px',
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const newPlayer = { firstname: firstname, lastname: lastname, age: age };
    if (single && double) {
      newPlayer["rateSingle"] = single;
      newPlayer.rateDouble = double;
    }
    if (playerDouble_id || playerDouble_id === 0) {
      newPlayer.playerDouble_id = playerDouble_id;
    }
    const response = await playerApi.postPlayer(newPlayer);
    if (response !== "error") {
      create(response);
      setMessage({ message: "Well done Buddy", success: true });
    } else {
      setMessage({ message: "Something wrong", success: false });
    }
  };

  return (
    <form className="formulaire" onSubmit={handleSubmit}>
      <Response {...message} />
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
      <div className="buttonRanked" onClick={() => setIsRanked(!isRanked)} style={rankedStyle}>
        {isRanked ? "Enfaite non" : "Déjà classé?"}
      </div>
      {isRanked && (
        <div className="formulairePlayer rankedInfos">
          <InputRank category="Single" setRank={rank => setSingle(rank)} label="Simple" />
          <InputRank category="Double" setRank={rank => setDouble(rank)} label="Double" />
          <InputPlayerDouble changePartner={id => setPlayerDouble_id(id)} />
        </div>
      )}
      <button className="buttonRanked" type="submit">
        Ajouter
      </button>
    </form>
  );
};

export default FormulairePlayer;
