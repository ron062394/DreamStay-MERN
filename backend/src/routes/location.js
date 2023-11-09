const express = require('express');
const router = express.Router();
const { createLocation, getAllLocations } = require('../controllers/locationController');

router.post('/', createLocation);
router.get('/', getAllLocations);

module.exports = router;