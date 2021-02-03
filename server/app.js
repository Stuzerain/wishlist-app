// dependencies
const express = require('express');
const app = express();
const path = require('path');
const pgres = require('../database/index.js');
const { getPeopleQuery,
  getSelectedIdeasQuery,
  peopleInsertQuery,
  ideaInsertQuery,
  peopleIdeaJoinInsert,
  ideaDelete
  } = require('./psqlQueries.js');


// middleware
app.use(express.json());

// routes
app.use('/', express.static('./client/public'));

pgres.connect();

app.get('/API/people', (req, res) => {
  pgres.query(getPeopleQuery())
    .then(result => res.json(result.rows))
    .catch(err => {
      console.error(err);
      return res.status(400).send({error: 'error fetching people'})
    })
});

app.get('/API/selected/:peopleid', (req, res) => {
  pgres.query(getSelectedIdeasQuery(req.params.peopleid))
    .then(result => res.json(result.rows))
    .catch(err => {
      console.error(err);
      return res.status(400).send({error: 'error fetching selected ideas'})
    })
});

app.post('/API/people', (req, res) => {
  const { name, relationship } = req.body;

  pgres.query(peopleInsertQuery(name, relationship))
    .then(() => res.json('successful post to people'))
    .catch(err => {
      console.error(err);
      return res.status(400).send({error: 'error adding person'});
    })
});

app.post('/API/ideas', (req, res) => {
  const { idea, notes, selected } = req.body;

  pgres.query(ideaInsertQuery(idea, notes))
    .then(result => pgres.query(peopleIdeaJoinInsert(selected.peopleid, result.rows[0].ideaid)))
    .then(() => res.json('successful post to ideas'))
    .catch(err => {
      console.error(err);
      return res.status(400).send({error: 'error adding idea'});
    })
});

app.delete('/API/ideas/:ideaid', (req, res) => {
  pgres.query(ideaDelete(req.params.ideaid))
    .then(() => res.json('successfully deleted idea'))
    .catch(err => {
      console.error(err);
      return res.status(400).send({error: 'error deleting idea'});
    })
});

app.get('/test', (req, res) => {
  return res.json('test successful')
});

module.exports = app;