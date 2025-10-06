import { OpenAIService } from '../services/openai.service.js';
import { AnthropicService } from '../services/anthropic.service.js';

export const handleChatRequest = async (req, res) => {
  try {
    const { messages, model = 'gpt-4-turbo-preview', temperature = 0.7 } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ 
        error: 'Invalid request: messages array is required' 
      });
    }

    let response;

    // Route to appropriate AI service based on model
    if (model.startsWith('gpt-') || model.startsWith('o1-')) {
      response = await OpenAIService.chat(messages, model, temperature);
    } else if (model.startsWith('claude-')) {
      response = await AnthropicService.chat(messages, model, temperature);
    } else {
      return res.status(400).json({ 
        error: 'Unsupported model' 
      });
    }

    res.json({
      success: true,
      message: response,
      model: model,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to process chat request' 
    });
  }
};
