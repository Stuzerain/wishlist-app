// dependencies
const express = require('express');
const app = express();
const path = require('path');
const pgres = require('../database/index.js');

// middleware
app.use(express.json());

// routes
app.use('/', express.static('./client/public'));

pgres.connect();

app.get('/API/people', (req, res) => {
  let getPeopleQuery = `SELECT * FROM people`;

  pgres.query(getPeopleQuery)
    .then(result => res.json(result.rows))
    .catch(err => {
      console.error(err);
      return res.status(400).send({error: 'error fetching people'})
    })
});

app.post('/API/people', (req, res) => {
  const { name, relationship } = req.body;

  let insertQuery = `INSERT INTO people (
    name,
    relationship
  ) VALUES (
    $1, $2
  )`

  pgres.query(insertQuery, [name, relationship])
    .then(() => res.json('successful post to people'))
    .catch(err => {
      console.error(err);
      return res.status(400).send({error: 'error adding person'});
    })

});

app.get('/test', (req, res) => {
  return res.json('test successful')
});

module.exports = app;