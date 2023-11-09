const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();


const app = express();

// Middleware
app.use(express.json());

//middleware
app.use(express.json());
app.use((req, res, next)=> {
    console.log(req.path, req.method);
    if (req.body) {
      console.log('Request body:');
      console.log(req.body);
    }  
    next();
})

// Routes
app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/roomtypes', require('./src/routes/roomType'));
app.use('/api/rooms', require('./src/routes/room'));
app.use('/api/reservations', require('./src/routes/reservation'));
app.use('/api/reviews', require('./src/routes/reservation'));
app.use('/api/locations', require('./src/routes/location'));


// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });


// Start the server..
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});