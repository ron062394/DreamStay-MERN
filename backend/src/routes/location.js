const express = require('express');
const router = express.Router();
const { 
    createLocation,
    getAllLocations,
    updateLocation,
    deleteLocation
} = require('../controllers/locationController');

//Create Location
router.post('/', createLocation);

//Update Location
router.put('/:id', updateLocation); 

//Get all Location
router.get('/', getAllLocations);

//Delete a Location
router.delete('/:id', deleteLocation);

module.exports = router;