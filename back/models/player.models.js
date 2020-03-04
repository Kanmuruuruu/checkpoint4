const db = require('./database');

const Player = function (player) {
  this.firstname = player.firstname;
  this.lastname = player.lastname;
  this.age = player.age;
  this.rateSingle = player.rateSingle ? player.rateSingle : 'NC';
  this.rateDouble = player.rateDouble ? player.rateDouble : 'NC';
  this.playerDouble_id = player.playerDouble_id ? player.playerDouble_id : null;
};

Player.findAll = result => {
  db.query('SELECT * FROM player', (error, dbResult) => {
    if (error) {
      return result(error, null);
    }

    return result(null, dbResult);
  });
};

Player.create = (player, result) => {
  db.query('INSERT INTO player SET ?', player,(error, dbResult) => {
    if (error) {
      return result(error, null);
    }

    return result(null, { id: dbResult.insertId, ...player });
  });
};

module.exports = Player;
