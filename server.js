const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3500;

// mongodb connection
connectDB();

// middleware
app.use(cookieParser());
app.use(express.json());

// app routes
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/refresh', require('./routes/refresh'))

mongoose.connection.once('open', () => {
    console.log("MongoDB connected!");
    app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
});

