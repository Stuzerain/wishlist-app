const pgres = require('./index.js');

/* importing this file or running it from command line will drop all tables
   this is used for testing postgres queries and interactions from frontend */
const clearTables = () => {
  pgres.connect();
  console.log('clearing out tables...');

  // tables drop in reverse-dependency order to avoid conflicts
  pgres.query(`DROP TABLE IF EXISTS ideaTagJoin`)
  .then(() => pgres.query(`DROP TABLE IF EXISTS peopleIdeaJoin`))
  .then(() => pgres.query(`DROP TABLE IF EXISTS ideas`))
  .then(() => pgres.query(`DROP TABLE IF EXISTS tags`))
  .then(() => pgres.query(`DROP TABLE IF EXISTS people`))
  .then(() => {
      console.log('finished dropping tables. disconnecting...');
      return pgres.end();
    })
    .then(() => {
      console.log('disconnected');
    })
    .catch(err => {
      console.error(err);
      return pgres.end()
      .then(() => {
        console.log('disconnected');
      })
    })
}

clearTables();