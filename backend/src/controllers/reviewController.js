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


module.exports = { createReview, getAllReviews };