const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// Middleware to parse JSON payloads
app.use(express.json());

// MongoDB Connection String (Using local MongoDB. Replace with Atlas URI if using cloud)
const MONGO_URI = 'mongodb://localhost:27017/internship_db';

mongoose.connect(MONGO_URI)
  .then(() => console.log('Successfully connected to MongoDB!'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Sample API Route
app.get('/', (req, res) => {
  res.send('Internship Backend Server is Running Perfectly!');
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is blazing away on: http://localhost:${PORT}`);
});