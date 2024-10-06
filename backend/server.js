const express = require('express');
const connectDB = require('./config/db'); 
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();

app.use(cors());

connectDB();

app.use(express.json());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});