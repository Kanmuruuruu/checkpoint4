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

  const [showInfos, setShowInfos] = useState(window.innerWidth > 720);

  const deletePlayer = async () => {
    const response = await playerApi.deletePlayer(id);
    if (response !== "error") {
      setMessage({ message: "Well deleted Buddy", success: true });
    } else {
      setMessage({ message: "Oupsy", success: false });
    }
  };

  const handleClick = () => {
    if (window.innerWidth < 720) {
      setShowInfos(!showInfos);
    }
  };

  const styleInfosRank = {
    display: showInfos ? "block" : "none"
  };

  const styleInfos = {
    display: showInfos ? "none" : "block"
  };

  return (
    <div className="playerCard">
      {!message ? (
        <div className="player">
          <div className="infos" onClick={handleClick} style={styleInfos}>
            <div>{capitalize(firstname)}</div>
            <div>{capitalize(lastname)}</div>
            <div className="age">{age} ans</div>
          </div>
          <div className="rankPlayer" style={styleInfosRank} onClick={handleClick}>
            <p>Simple</p>
            {rateSingle}
          </div>
          <div className="rankPlayer" style={styleInfosRank}>
            <p>Double</p>
            {rateDouble}
          </div>
          {playerDouble_id && (
            <div className="partner" style={styleInfosRank}>
              <p>Partenaire</p> {playerDouble_id}
            </div>
          )}
          <div className="playerDelete" style={styleInfosRank}>
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
