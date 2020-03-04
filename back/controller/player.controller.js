const Player = require("../models/player.models");

exports.findAll = (request, response) => {
  return Player.findAll((error, data) => {
    if (error) {
      return response.status(500).send({
        message: error.message || "Some error occurred while retrieving player."
      });
    }
    return response.status(200).send(data);
  });
};

exports.create = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const {
    firstname,
    lastname,
    age,
    rateSingle,
    rateDouble,
    playerDouble_id
  } = request.body;
  // Create a Address
  const player = new Player({
    firstname,
    lastname,
    age,
    rateSingle,
    rateDouble,
    playerDouble_id
  });

  // Save Address in the database
  return Player.create(player, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || "Some error occurred while creating the Address."
      });
    }
    return response.send(data);
  });
};
