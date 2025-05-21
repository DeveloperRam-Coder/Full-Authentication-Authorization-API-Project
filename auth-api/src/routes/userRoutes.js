const express = require('express');
const { protect, restrictTo } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/dashboard', protect, (req, res) => {
  res.json({ message: 'Welcome to your dashboard!' });
});

router.get('/admin', protect, restrictTo('admin'), (req, res) => {
  res.json({ message: 'Welcome Admin!' });
});

router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  // Here you would typically handle the registration logic, like saving the user to the database
  res.status(201).json({ message: 'User registered successfully', user: { name, email } });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Here you would typically handle the login logic, like checking the user credentials
  res.json({ message: 'User logged in successfully', user: { email } });
});

// Test route to receive JSON data
router.post('/test', (req, res) => {
  const { email, password } = req.body;
  // Here you can handle the received data
  res.json({ message: 'Data received', data: { email, password } });
});

module.exports = router;