import { v4 as uuidv4 } from 'uuid';

class ConversationService {
  constructor() {
    // In-memory storage (replace with database for production)
    this.conversations = new Map();
  }

  // Create new conversation or add message to existing one
  addMessage(conversationId, message) {
    if (!conversationId) {
      // Create new conversation
      conversationId = uuidv4();
      this.conversations.set(conversationId, {
        id: conversationId,
        messages: [message],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    } else {
      // Add to existing conversation
      const conversation = this.conversations.get(conversationId);
      if (conversation) {
        conversation.messages.push(message);
        conversation.updatedAt = new Date().toISOString();
      } else {
        // Create new if doesn't exist
        this.conversations.set(conversationId, {
          id: conversationId,
          messages: [message],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
      }
    }

    return conversationId;
  }

  // Get conversation by ID
  getConversation(conversationId) {
    return this.conversations.get(conversationId);
  }

  // Get all conversations
  getAllConversations() {
    return Array.from(this.conversations.values())
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  }

  // Delete conversation
  deleteConversation(conversationId) {
    return this.conversations.delete(conversationId);
  }

  // Clear all conversations
  clearAll() {
    this.conversations.clear();
  }

  // Get conversation count
  getCount() {
    return this.conversations.size;
  }
}

export default ConversationService;
