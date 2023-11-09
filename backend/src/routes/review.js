const express = require('express');
const router = express.Router();
const {createReview,getAllReviews } = require('../controllers/reviewController');

router.post('/', createReview);
router.get('/', getAllReviews);

module.exports = router;
