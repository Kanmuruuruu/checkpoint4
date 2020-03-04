const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');

const db = require('./database');
const port = process.env.PORT || 8000;
const app = express();
const cors = require('cors');

// Parse requests of content-type: application/json
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: 'http://localhost:3000' }));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Serveur is running on port : ${port} `);
});
