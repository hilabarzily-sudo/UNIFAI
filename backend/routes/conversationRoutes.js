import express from 'express';
import { 
  getAllConversations, 
  getConversation, 
  deleteConversation,
  clearAllConversations 
} from '../controllers/conversationController.js';

const router = express.Router();

// Get all conversations
router.get('/', getAllConversations);

// Get specific conversation
router.get('/:conversationId', getConversation);

// Delete conversation
router.delete('/:conversationId', deleteConversation);

// Clear all conversations
router.delete('/clear/all', clearAllConversations);

export default router;
