// dependencies
const express = require('express');
const app = express();
const path = require('path');

// middleware
app.use(express.json());

// routes
app.use('/', express.static('./client/public'))

module.exports = app;