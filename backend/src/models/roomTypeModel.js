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
        require: True
    },
    price: {
        type: Number,
        required: true
    },
    amenities: [String]
})

const RoomType = mongoose.model('RoomType', roomTypeSchema);

module.exports = RoomType;