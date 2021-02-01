const pgres = require('./index.js');

const createPeopleTable = `CREATE TABLE people(
  peopleID SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  relationship TEXT
)`;

const createIdeasTable = `CREATE TABLE ideas(
  ideaID SERIAL PRIMARY KEY NOT NULL,
  idea TEXT NOT NULL,
  notes TEXT
)`;

const createTagsTable = `CREATE TABLE tags(
  tagID SERIAL PRIMARY KEY NOT NULL,
  tag TEXT NOT NULL
)`;

// join table for 'people' and 'ideas'
const createPeopleIdeaJoinTable = `CREATE TABLE peopleIdeaJoin(
  peopleID INT NOT NULL,
  ideaID INT NOT NULL,
  FOREIGN KEY (peopleID) REFERENCES people(peopleID),
  FOREIGN KEY (ideaID) REFERENCES ideas(ideaID),
  UNIQUE (peopleID, ideaID)
)`;

// join table for 'ideas' and 'tags'
const createIdeaTagJoinTable = `CREATE TABLE ideaTagJoin(
  ideaID INT NOT NULL,
  tagID INT NOT NULL,
  FOREIGN KEY (ideaID) REFERENCES ideas(ideaID),
  FOREIGN KEY (tagID) REFERENCES tags(tagID),
  UNIQUE (ideaID, tagID)
)`;

const init = () => {
  pgres.connect();
  console.log('starting setup');

  pgres.query(createPeopleTable)
    .then(() => {
      console.log('people table created');
      pgres.query(createIdeasTable);
    })
    .then(() => {
      console.log('ideas table created');
      pgres.query(createTagsTable);
    })
    .then(() => {
      console.log('tags table created');
      pgres.query(createPeopleIdeaJoinTable);
    })
    .then(() => {
      console.log('people-idea join table created');
      pgres.query(createIdeaTagJoinTable);
    })
    /* THIS IS CURRENTLY COMMENTED OUT DUE TO SPEED OF D/C--SEE LINE 75 */
    // .then(() => {
    //   console.log('idea-tags join table created. disconnecting...');
    //   return pgres.end();
    // })
    // .then(() => {
    //   console.log('disconnected');
    // })
    .catch(err => {
      console.error(err);
      return pgres.end()
      .then(() => {
        console.log('disconnected');
      })
    })
};

// delay disconnect 1/4 second to ensure all tables have time to be created
// previously, pgres disconnected before all tables were created
const setup = () => {
  init();
  setTimeout(() => {
    pgres.end()
      .then(() => {
        console.log('disconnected')
      })
  }, 250)
}

setup();