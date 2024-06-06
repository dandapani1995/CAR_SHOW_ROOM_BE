// src/config/db.js
const mongoose = require('mongoose');
const config = require('../config/config');

const connectDB = async () => {
  try {
    await mongoose.connect(config.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.log('MongoDB connection error...',err);
    process.exit(1);
  }
};

module.exports = connectDB;
