const express = require('express');
const router = express.Router();
const { createLocation, getAllLocations, updateLocation } = require('../controllers/locationController');

//Create Location
router.post('/', createLocation);

//Update Location
router.put('/:id', updateLocation); 

//Get all Location
router.get('/', getAllLocations);

module.exports = router;