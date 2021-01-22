const { Client } = require('pg');

const client = new Client({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
});

module.exports = client;