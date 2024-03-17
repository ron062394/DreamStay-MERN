const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

const db = mongoose.connection.useDb('DreamStay')
const Contact = db.model('Contact', contactSchema);

module.exports = Contact;
