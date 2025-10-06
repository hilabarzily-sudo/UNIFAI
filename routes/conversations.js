const express = require('express');
const router = express.Router();
const conversationManager = require('../services/conversationManager');

// Get all conversations
router.get('/', (req, res) => {
  try {
    const conversations = conversationManager.getAllConversations();
    res.json(conversations);
  } catch (error) {
    res.status(500).json({ 
      error: { message: error.message, status: 500 } 
    });
  }
});

// Get specific conversation
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const conversation = conversationManager.getConversation(id);
    
    if (!conversation) {
      return res.status(404).json({ 
        error: { message: 'Conversation not found', status: 404 } 
      });
    }

    res.json(conversation);
  } catch (error) {
    res.status(500).json({ 
      error: { message: error.message, status: 500 } 
    });
  }
});

module.exports = router;
