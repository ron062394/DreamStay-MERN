const Review = require('../models/Review');

const createReview = async (req, res) => {
  const { user, room, rating, comment } = req.body;

  try {
    const newReview = new Review({ user, room, rating, comment });
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllReviews = async (req, res) => {
    try {
      const reviews = await Review.find().populate('user').populate('room');
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
  

module.exports = { createReview, getAllReviews };