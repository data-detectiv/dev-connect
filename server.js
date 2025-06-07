const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 3500;

connectDB();

mongoose.connection.once('open', () => {
    console.log("MongoDB connected!");
    app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
});

