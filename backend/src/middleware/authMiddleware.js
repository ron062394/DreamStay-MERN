const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
require('dotenv').config();

const authenticateUser = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    
    if (!token) {
      return res.status(401).json({ message: 'Authentication failed: No token provided' });
    }

    const decoded = jwt.verify(token.substring(7), process.env.JWT_SECRET);
  
    const user = await User.findOne({ _id: decoded.userId });

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed: User not found' });
    }

    next();
  } catch (error) {
    console.log(error.message)
    return res.status(401).json({ message: 'Authentication failed: Invalid token' });

  }
};

module.exports = { authenticateUser };