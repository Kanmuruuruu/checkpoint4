import React, { useState } from "react";
import "./Player.css";
import capitalize from "../../function/capitalize";
import Response from "../Response/Response";

const playerApi = require("../../api/player");

const Player = ({
  id,
  firstname,
  lastname,
  age,
  rateSingle,
  rateDouble,
  playerDouble_id
}) => {
  const [message, setMessage] = useState(null);

  const deletePlayer = async () => {
    const response = await playerApi.deletePlayer(id);
    if (response !== "error") {
      setMessage({ message: "Well deleted Buddy", success: true });
    } else {
      setMessage({ message: "Oupsy", success: false });
    }
  };

  return (
    <div>
      {!message ? (
        <div className="player">
          <div className="infos">
            <div>{capitalize(firstname)}</div>
            <div>{capitalize(lastname)}</div>
            <div>{age}</div>
          </div>
          <div className="rankPlayer">
            <p>Single</p>
            {rateSingle}
          </div>
          <div className="rankPlayer">
            <p>Double</p>
            {rateDouble}
          </div>
          {playerDouble_id && <div className="partner"><p>Partenaire</p> {playerDouble_id}</div>}
          <div className="playerDelete">
            <img
              src={require("../../assets/3643729-bin-delete-garbage-rubbish-trash-waste_113421.png")}
              alt="poubelle"
              onClick={deletePlayer}
            />
          </div>
        </div>
      ) : (
        <Response {...message} />
      )}
    </div>
  );
};

export default Player;
