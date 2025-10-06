import OpenAI from 'openai';
import Anthropic from '@anthropic-ai/sdk';
import dotenv from 'dotenv';

dotenv.config();

export class AIService {
  constructor() {
    // Initialize OpenAI client
    this.openai = process.env.OPENAI_API_KEY 
      ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
      : null;

    // Initialize Anthropic client
    this.anthropic = process.env.ANTHROPIC_API_KEY
      ? new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
      : null;

    // Default models
    this.models = {
      openai: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
      anthropic: process.env.ANTHROPIC_MODEL || 'claude-3-opus-20240229'
    };
  }

  /**
   * Get list of available AI providers
   */
  getAvailableProviders() {
    const providers = [];
    
    if (this.openai) {
      providers.push({
        name: 'openai',
        displayName: 'OpenAI',
        model: this.models.openai,
        status: 'active'
      });
    }
    
    if (this.anthropic) {
      providers.push({
        name: 'anthropic',
        displayName: 'Anthropic Claude',
        model: this.models.anthropic,
        status: 'active'
      });
    }

    return providers;
  }

  /**
   * Select best available provider
   */
  selectProvider(preferredProvider = 'auto') {
    if (preferredProvider === 'openai' && this.openai) {
      return 'openai';
    }
    if (preferredProvider === 'anthropic' && this.anthropic) {
      return 'anthropic';
    }
    
    // Auto-select: prefer OpenAI, fallback to Anthropic
    if (this.openai) return 'openai';
    if (this.anthropic) return 'anthropic';
    
    throw new Error('No AI provider configured. Please set OPENAI_API_KEY or ANTHROPIC_API_KEY in .env file');
  }

  /**
   * Format conversation history for the selected provider
   */
  formatMessages(userMessage, conversationHistory, provider) {
    const messages = [];
    
    // Add conversation history
    conversationHistory.forEach(msg => {
      messages.push({
        role: msg.role,
        content: msg.content
      });
    });
    
    // Add current user message
    messages.push({
      role: 'user',
      content: userMessage
    });
    
    return messages;
  }

  /**
   * Generate response using OpenAI
   */
  async generateWithOpenAI(messages) {
    try {
      const completion = await this.openai.chat.completions.create({
        model: this.models.openai,
        messages: messages,
        temperature: 0.7,
        max_tokens: 2000,
      });

      return {
        message: completion.choices[0].message.content,
        provider: 'openai',
        model: this.models.openai
      };
    } catch (error) {
      throw new Error(`OpenAI API Error: ${error.message}`);
    }
  }

  /**
   * Generate response using Anthropic Claude
   */
  async generateWithAnthropic(messages) {
    try {
      // Anthropic requires system message separate from messages
      const systemMessage = messages.find(m => m.role === 'system');
      const conversationMessages = messages.filter(m => m.role !== 'system');

      const response = await this.anthropic.messages.create({
        model: this.models.anthropic,
        max_tokens: 2000,
        system: systemMessage?.content || 'You are a helpful AI assistant.',
        messages: conversationMessages
      });

      return {
        message: response.content[0].text,
        provider: 'anthropic',
        model: this.models.anthropic
      };
    } catch (error) {
      throw new Error(`Anthropic API Error: ${error.message}`);
    }
  }

  /**
   * Generate AI response (main method)
   */
  async generateResponse(userMessage, conversationHistory = [], preferredProvider = 'auto') {
    const provider = this.selectProvider(preferredProvider);
    const messages = this.formatMessages(userMessage, conversationHistory, provider);

    // Add system message if not present
    if (!messages.find(m => m.role === 'system')) {
      messages.unshift({
        role: 'system',
        content: 'You are UNIFAI, an advanced AI assistant with high intelligence. You are helpful, creative, clever, and very friendly. You provide detailed and thoughtful responses.'
      });
    }

    switch (provider) {
      case 'openai':
        return await this.generateWithOpenAI(messages);
      case 'anthropic':
        return await this.generateWithAnthropic(messages);
      default:
        throw new Error('Invalid provider');
    }
  }

  /**
   * Stream AI response
   */
  async streamResponse(userMessage, conversationHistory = [], preferredProvider = 'auto', onChunk) {
    const provider = this.selectProvider(preferredProvider);
    const messages = this.formatMessages(userMessage, conversationHistory, provider);

    // Add system message if not present
    if (!messages.find(m => m.role === 'system')) {
      messages.unshift({
        role: 'system',
        content: 'You are UNIFAI, an advanced AI assistant with high intelligence. You are helpful, creative, clever, and very friendly.'
      });
    }

    if (provider === 'openai') {
      const stream = await this.openai.chat.completions.create({
        model: this.models.openai,
        messages: messages,
        temperature: 0.7,
        max_tokens: 2000,
        stream: true,
      });

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || '';
        if (content) {
          onChunk({ content, provider: 'openai' });
        }
      }
    } else if (provider === 'anthropic') {
      const systemMessage = messages.find(m => m.role === 'system');
      const conversationMessages = messages.filter(m => m.role !== 'system');

      const stream = await this.anthropic.messages.stream({
        model: this.models.anthropic,
        max_tokens: 2000,
        system: systemMessage?.content || 'You are a helpful AI assistant.',
        messages: conversationMessages
      });

      for await (const chunk of stream) {
        if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
          onChunk({ content: chunk.delta.text, provider: 'anthropic' });
        }
      }
    }
  }
}
