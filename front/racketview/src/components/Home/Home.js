import React, { useState, useEffect } from "react";
import Player from "../Player/Player";
import AllRank from "../AllRank/AllRank";

const playerApi = require("../../api/player");

const Home = () => {
  const [allPlayer, setAllPlayer] = useState([]);

  const [selectRank, setSelectRank] = useState(null);

  useEffect(() => {
    (async () => {
      setAllPlayer(await playerApi.findAll());
    })();
  }, []);

  return (
    <div>
      <AllRank select={rank => setSelectRank(rank)}/>
      <div>
        {allPlayer
          .filter(player => selectRank ? player.rateSingle===selectRank : player)
          .map(
          ({ id, firstname, lastname, age, rateSingle, rateDouble, playerDouble_id }) => {
            return (
              <Player
                id={id}
                firstname={firstname}
                lastname={lastname}
                age={age}
                rateSingle={rateSingle}
                rateDouble={rateDouble}
                playerDouble_id={playerDouble_id}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Home;
