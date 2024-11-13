const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artistController');

// Define your artist route
router.get('/', artistController.findAllArtists);

module.exports = router;
