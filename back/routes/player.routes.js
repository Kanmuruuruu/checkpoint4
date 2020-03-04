const express = require('express');

const router = express.Router();
const player = require('../controller/player.controller');

router.get('/', player.findAll);

router.post('/', player.create);

module.exports = router;
