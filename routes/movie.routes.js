const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// Route to get all movies or filter by status, title, etc.
router.get('/', movieController.findAllMovies);

// Route to get details of a specific movie by ID
router.get('/:movieId', movieController.findOne);

// Route to get shows of a specific movie by ID
router.get('/:movieId/shows', movieController.findShows);

module.exports = router;
