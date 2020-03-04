const express = require('express');

const router = express.Router();
const player = require('../controller/player.controller');

router.get('/', player.findAll);

router.get('/:playerId', player.findById);

router.post('/', player.create);

router.put('/:playerId', player.updatePartner);

router.delete('/:playerId', player.delete);

module.exports = router;
