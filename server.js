const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const Movie = require('./models/movie.model'); // Assuming you have a Movie model
const Genre = require('./models/genre.model'); // Assuming you have a Genre model
const Artist = require('./models/artist.model'); // Assuming you have an Artist model

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Error connecting to MongoDB:', err));

// Dynamic Routes
// 1. GET /movies
app.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find(); // Fetch all movies from DB
        res.json({ message: 'All Movies Data in JSON format from Mongo DB', movies });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching movies', error: err.message });
    }
});

// 2. GET /genres
app.get('/genres', async (req, res) => {
    try {
        const genres = await Genre.find(); // Fetch all genres from DB
        res.json({ message: 'All Genres Data in JSON format from Mongo DB', genres });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching genres', error: err.message });
    }
});

// 3. GET /artists
app.get('/artists', async (req, res) => {
    try {
        const artists = await Artist.find(); // Fetch all artists from DB
        res.json({ message: 'All Artists Data in JSON format from Mongo DB', artists });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching artists', error: err.message });
    }
});

// Start server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
