import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

class AIService {
  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
    
    this.systemPrompt = `You are a highly intelligent and helpful AI assistant. 
You provide thoughtful, accurate, and contextually relevant responses. 
You're friendly, professional, and adapt your communication style to the user's needs.
You can help with a wide range of topics including coding, creative writing, analysis, and general knowledge.`;
  }

  // Generate AI response
  async generateResponse(message, history = [], model = 'gpt-4') {
    try {
      // Format messages for OpenAI
      const messages = [
        { role: 'system', content: this.systemPrompt },
        ...history.map(msg => ({
          role: msg.role,
          content: msg.content
        })),
        { role: 'user', content: message }
      ];

      const completion = await this.openai.chat.completions.create({
        model: model,
        messages: messages,
        temperature: 0.7,
        max_tokens: 2000,
      });

      return completion.choices[0].message.content;
    } catch (error) {
      console.error('AI Service Error:', error);
      throw new Error(`Failed to generate AI response: ${error.message}`);
    }
  }

  // Stream AI response for real-time updates
  async streamResponse(message, history = [], model = 'gpt-4') {
    try {
      const messages = [
        { role: 'system', content: this.systemPrompt },
        ...history.map(msg => ({
          role: msg.role,
          content: msg.content
        })),
        { role: 'user', content: message }
      ];

      const stream = await this.openai.chat.completions.create({
        model: model,
        messages: messages,
        temperature: 0.7,
        max_tokens: 2000,
        stream: true,
      });

      return stream;
    } catch (error) {
      console.error('AI Stream Error:', error);
      throw new Error(`Failed to stream AI response: ${error.message}`);
    }
  }

  // Change model (gpt-4, gpt-3.5-turbo, etc.)
  setModel(model) {
    this.currentModel = model;
  }
}

export default AIService;
