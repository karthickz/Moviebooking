const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artistController');

// Route to get all artists
router.get('/', artistController.findAllArtists);

module.exports = router;
