require('dotenv').config()

const express = require("express")
const app = express()
const mongoose = require("mongoose")
const connectDB = require('./config/database');
const wisataRoutes = require('./routes/locations');

// Connect to Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', wisataRoutes);

app.get('/', (req, res) => {
    res.redirect('/api');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
