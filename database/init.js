const pgres = require('./index.js');

const createPeopleTable = `CREATE TABLE people(
  ID SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  relationship TEXT,
)`;

const createIdeasTable = `CREATE TABLE ideas(
  ID SERIAL PRIMARY KEY NOT NULL,
  idea TEXT NOT NULL,
)`;

const createPeopleIdeaJoinTable = `CREATE TABLE peopleIdeaJoin(
  peopleID varchar2(10) NOT NULL,
  ideaID varchar2(10) NOT NULL,
  FOREIGN KEY (peopleID) REFERENCES people(ID),
  FOREIGN KEY (ideaID) REFERENCES ideas(ID),
  UNIQUE (peopleID, ideaID)
)`;

// IIFE to clear and recreate tables
const init = () => {

}();