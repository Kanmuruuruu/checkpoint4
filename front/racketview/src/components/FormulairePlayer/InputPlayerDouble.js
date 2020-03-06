import React, { useState, useEffect } from "react";
import fullName from "../../function/fullName";

const playerApi = require('../../api/player');

const InputPlayerDouble = ({ changePartner }) => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    (async () => {
      setPartners(await playerApi.findAllName());
    })();
  }, []);

  const handleChange = e => {
    changePartner(e.target.value);
  };

  return (
    <div className="inputPlayerDouble">
      <label htmlFor="partner">
        <p style={{ margin: 'auto'}}>Partenaire de Double</p>
        <select id="100" onChange={handleChange}>
          <option id="0" value={null}> </option>
          {partners
            .filter(partner => !partner.playerDouble_id)
            .map(partner => {
            return (
              <option id={partner.id} value={partner.id}>
                {fullName(partner.firstname, partner.lastname)}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

export default InputPlayerDouble;
