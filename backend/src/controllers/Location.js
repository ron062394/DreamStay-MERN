const Location = require('../models/location');

// Create a new location
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



module.exports = { createLocation,  };
