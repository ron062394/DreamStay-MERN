const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomNumber: {
    type: String,
    required: true,
    unique: true
  },
  roomType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RoomType',
    required: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
