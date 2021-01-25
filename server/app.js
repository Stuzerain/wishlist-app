// dependencies
const express = require('express');
const app = express();
const path = require('path');
const db = require('../database/index.js');

// middleware
app.use(express.json());

// routes
app.use('/', express.static('./client/public'));

app.get('/API/people', (req, res) => {
  return res.json([
    {name: 'a'},
    {name: 'b'},
    {name: 'c'}
  ])
  // TODO -- add ability to add new people
});

app.get('/test', (req, res) => {
  return res.json('test')
})

module.exports = app;