const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

const Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;
