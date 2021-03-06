const Player = require("../models/player.models");

exports.findAll = (request, response) => {
  if(request.query.info === 'name'){
    return Player.getAllName((error, data)=>{
      if (error) {
        return response.status(500).send({
          message: error.message || "Some error occurred while retrieving name of all the player."
        });
      }
      return response.status(200).send(data);
    });
  }

  return Player.findAll((error, data) => {
    if (error) {
      return response.status(500).send({
        message: error.message || "Some error occurred while retrieving player."
      });
    }
    return response.status(200).send(data);
  });
};

exports.findById = (request, response) => {
  const id = request.params.playerId;
  return Player.findById(id, (error,data) => {
    if (error) {
      if (error.kind === 'not_found') {
        return response.status(404).send({
          message: `Not found Player with id ${id}.`
        });
      }
      return response.status(500).send({
        message: `Could not delete Player with id ${id}`
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
  Player.create(player, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || "Some error occurred while creating the Address."
      });
    }
    if(playerDouble_id){
      Player.updatePartner(playerDouble_id,data.id, (error, data) => {
        if(error){
          if(error.kind === 'not_found'){
            response.status('404').send({message: 'not found this id user'});
          }
          response.status(500).send({message: 'Error servor'});
        }
      })
    }
    return response.send(data);
  });

};

exports.update = (request, response) => {
  const id = request.params.playerId;
  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }
  return Player.update(id, request.body, (error, data) => {
    if (error) {
      if (error.kind === 'not_found') {
        return response.status(404).send({
          message: `Not found Player with id ${id}.`
        });
      }
      return response.status(500).send({
        message: `Error updating Player with id ${id}`
      });
    }
    return response.send(data);
  });
};

exports.delete = (request, response) => {
  const id = request.params.playerId;
  return Player.delete(id, error => {
    if (error) {
      if (error.kind === 'not_found') {
        return response.status(404).send({
          message: `Not found Player with id ${id}.`
        });
      }
      return response.status(500).send({
        message: `Could not delete Player with id ${id}`
      });
    }
    return response.send({ message: `Player was deleted successfully!` });
  });
};


