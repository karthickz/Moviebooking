const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// User registration route
router.post('/register', userController.register);

// User login route
router.post('/login', userController.login);

// Get user details (protected route, requires authentication)
router.get('/me', authMiddleware, userController.getUser);

module.exports = router;
