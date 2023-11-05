const Reservation = require('../models/reservation');

// Create a new reservation
const createReservation = async (req, res) => {
  const { user, room, checkInDate, checkOutDate, totalCost, paymentStatus } = req.body;

  try {
    const newReservation = new Reservation({ user, room, checkInDate, checkOutDate, totalCost, paymentStatus });
    const savedReservation = await newReservation.save();
    res.status(201).json(savedReservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all reservations
const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate('user').populate('room');
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const cancelReservation = async (req, res) => {
    try {
      const reservationId = req.params.id;
      const canceledReservation = await Reservation.findByIdAndUpdate(reservationId, { paymentStatus: 'Cancelled' }, { new: true });
      if (!canceledReservation) {
        return res.status(404).json({ message: 'Reservation not found' });
      }
      res.status(200).json(canceledReservation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = { createReservation, getAllReservations, cancelReservation };