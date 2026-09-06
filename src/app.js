const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');
const { errorHandler, notFound } = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Todo REST API is running' });
});

// Routes
app.use('/api/todos', todoRoutes);

// 404 + error handling (must be last)
app.use(notFound);
app.use(errorHandler);

module.exports = app;
