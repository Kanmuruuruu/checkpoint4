import React from 'react';
import Player from "../Player/Player";
import './Rank.css';

const Rank = () => {
  return (
    <div className="rank">
      <h1>Classement</h1>
      <Player firstname={"jean"} lastname={"paul"} age={21} id={2} playerDouble_id={null} rateDouble={"P12"} rateSingle={"P12"}/>
      <Player firstname={"jean"} lastname={"paul"} age={21} id={2} playerDouble_id={null} rateDouble={"P12"} rateSingle={"P12"}/>
      <Player firstname={"jean"} lastname={"paul"} age={21} id={2} playerDouble_id={null} rateDouble={"P12"} rateSingle={"P12"}/>
      <Player firstname={"jean"} lastname={"paul"} age={21} id={2} playerDouble_id={null} rateDouble={"P12"} rateSingle={"P12"}/>
    </div>
  );
};

export default Rank;
