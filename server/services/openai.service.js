import OpenAI from 'openai';

const openai = process.env.OPENAI_API_KEY 
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

export class OpenAIService {
  static async chat(messages, model = 'gpt-4-turbo-preview', temperature = 0.7) {
    if (!openai) {
      throw new Error('OpenAI API key is not configured');
    }

    try {
      const completion = await openai.chat.completions.create({
        model: model,
        messages: messages,
        temperature: temperature,
        max_tokens: 4000
      });

      return completion.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI API error:', error);
      throw new Error(`OpenAI API error: ${error.message}`);
    }
  }
}
