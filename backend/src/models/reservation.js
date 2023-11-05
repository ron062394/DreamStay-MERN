const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  guest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Guest', // Reference to the User model
    required: true
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room', // Reference to the Room model
    required: true
  },
  checkInDate: {
    type: Date,
    required: true
  },
  checkOutDate: {
    type: Date,
    required: true
  },
  totalCost: {
    type: Number,
    required: true
  },
  paymentStatus: {
    type: String,
    default: 'Pending' // 'Pending', 'Paid', 'Cancelled', etc.
  }
}, { timestamps: true });

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;