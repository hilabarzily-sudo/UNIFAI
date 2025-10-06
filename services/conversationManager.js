const { v4: uuidv4 } = require('uuid');

class ConversationManager {
  constructor() {
    this.conversations = new Map();
    this.maxConversations = 100; // Limit stored conversations
    this.maxMessagesPerConversation = 50;
  }

  getOrCreateConversation(conversationId) {
    if (conversationId && this.conversations.has(conversationId)) {
      return this.conversations.get(conversationId);
    }

    const newConversation = {
      id: conversationId || uuidv4(),
      messages: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    this.conversations.set(newConversation.id, newConversation);
    this.cleanup(); // Remove old conversations if limit exceeded

    return newConversation;
  }

  getConversation(conversationId) {
    return this.conversations.get(conversationId);
  }

  getAllConversations() {
    return Array.from(this.conversations.values())
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  }

  addMessage(conversationId, message) {
    const conversation = this.conversations.get(conversationId);
    if (!conversation) {
      throw new Error('Conversation not found');
    }

    const newMessage = {
      ...message,
      id: uuidv4(),
      timestamp: new Date().toISOString()
    };

    conversation.messages.push(newMessage);
    conversation.updatedAt = new Date().toISOString();

    // Trim messages if exceeds limit
    if (conversation.messages.length > this.maxMessagesPerConversation) {
      conversation.messages = conversation.messages.slice(-this.maxMessagesPerConversation);
    }

    return newMessage;
  }

  clearConversation(conversationId) {
    return this.conversations.delete(conversationId);
  }

  cleanup() {
    if (this.conversations.size > this.maxConversations) {
      const sortedConversations = Array.from(this.conversations.entries())
        .sort(([, a], [, b]) => new Date(a.updatedAt) - new Date(b.updatedAt));

      const toRemove = sortedConversations.slice(0, this.conversations.size - this.maxConversations);
      toRemove.forEach(([id]) => this.conversations.delete(id));
    }
  }
}

module.exports = new ConversationManager();
