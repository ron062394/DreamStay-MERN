const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'guest'
    },
    contact: {
        type: String
    },
    birthday: {
        type: Date // Adding the birthday field of type Date
    },
    country: {
        type: String // Adding the country field
    }
}, { timestamps: true });

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;
