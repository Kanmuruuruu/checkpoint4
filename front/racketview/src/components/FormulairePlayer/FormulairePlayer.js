import React, {useState} from 'react';
import './FormulairePlayer.css';

const playerApi = require('../../api/player');

const FormulairePlayer = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const newPlayer = {firstname, lastname, age};
    await playerApi.postPlayer(newPlayer);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="lastname">
          <input type="text" value={lastname} onChange={e => setLastname(e.target.value)}/>
        </label>
        <label htmlFor="firstname">
          <input type="text" value={firstname} onChange={e => setFirstname(e.target.value)}/>
        </label>
        <label htmlFor="age">
          <input type="number" value={age} onChange={e => setAge(e.target.value)}/>
        </label>
      </form>
    </div>
  );
};

export default FormulairePlayer;
