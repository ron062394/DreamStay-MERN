const express = require('express');
const router = express.Router();
const {
    createReservation,
    getAllReservations,
    cancelReservation
} = require('../controllers/reservationController');

router.post('/', createReservation);
router.get('/', getAllReservations);

router.put('/:id/cancel', cancelReservation);

module.exports = router;