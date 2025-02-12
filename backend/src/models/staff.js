const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
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
        enum: ['admin', 'staff'],
        default: 'staff'
    },
    contact: {
        type: String
    }
},{timestamps: true,});

const db = mongoose.connection.useDb('DreamStay')
const Staff = db.model('Staff', staffSchema);

module.exports = Staff;