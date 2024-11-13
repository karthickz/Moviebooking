const Movie = require('../models/movie.model');

// Fetch all movies
exports.findAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json({ message: 'All Movies Data in JSON format from Mongo DB', movies });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching movies', error: err.message });
    }
};

// Fetch one movie by ID
exports.findOne = async (req, res) => {
    const movieId = req.params.movieId;
    try {
        const movie = await Movie.findById(movieId);
        res.json({ message: `Movie details for ${movieId}`, movie });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching movie', error: err.message });
    }
};

// Fetch shows for a specific movie by ID
exports.findShows = async (req, res) => {
    const movieId = req.params.movieId;
    try {
        const movie = await Movie.findById(movieId).populate('shows');
        res.json({ message: `Shows for movie ${movieId}`, shows: movie.shows });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching shows', error: err.message });
    }
};
