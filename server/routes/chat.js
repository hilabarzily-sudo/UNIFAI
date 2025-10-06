import express from 'express';
import { ChatService } from '../services/ChatService.js';

export const chatRouter = express.Router();
const chatService = new ChatService();

// Send message to AI
chatRouter.post('/message', async (req, res) => {
  try {
    const { message, model = 'gpt-4', conversationHistory = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const response = await chatService.sendMessage(message, model, conversationHistory);
    res.json(response);
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ 
      error: 'Failed to get AI response',
      details: error.message 
    });
  }
});

// Stream message (for real-time responses)
chatRouter.post('/stream', async (req, res) => {
  try {
    const { message, model = 'gpt-4', conversationHistory = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    await chatService.streamMessage(message, model, conversationHistory, (chunk) => {
      res.write(`data: ${JSON.stringify(chunk)}\n\n`);
    });

    res.write('data: [DONE]\n\n');
    res.end();
  } catch (error) {
    console.error('Stream error:', error);
    res.status(500).json({ 
      error: 'Failed to stream AI response',
      details: error.message 
    });
  }
});
