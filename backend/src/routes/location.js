const express = require('express');
const router = express.Router();
const { createLocation, getAllLocations } = require('../controllers/locationController');

//Create Location
router.post('/', createLocation);

//Update Location
router.put('/:id', locationController.updateLocation); 


//Get all Location
router.get('/', getAllLocations);

module.exports = router;