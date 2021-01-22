// dependencies
const express = require('express');
const app = express();
const path = require('path');
const db = require('../database/index.js');

// middleware
app.use(express.json());

// routes
app.use('/', express.static('./client/public'));

app.post('/API/People', (req, res) => {
  // TODO -- add ability to add new people
});

module.exports = app;