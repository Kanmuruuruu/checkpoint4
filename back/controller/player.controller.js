const Player = require('../models/player.models');


exports.findAll = (request, response) => {
  return Player.findAll((error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while retrieving player.'
      });
    }
    return response.status(200).send(data);
  });
};
