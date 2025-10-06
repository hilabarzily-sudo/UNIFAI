import express from 'express';
import { AIService } from '../services/aiService.js';

const router = express.Router();
const aiService = new AIService();

// POST /api/chat/message - Send a message and get AI response
router.post('/message', async (req, res) => {
  try {
    const { message, conversationHistory = [], provider = 'auto' } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({
        error: 'Message is required and must be a string'
      });
    }

    // Get AI response
    const response = await aiService.generateResponse(
      message,
      conversationHistory,
      provider
    );

    res.json({
      success: true,
      data: {
        message: response.message,
        provider: response.provider,
        model: response.model,
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({
      error: error.message || 'Failed to generate response',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// POST /api/chat/stream - Stream AI response
router.post('/stream', async (req, res) => {
  try {
    const { message, conversationHistory = [], provider = 'auto' } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({
        error: 'Message is required and must be a string'
      });
    }

    // Set headers for SSE (Server-Sent Events)
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Stream the response
    await aiService.streamResponse(
      message,
      conversationHistory,
      provider,
      (chunk) => {
        res.write(`data: ${JSON.stringify(chunk)}\n\n`);
      }
    );

    res.write('data: [DONE]\n\n');
    res.end();
  } catch (error) {
    console.error('Stream error:', error);
    res.write(`data: ${JSON.stringify({ error: error.message })}\n\n`);
    res.end();
  }
});

// GET /api/chat/providers - Get available AI providers
router.get('/providers', (req, res) => {
  res.json({
    success: true,
    providers: aiService.getAvailableProviders()
  });
});

export default router;
