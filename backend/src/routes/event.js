const express = require('express');
const router = express.Router();
const { createEvent, getAllEvents } = require('../controllers/event');

//Create an Event
router.post('/', createEvent);

//Get all Event
router.get('/', getAllEvents);

module.exports = router;