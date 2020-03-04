import React, { useState, useEffect } from "react";
import Player from "../Player/Player";
import FormulairePlayer from "../FormulairePlayer/FormulairePlayer";

const playerApi = require("../../api/player");

const Home = () => {
  const [allPlayer, setAllPlayer] = useState([]);

  useEffect(() => {
    (async () => {
      setAllPlayer(await playerApi.findAll());
    })();
  }, []);

  return (
    <div>
      <FormulairePlayer />
      {allPlayer.map(
        ({ id, firstname, lastname, age, rateSingle, rateDouble }) => {
          return (
            <Player
              id={id}
              firstname={firstname}
              lastname={lastname}
              age={age}
              rateSingle={rateSingle}
              rateDouble={rateDouble}
            />
          );
        }
      )}
    </div>
  );
};

export default Home;
