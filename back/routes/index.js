const express = require('express');

const router = express.Router();

const player = require('./player.routes');

router.use('/player', player);

module.exports = router;
