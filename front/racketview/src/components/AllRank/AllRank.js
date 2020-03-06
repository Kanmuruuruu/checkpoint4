import React from "react";
import "./AllRank.css";

const config = require("../../config");

const AllRank = ({ select, selected }) => {
  return (
    <div className="allRank">
      {config.allRank.map(rank => (
        <div
          className={`${selected === rank ? "selected" : ""}`}
          onClick={() => select(rank)}
        >
          {rank}
        </div>
      ))}
    </div>
  );
};

export default AllRank;
