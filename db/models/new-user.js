const mongoose = require('mongoose');

const User = new mongoose.Schema({
    firstName: String,
    lastName: String,
    npi: String,
    address1: String,
    address2: String,
    city: String,
    homeState: String,
    zip: String,
    phone: String,
    email: String
});

module.exports = mongoose.model('User', User);