const Location = require('../models/location');

const createLocation = async (req, res) => {
  const { name } = req.body;

  try {
    const newLocation = new Location({ name });
    const savedLocation = await newLocation.save();
    res.status(201).json(savedLocation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { createLocation, getAllLocations };