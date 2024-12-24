const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Load data
const data = require('./data.json');

// Routes
app.get('/search', (req, res) => {
    const query = req.query.q?.toLowerCase() || '';
    const results = data.filter(item => item.name.toLowerCase().includes(query));
    res.json(results);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
