const Event = require('../models/event');

const createEvent = async (req, res) => {
  const { name } = req.body;

  try {
    const newEvent = new Event({ name });
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


module.exports = { createEvent };