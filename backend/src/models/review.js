const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  guest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Guest',
    required: true
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  comment: {
    type: String
  }
}, { timestamps: true });

const db = mongoose.connection.useDb('DreamStay')
const Review = db.model('Review', reviewSchema);

module.exports = Review;
