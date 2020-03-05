import React from 'react';

const config = require('../../config');

const InputRank = ({category, setRank, label}) => {
  return (
    <label htmlFor={category}>
      {label}
      <select name={category} onChange={e => setRank(e.target.value)}>
        {config.allRank.map(rank => {
          return <option value={rank}>{rank}</option>
        })}
      </select>
    </label>
  );
};

export default InputRank;
