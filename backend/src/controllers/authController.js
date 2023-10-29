const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Staff = require('../models/staffModel');
const Guest =require('../models/userModel')

const registerStaff = async (req, res) => {
  try {
    const { name, email, password, contact } = req.body; // Removed role since it is set as 'staff' by default

    // Check if the email is already registered
    const existingUser = await Staff.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Hash the password securely before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new staff member and save it to the database
    const newStaff = new Staff({
      name,
      email,
      password: hashedPassword,
      contact
    });

    await newStaff.save();

    // Generate a JWT and send it as a response
    const token = jwt.sign({ userId: newStaff._id }, process.env.JWT_SECRET, { expiresIn: '2h' });

    res.status(201).json({ user: newStaff.name, role: newStaff.role, token });
  } catch (error) {
    res.status(400).json({ message: 'Registration failed', error: error.message });
  }
};

const loginStaff = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the staff member by email
    const staff = await Staff.findOne({ email });

    if (!staff) {
      return res.status(401).json({ message: 'Authentication failed: User not found' });
    }

    // Compare the password using bcrypt
    const passwordMatch = await bcrypt.compare(password, staff.password);

    if (passwordMatch) {
      // Include the user's role in the token payload
      const token = jwt.sign({ userId: staff._id }, process.env.JWT_SECRET, { expiresIn: '2h' });
      return res.status(200).json({ user: staff.name, role: staff.role, token });
    } else {
      return res.status(401).json({ message: 'Authentication failed: Invalid credentials' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Authentication failed', error: error.message });
  }
};

const registerGuest = async (req, res) => {
    try {
      const { name, email, password, contact, birthday, country } = req.body;
  
      const existingUser = await Guest.findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newGuest = new Guest({
        name,
        email,
        password: hashedPassword,
        contact,
        birthday,
        country
      });
  
      await newGuest.save();
  
      const token = jwt.sign({ userId: newGuest._id }, process.env.JWT_SECRET, { expiresIn: '2h' });
  
      res.status(201).json({ user: newGuest.name, role: newGuest.role, token });
    } catch (error) {
      res.status(400).json({ message: 'Registration failed', error: error.message });
    }
};
  

const loginGuest = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const guest = await Guest.findOne({ email });
  
      if (!guest) {
        return res.status(401).json({ message: 'Authentication failed: User not found' });
      }
  
      const passwordMatch = await bcrypt.compare(password, guest.password);
  
      if (passwordMatch) {
        const token = jwt.sign({ userId: guest._id }, process.env.JWT_SECRET, { expiresIn: '2h' });
        return res.status(200).json({ user: guest.name, role: guest.role, token });
      } else {
        return res.status(401).json({ message: 'Authentication failed: Invalid credentials' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Authentication failed', error: error.message });
    }
  };

module.exports = { registerStaff, loginStaff, registerGuest, loginGuest };
