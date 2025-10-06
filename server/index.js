import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { chatRouter } from './routes/chat.js';
import { modelsRouter } from './routes/models.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/chat', chatRouter);
app.use('/api/models', modelsRouter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'UNIFAI Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: err.message 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 UNIFAI Server running on port ${PORT}`);
  console.log(`📡 Ready to accept requests from ${process.env.CLIENT_URL || 'http://localhost:5173'}`);
});
