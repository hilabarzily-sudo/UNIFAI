import OpenAI from 'openai';
import Anthropic from '@anthropic-ai/sdk';
import { GoogleGenerativeAI } from '@google/generative-ai';

export class ChatService {
  constructor() {
    // Initialize AI clients
    this.openai = process.env.OPENAI_API_KEY 
      ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
      : null;
    
    this.anthropic = process.env.ANTHROPIC_API_KEY
      ? new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
      : null;
    
    this.google = process.env.GOOGLE_API_KEY
      ? new GoogleGenerativeAI(process.env.GOOGLE_API_KEY)
      : null;
  }

  async sendMessage(message, model, conversationHistory = []) {
    const provider = this.getProvider(model);

    switch (provider) {
      case 'openai':
        return await this.sendToOpenAI(message, model, conversationHistory);
      case 'anthropic':
        return await this.sendToAnthropic(message, model, conversationHistory);
      case 'google':
        return await this.sendToGoogle(message, conversationHistory);
      default:
        throw new Error(`Unsupported model: ${model}`);
    }
  }

  async streamMessage(message, model, conversationHistory = [], onChunk) {
    const provider = this.getProvider(model);

    switch (provider) {
      case 'openai':
        return await this.streamOpenAI(message, model, conversationHistory, onChunk);
      case 'anthropic':
        return await this.streamAnthropic(message, model, conversationHistory, onChunk);
      case 'google':
        return await this.streamGoogle(message, conversationHistory, onChunk);
      default:
        throw new Error(`Unsupported model: ${model}`);
    }
  }

  getProvider(model) {
    if (model.startsWith('gpt-')) return 'openai';
    if (model.startsWith('claude-')) return 'anthropic';
    if (model.startsWith('gemini-')) return 'google';
    return null;
  }

  // OpenAI Implementation
  async sendToOpenAI(message, model, conversationHistory) {
    if (!this.openai) {
      throw new Error('OpenAI API key not configured');
    }

    const messages = [
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    const completion = await this.openai.chat.completions.create({
      model: model,
      messages: messages,
      temperature: 0.7,
      max_tokens: 2000
    });

    return {
      content: completion.choices[0].message.content,
      model: model,
      provider: 'openai'
    };
  }

  async streamOpenAI(message, model, conversationHistory, onChunk) {
    if (!this.openai) {
      throw new Error('OpenAI API key not configured');
    }

    const messages = [
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    const stream = await this.openai.chat.completions.create({
      model: model,
      messages: messages,
      temperature: 0.7,
      max_tokens: 2000,
      stream: true
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || '';
      if (content) {
        onChunk({ content, done: false });
      }
    }
  }

  // Anthropic Implementation
  async sendToAnthropic(message, model, conversationHistory) {
    if (!this.anthropic) {
      throw new Error('Anthropic API key not configured');
    }

    const messages = conversationHistory
      .filter(msg => msg.role !== 'system')
      .concat([{ role: 'user', content: message }]);

    const response = await this.anthropic.messages.create({
      model: model,
      max_tokens: 2000,
      messages: messages
    });

    return {
      content: response.content[0].text,
      model: model,
      provider: 'anthropic'
    };
  }

  async streamAnthropic(message, model, conversationHistory, onChunk) {
    if (!this.anthropic) {
      throw new Error('Anthropic API key not configured');
    }

    const messages = conversationHistory
      .filter(msg => msg.role !== 'system')
      .concat([{ role: 'user', content: message }]);

    const stream = await this.anthropic.messages.create({
      model: model,
      max_tokens: 2000,
      messages: messages,
      stream: true
    });

    for await (const chunk of stream) {
      if (chunk.type === 'content_block_delta') {
        onChunk({ content: chunk.delta.text, done: false });
      }
    }
  }

  // Google Gemini Implementation
  async sendToGoogle(message, conversationHistory) {
    if (!this.google) {
      throw new Error('Google API key not configured');
    }

    const model = this.google.getGenerativeModel({ model: 'gemini-pro' });
    
    const chat = model.startChat({
      history: conversationHistory.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }))
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;

    return {
      content: response.text(),
      model: 'gemini-pro',
      provider: 'google'
    };
  }

  async streamGoogle(message, conversationHistory, onChunk) {
    if (!this.google) {
      throw new Error('Google API key not configured');
    }

    const model = this.google.getGenerativeModel({ model: 'gemini-pro' });
    
    const chat = model.startChat({
      history: conversationHistory.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }))
    });

    const result = await chat.sendMessageStream(message);

    for await (const chunk of result.stream) {
      const text = chunk.text();
      if (text) {
        onChunk({ content: text, done: false });
      }
    }
  }
}
