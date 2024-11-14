const Movie = require('../models/movie.model');

// Fetch all movies or filter by status
exports.findAllMovies = async (req, res) => {
    const { status, title, genres, artists, start_date, end_date } = req.query;
    let filter = {};
    if (status) filter.status = status;
    if (title) filter.title = { $regex: title, $options: 'i' };
    // Add additional filtering for genres, artists, dates as needed
    try {
        const movies = await Movie.find(filter);
        res.json(movies);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching movies', error: err.message });
    }
};

// Fetch movie details by ID
exports.findOne = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.movieId);
        if (!movie) return res.status(404).json({ message: 'Movie not found' });
        res.json(movie);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching movie details', error: err.message });
    }
};

// Fetch shows of a specific movie by ID
exports.findShows = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.movieId);
        if (!movie) return res.status(404).json({ message: 'Movie not found' });
        res.json({ shows: movie.shows });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching movie shows', error: err.message });
    }
};
