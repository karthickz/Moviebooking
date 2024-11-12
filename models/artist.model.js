const mongoose = require('mongoose');

// Define schema for artist data
const artistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, enum: ['Actor', 'Director', 'Producer'], required: true }
});

module.exports = mongoose.model('Artist', artistSchema);
