import ConversationService from '../services/conversationService.js';

const conversationService = new ConversationService();

// Get all conversations
export const getAllConversations = (req, res) => {
  try {
    const conversations = conversationService.getAllConversations();
    res.json({
      success: true,
      conversations
    });
  } catch (error) {
    console.error('Error getting conversations:', error);
    res.status(500).json({ 
      error: 'Failed to get conversations',
      details: error.message 
    });
  }
};

// Get specific conversation
export const getConversation = (req, res) => {
  try {
    const { conversationId } = req.params;
    const conversation = conversationService.getConversation(conversationId);

    if (!conversation) {
      return res.status(404).json({ error: 'Conversation not found' });
    }

    res.json({
      success: true,
      conversation
    });
  } catch (error) {
    console.error('Error getting conversation:', error);
    res.status(500).json({ 
      error: 'Failed to get conversation',
      details: error.message 
    });
  }
};

// Delete conversation
export const deleteConversation = (req, res) => {
  try {
    const { conversationId } = req.params;
    const deleted = conversationService.deleteConversation(conversationId);

    if (!deleted) {
      return res.status(404).json({ error: 'Conversation not found' });
    }

    res.json({
      success: true,
      message: 'Conversation deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting conversation:', error);
    res.status(500).json({ 
      error: 'Failed to delete conversation',
      details: error.message 
    });
  }
};

// Clear all conversations
export const clearAllConversations = (req, res) => {
  try {
    conversationService.clearAll();
    res.json({
      success: true,
      message: 'All conversations cleared successfully'
    });
  } catch (error) {
    console.error('Error clearing conversations:', error);
    res.status(500).json({ 
      error: 'Failed to clear conversations',
      details: error.message 
    });
  }
};
