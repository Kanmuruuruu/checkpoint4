import React from 'react';

const config = require('../../config');

const InputRank = ({category, setRank}) => {
  return (
    <label htmlFor={category}>
      {category}
      <select name={category} onChange={setRank}>
        {config.allRank.map(rank => {
          return <option value={rank}>{rank}</option>
        })}
      </select>
    </label>
  );
};

export default InputRank;
