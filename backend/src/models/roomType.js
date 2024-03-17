const mongoose = require('mongoose');

const roomTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    maxOccupancy: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        required: true
    },
    amenities: [String]
} , { timestamps: true })

const db = mongoose.connection.useDb('DreamStay')
const RoomType = db.model('RoomType', roomTypeSchema);

module.exports = RoomType;