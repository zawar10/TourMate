const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authentication');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

app.use(cors({
    origin: ['http://localhost:5173', 'https://tourmate-10.netlify.app']
})); 

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
    res.send('TourMate Backend API is running!');
});

app.use('/api/auth', authRoutes);
