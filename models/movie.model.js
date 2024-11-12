const mongoose = require('mongoose');

// Define schema for movie data
const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: [String],
    artist: [String],
    status: { type: String, enum: ['PUBLISHED', 'RELEASED'], required: true },
    releaseDate: { type: Date, required: true },
});

module.exports = mongoose.model('Movie', movieSchema);
