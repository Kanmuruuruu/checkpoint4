import React from "react";
import "./AllRank.css";

const config = require("../../config");

const AllRank = ({ select }) => {
  return (
    <div className="allRank">
      {config.allRank.map(rank => (
        <div onClick={() => select(rank)}>{rank}</div>
      ))}
    </div>
  );
};

export default AllRank;
