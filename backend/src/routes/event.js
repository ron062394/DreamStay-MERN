const express = require('express');
const router = express.Router();
const { createEvent, getAllEvents } = require('../controllers/event');

router.post('/', createEvent);
router.get('/', getAllEvents);

module.exports = router;