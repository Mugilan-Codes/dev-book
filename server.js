const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to Database
connectDB();

app.get('/', (req, res) => {
  res.send('API Running...');
});

// @desc SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
