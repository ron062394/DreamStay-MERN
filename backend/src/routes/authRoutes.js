const express = require('express');
const router = express.Router();
const { registerStaff, loginStaff, registerGuest, loginGuest } = require('../controllers/authController');


// Register a new )staff)
router.post('/register/staff', registerStaff);

// staff login
router.post('/login/staff', loginStaff);

// Register a new user
router.post('/register', registerGuest);

// user login
router.post('/login', loginGuest);

module.exports = router;