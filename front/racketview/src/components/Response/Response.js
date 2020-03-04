import React from 'react';

const Response = ({ message, success}) => {
  return (
    <div style={{ color : success ? 'green' : 'red'}}>
      {message}
    </div>
  );
};

export default Response;
