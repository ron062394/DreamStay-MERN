const express = require('express');
const router = express.Router();
const {createRoomType, getAllRoomTypes} = require('../controllers/roomTypeController');

// GET all room types
router.get('/', getAllRoomTypes);

// POST create a new room type
router.post('/', createRoomType);

module.exports = router;
