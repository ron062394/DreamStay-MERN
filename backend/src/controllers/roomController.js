const Room = require('../models/RoomModel');

// Get all rooms
const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find().populate('roomType'); // Populate roomType details
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new room
const createRoom = async (req, res) => {
  const { roomNumber, roomType, isAvailable } = req.body;
  
  try {
    const newRoom = new Room({ roomNumber, roomType, isAvailable });
    const savedRoom = await newRoom.save();
    res.status(201).json(savedRoom);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Get a single room by ID
const getRoomById = async (req, res) => {
    try {
      const roomId = req.params.id;
      const room = await Room.findById(roomId).populate('roomType');
      if (!room) {
        return res.status(404).json({ message: 'Room not found' });
      }
      res.status(200).json(room);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Update room details by ID
  const updateRoom = async (req, res) => {
    try {
      const roomId = req.params.id;
      const updatedRoom = await Room.findByIdAndUpdate(roomId, req.body, { new: true });
      if (!updatedRoom) {
        return res.status(404).json({ message: 'Room not found' });
      }
      res.status(200).json(updatedRoom);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a room by ID
  const deleteRoom = async (req, res) => {
    try {
      const roomId = req.params.id;
      const deletedRoom = await Room.findByIdAndDelete(roomId);
      if (!deletedRoom) {
        return res.status(404).json({ message: 'Room not found' });
      }
      res.status(200).json({ message: 'Room deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


module.exports = {
    getAllRooms,
    createRoom,
    getRoomById,
    updateRoom,
    deleteRoom,
};
