const mongoose = require('mongoose');
const URI = process.env.DATABASE_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
    } catch (err) {
        console.error(err);
    }
};

module.exports = connectDB;