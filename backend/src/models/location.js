const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

const db = mongoose.connection.useDb('DreamStay')
const Location = db.model('Location', locationSchema);

module.exports = Location;