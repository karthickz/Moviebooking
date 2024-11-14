const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');

// Route to get all genres
router.get('/', genreController.findAllGenres);

module.exports = router;
