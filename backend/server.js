require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db'); 
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const googleMapsRoutes = require('./routes/googleMapsRoutes');



const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

connectDB();

app.use(cookieParser()); 

app.use(express.json());

app.use('/api/users', userRoutes);

app.use('/api/googleMaps', googleMapsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});