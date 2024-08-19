const express = require('express');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors'); 
const app = express();

// Middleware
app.use(cors());  // Use cors middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/helpcenter', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Card Schema
const cardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
});

const Card = mongoose.model('Card', cardSchema);

// Ping endpoint
app.get('/ping', (req, res) => {
    res.send('Server is running!');
});

// Create a card
app.post('/cards', async (req, res) => {
    const { title, description } = req.body;
    const newCard = new Card({  title, description });
    await newCard.save();
    res.status(201).json(newCard);
});

// Get all cards
app.get('/cards', async (req, res) => {
    const cards = await Card.find();
    res.status(200).json(cards);
});

// Get a specific card by title
app.get('/cards/:title', async (req, res) => {
    const { title } = req.params;
    const card = await Card.findOne({ title });
    if (!card) return res.status(404).json({ error: 'Card not found' });
    res.status(200).json(card);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
