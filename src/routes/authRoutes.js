const express = require('express');
const router = express.Router();
const { registerUser, loginUser, setupMpin, getUserProfile } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware')

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
router.post('/set-mpin', protect, setupMpin);

module.exports = router;