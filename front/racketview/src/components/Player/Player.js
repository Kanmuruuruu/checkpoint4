import React from "react";
import "./Player.css";
import capitalize from "../../function/capitalize";

const Player = ({
  id,
  firstname,
  lastname,
  age,
  rateSingle,
  rateDouble,
  playerDouble_id
}) => {
  return (
    <div className="player">
      <div className="infos">
        <div>{capitalize(firstname)}</div>
        <div>{capitalize(lastname)}</div>
        <div>{age}</div>
      </div>
      <div className="rankPlayer">{rateSingle}</div>
      <div className="rankPlayer">{rateDouble}</div>
    </div>
  );
};

export default Player;
