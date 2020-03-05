const db = require("./database");

const Player = function(player) {
  this.firstname = player.firstname;
  this.lastname = player.lastname;
  this.age = player.age;
  this.rateSingle = player.rateSingle ? player.rateSingle : "NC";
  this.rateDouble = player.rateDouble ? player.rateDouble : "NC";
  this.playerDouble_id = player.playerDouble_id ? player.playerDouble_id : null;
};

Player.findAll = result => {
  db.query(
    "select p.*, case \n" +
      "when p.playerDouble_id > 0 THEN (select pa.lastname from player as pa where pa.id=p.playerDouble_id)\n" +
      "else 'null'\n" +
      "END\n" +
      "from player as p;",
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }

      return result(null, dbResult);
    }
  );
};

Player.findById = (id, result) => {
  db.query("SELECT * FROM player WHERE id=?", id, (error, dbResult) => {
    if (error) {
      return result(error, null);
    }

    if (dbResult.affectedRows === 0) {
      // Not found Player with the id
      return result({ kind: "not_found" }, null);
    }

    return result(null, dbResult);
  });
};

Player.getAllName = result => {
  db.query(
    "SELECT id, firstname, lastname, playerDouble_id FROM player",
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }

      return result(null, dbResult);
    }
  );
};

Player.create = (player, result) => {
  db.query("INSERT INTO player SET ?", player, (error, dbResult) => {
    if (error) {
      return result(error, null);
    }

    return result(null, { id: dbResult.insertId, ...player });
  });
};

Player.updatePartner = (id, partnerId, result) => {
  db.query(
    "UPDATE player SET playerDouble_id=? WHERE id = ?",
    [partnerId, id],
    (error, response) => {
      if (error) {
        return result(error, null);
      }

      if (response.affectedRows === 0) {
        // Not found Address with the id
        return result({ kind: "not_found" }, null);
      }

      return result(null, {
        id: id,
        playerDouble_id: partnerId
      });
    }
  );
};

Player.update = (id, newPlayer, result) => {
  db.query(
    "UPDATE player SET ? WHERE id = ?",
    [newPlayer, id],
    (error, response) => {
      if (error) {
        return result(error, null);
      }

      if (response.affectedRows === 0) {
        // Not found Address with the id
        return result({ kind: "not_found" }, null);
      }

      return result(null, {
        id: id,
        ...newPlayer
      });
    }
  );
};

Player.delete = (id, result) => {

  db.query('UPDATE player SET playerDouble_id = null where playerDouble_id=?',id, (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
  });

  db.query("DELETE FROM player WHERE id = ?", id, (error, dbResult) => {
    if (error) {
      return result(error, null);
    }

    if (dbResult.affectedRows === 0) {
      // Not found Player with the id
      return result({ kind: "not_found" }, null);
    }

    return result(null, dbResult);
  });
};

module.exports = Player;
