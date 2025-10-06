const express = require('express');
const router = express.Router();
const aiService = require('../services/aiService');
const conversationManager = require('../services/conversationManager');

// Send message to AI
router.post('/message', async (req, res) => {
  try {
    const { message, conversationId, provider, options } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ 
        error: { message: 'Message is required', status: 400 } 
      });
    }

    // Get or create conversation
    const conversation = conversationManager.getOrCreateConversation(conversationId);

    // Add user message to conversation
    conversationManager.addMessage(conversation.id, {
      role: 'user',
      content: message.trim()
    });

    // Get AI response
    const aiProvider = provider || process.env.DEFAULT_AI_PROVIDER || 'openai';
    const response = await aiService.generateResponse(
      conversation.messages,
      aiProvider,
      options
    );

    // Add AI response to conversation
    conversationManager.addMessage(conversation.id, {
      role: 'assistant',
      content: response.content,
      metadata: {
        provider: aiProvider,
        model: response.model,
        tokens: response.tokens
      }
    });

    res.json({
      conversationId: conversation.id,
      message: response.content,
      provider: aiProvider,
      model: response.model,
      tokens: response.tokens,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ 
      error: { 
        message: error.message || 'Failed to generate response', 
        status: 500 
      } 
    });
  }
});

// Clear conversation
router.delete('/conversation/:id', (req, res) => {
  try {
    const { id } = req.params;
    conversationManager.clearConversation(id);
    res.json({ message: 'Conversation cleared successfully' });
  } catch (error) {
    res.status(500).json({ 
      error: { message: error.message, status: 500 } 
    });
  }
});

module.exports = router;
