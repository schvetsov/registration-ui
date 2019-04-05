const mongoose = require('mongoose');

const User = new mongoose.Schema({
    firstName: String
});

module.exports = mongoose.model('User', User);