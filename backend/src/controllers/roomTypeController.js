const RoomType = require('../models/RoomTypeModel');

const getAllRoomTypes = async (req, res) => {
  try {
    const roomTypes = await RoomType.find();
    res.status(200).json(roomTypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createRoomType = async (req, res) => {
  const { name, description, maxOccupancy, price, amenities } = req.body;
  
  try {
    const newRoomType = new RoomType({ name, description, maxOccupancy, price, amenities });
    const savedRoomType = await newRoomType.save();
    res.status(201).json(savedRoomType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllRoomTypes, createRoomType };
