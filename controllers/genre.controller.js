const Genre = require('../models/genre.model');

// Fetch all genres
exports.findAllGenres = async (req, res) => {
    try {
        const genres = await Genre.find();
        res.json(genres);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching genres', error: err.message });
    }
};
