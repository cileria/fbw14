const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    pages: Array
});

module.exports = mongoose.model('users', userSchema);