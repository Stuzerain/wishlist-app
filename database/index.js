const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

const db = mongoose.connect('mongodb://localhost/Wishlist');

module.exports = db;