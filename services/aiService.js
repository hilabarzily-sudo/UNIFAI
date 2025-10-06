const OpenAI = require('openai');
const Anthropic = require('@anthropic-ai/sdk');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { CohereClient } = require('cohere-ai');

class AIService {
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
    
    this.cohere = process.env.COHERE_API_KEY
      ? new CohereClient({ token: process.env.COHERE_API_KEY })
      : null;
  }

  async generateResponse(messages, provider = 'openai', options = {}) {
    switch (provider) {
      case 'openai':
        return await this.generateOpenAI(messages, options);
      case 'anthropic':
        return await this.generateAnthropic(messages, options);
      case 'google':
        return await this.generateGoogle(messages, options);
      case 'cohere':
        return await this.generateCohere(messages, options);
      default:
        throw new Error(`Unknown provider: ${provider}`);
    }
  }

  async generateOpenAI(messages, options = {}) {
    if (!this.openai) {
      throw new Error('OpenAI API key not configured');
    }

    const model = options.model || 'gpt-4-turbo-preview';
    const temperature = options.temperature || 0.7;

    const response = await this.openai.chat.completions.create({
      model,
      messages,
      temperature,
      max_tokens: options.maxTokens || 2000,
    });

    return {
      content: response.choices[0].message.content,
      model: response.model,
      tokens: {
        prompt: response.usage.prompt_tokens,
        completion: response.usage.completion_tokens,
        total: response.usage.total_tokens
      }
    };
  }

  async generateAnthropic(messages, options = {}) {
    if (!this.anthropic) {
      throw new Error('Anthropic API key not configured');
    }

    const model = options.model || 'claude-3-sonnet-20240229';
    const temperature = options.temperature || 0.7;

    // Convert messages format for Anthropic
    const systemMessage = messages.find(m => m.role === 'system')?.content || '';
    const conversationMessages = messages.filter(m => m.role !== 'system');

    const response = await this.anthropic.messages.create({
      model,
      max_tokens: options.maxTokens || 2000,
      temperature,
      system: systemMessage,
      messages: conversationMessages
    });

    return {
      content: response.content[0].text,
      model: response.model,
      tokens: {
        prompt: response.usage.input_tokens,
        completion: response.usage.output_tokens,
        total: response.usage.input_tokens + response.usage.output_tokens
      }
    };
  }

  async generateGoogle(messages, options = {}) {
    if (!this.google) {
      throw new Error('Google API key not configured');
    }

    const model = this.google.getGenerativeModel({ 
      model: options.model || 'gemini-pro' 
    });

    // Convert messages to Google format
    const history = messages.slice(0, -1).map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const lastMessage = messages[messages.length - 1].content;

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(lastMessage);
    const response = await result.response;

    return {
      content: response.text(),
      model: 'gemini-pro',
      tokens: {
        prompt: 0,
        completion: 0,
        total: 0
      }
    };
  }

  async generateCohere(messages, options = {}) {
    if (!this.cohere) {
      throw new Error('Cohere API key not configured');
    }

    // Convert messages to Cohere chat history format
    const chatHistory = messages.slice(0, -1).map(msg => ({
      role: msg.role === 'assistant' ? 'CHATBOT' : 'USER',
      message: msg.content
    }));

    const lastMessage = messages[messages.length - 1].content;

    const response = await this.cohere.chat({
      message: lastMessage,
      chatHistory,
      model: options.model || 'command',
      temperature: options.temperature || 0.7
    });

    return {
      content: response.text,
      model: 'command',
      tokens: {
        prompt: 0,
        completion: 0,
        total: 0
      }
    };
  }
}

module.exports = new AIService();
