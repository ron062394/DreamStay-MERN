// Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
}, {
  timestamps: true // Enable timestamps
});

const db = mongoose.connection.useDb('DreamStay')
const Event = db.model('Event', eventSchema);

module.exports = Event;
