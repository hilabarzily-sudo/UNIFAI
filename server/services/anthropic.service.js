import Anthropic from '@anthropic-ai/sdk';

const anthropic = process.env.ANTHROPIC_API_KEY
  ? new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  : null;

export class AnthropicService {
  static async chat(messages, model = 'claude-3-sonnet-20240229', temperature = 0.7) {
    if (!anthropic) {
      throw new Error('Anthropic API key is not configured');
    }

    try {
      // Convert OpenAI format to Anthropic format
      const systemMessage = messages.find(m => m.role === 'system');
      const conversationMessages = messages.filter(m => m.role !== 'system');

      const response = await anthropic.messages.create({
        model: model,
        max_tokens: 4000,
        temperature: temperature,
        system: systemMessage?.content || undefined,
        messages: conversationMessages.map(m => ({
          role: m.role === 'assistant' ? 'assistant' : 'user',
          content: m.content
        }))
      });

      return response.content[0].text;
    } catch (error) {
      console.error('Anthropic API error:', error);
      throw new Error(`Anthropic API error: ${error.message}`);
    }
  }
}
