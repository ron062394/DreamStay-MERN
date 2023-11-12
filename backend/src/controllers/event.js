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

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { createEvent, getAllEvents };