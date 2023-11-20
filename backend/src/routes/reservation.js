const express = require('express');
const router = express.Router();
const {
    createReservation,
    getAllReservations,
    cancelReservation
} = require('../controllers/reservation');


//Create Reservation
router.post('/', createReservation);

//Get All Reservation
router.get('/', getAllReservations);

//Cancel Reservation
router.put('/:id/cancel', cancelReservation);

module.exports = router;