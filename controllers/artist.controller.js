const Artist = require('../models/artist.model');

// Fetch all artists
exports.findAllArtists = async (req, res) => {
    try {
        const artists = await Artist.find();
        res.json(artists);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching artists', error: err.message });
    }
};
