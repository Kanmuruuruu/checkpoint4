import React, { useState } from 'react';
import FormulairePlayer from "../FormulairePlayer/FormulairePlayer";
import Player from "../Player/Player";

const AddPlayer = () => {
  const [player, setPlayer] = useState(null);
  return (
    <div>
      <FormulairePlayer create={newPlayer => setPlayer(newPlayer)}/>
      {player &&
      <Player {...player} />
      }
    </div>
  );
};

export default AddPlayer;
