const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

const db = mongoose.connection.useDb('DreamStay')
const Promotion = db.model('Promotion', promotionSchema);

module.exports = Promotion;
