import AIService from '../services/aiService.js';
import ConversationService from '../services/conversationService.js';

const aiService = new AIService();
const conversationService = new ConversationService();

// Send message and get AI response
export const sendMessage = async (req, res) => {
  try {
    const { message, conversationId, model = 'gpt-4' } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Get conversation history
    const conversation = conversationService.getConversation(conversationId);
    const history = conversation ? conversation.messages : [];

    // Add user message to history
    const userMessage = {
      role: 'user',
      content: message,
      timestamp: new Date().toISOString()
    };

    // Get AI response
    const aiResponse = await aiService.generateResponse(message, history, model);

    // Create assistant message
    const assistantMessage = {
      role: 'assistant',
      content: aiResponse,
      timestamp: new Date().toISOString()
    };

    // Save both messages
    const newConversationId = conversationService.addMessage(
      conversationId || null,
      userMessage
    );
    conversationService.addMessage(newConversationId, assistantMessage);

    res.json({
      success: true,
      conversationId: newConversationId,
      message: assistantMessage.content,
      timestamp: assistantMessage.timestamp
    });

  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ 
      error: 'Failed to process message',
      details: error.message 
    });
  }
};

// Stream AI response for real-time updates
export const streamMessage = async (req, res) => {
  try {
    const { message, conversationId, model = 'gpt-4' } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Set headers for SSE
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Get conversation history
    const conversation = conversationService.getConversation(conversationId);
    const history = conversation ? conversation.messages : [];

    // Add user message
    const userMessage = {
      role: 'user',
      content: message,
      timestamp: new Date().toISOString()
    };

    // Stream AI response
    const stream = await aiService.streamResponse(message, history, model);
    let fullResponse = '';

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || '';
      if (content) {
        fullResponse += content;
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
    }

    // Save messages after streaming completes
    const newConversationId = conversationService.addMessage(
      conversationId || null,
      userMessage
    );
    
    const assistantMessage = {
      role: 'assistant',
      content: fullResponse,
      timestamp: new Date().toISOString()
    };
    
    conversationService.addMessage(newConversationId, assistantMessage);

    res.write(`data: ${JSON.stringify({ 
      done: true, 
      conversationId: newConversationId 
    })}\n\n`);
    res.end();

  } catch (error) {
    console.error('Stream error:', error);
    res.write(`data: ${JSON.stringify({ 
      error: 'Failed to stream message',
      details: error.message 
    })}\n\n`);
    res.end();
  }
};
