const express = require('express');
const { protect, restrictTo } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/dashboard', protect, (req, res) => {
  res.json({ message: 'Welcome to your dashboard!' });
});

router.get('/admin', protect, restrictTo('admin'), (req, res) => {
  res.json({ message: 'Welcome Admin!' });
});

module.exports = router;