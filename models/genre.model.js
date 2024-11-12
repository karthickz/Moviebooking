const mongoose = require('mongoose');

// Define schema for genre data
const genreSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

module.exports = mongoose.model('Genre', genreSchema);
