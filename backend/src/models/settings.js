const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

const db = mongoose.connection.useDb('DreamStay')
const Settings = db.model('Settings', settingsSchema);

module.exports = Settings;
