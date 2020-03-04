import React from "react";
import "./AllRank.css";

const AllRank = ({ select }) => {
  const ranks = [
    "NC",
    "P12",
    "P11",
    "P10",
    "D9",
    "D8",
    "D7",
    "R6",
    "R5",
    "R4",
    "N3",
    "N2",
    "N1"
  ];
  return (
    <div className="allRank">
      {ranks.map(rank => (
        <div onClick={() => select(rank)}>{rank}</div>
      ))}
    </div>
  );
};

export default AllRank;
