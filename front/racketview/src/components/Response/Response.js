import React from "react";
import "./Response.css";

const Response = ({ message, success }) => {
  return (
    <div>
    {message &&
        <div
          className="messageResponse"
          style={{color: success ? "green" : "red", textTransform: success ? "normal" : "uppercase"}}
        >
          <p>{message}</p>
        </div>
    }
    </div>
  );
};

export default Response;
