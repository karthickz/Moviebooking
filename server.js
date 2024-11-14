const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Import Routes
const movieRoutes = require('./routes/movieRoutes');
const genreRoutes = require('./routes/genreRoutes');
const artistRoutes = require('./routes/artistRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(cors());  // Enable CORS
app.use(express.json());  // Parse incoming JSON requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Error connecting to MongoDB:', err));

// Set default route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Upgrad Movie booking application development.' });
});

// Use the routes
app.use('/api/movies', movieRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api/artists', artistRoutes);

// Start the server
const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
