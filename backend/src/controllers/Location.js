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

const updateLocation = async (req, res) => {
  const locationId = req.params.id;
  const { name } = req.body;

  try {
    const updatedLocation = await Location.findByIdAndUpdate(locationId, { name }, { new: true });
    if (!updatedLocation) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.status(200).json(updatedLocation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createLocation, getAllLocations, updateLocation };