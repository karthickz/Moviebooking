const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');

// Define your genre route
router.get('/', genreController.findAllGenres);

module.exports = router;
