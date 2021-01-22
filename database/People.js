const mongoose = require('mongoose');
const db = require('./index.js');

const PeopleSchema = new mongoose.Schema({
  // TODO -- flesh out schema
});

const People = mongoose.model('People', PeopleSchema);

module.exports = People;