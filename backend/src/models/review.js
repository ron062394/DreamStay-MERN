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
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
