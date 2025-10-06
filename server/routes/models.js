import express from 'express';

export const modelsRouter = express.Router();

// Get available AI models
modelsRouter.get('/', (req, res) => {
  const models = [
    {
      id: 'gpt-4',
      name: 'GPT-4',
      provider: 'OpenAI',
      description: 'Most capable model, best for complex tasks',
      enabled: !!process.env.OPENAI_API_KEY
    },
    {
      id: 'gpt-3.5-turbo',
      name: 'GPT-3.5 Turbo',
      provider: 'OpenAI',
      description: 'Fast and efficient, great for most tasks',
      enabled: !!process.env.OPENAI_API_KEY
    },
    {
      id: 'claude-3-opus',
      name: 'Claude 3 Opus',
      provider: 'Anthropic',
      description: 'Excellent reasoning and analysis',
      enabled: !!process.env.ANTHROPIC_API_KEY
    },
    {
      id: 'claude-3-sonnet',
      name: 'Claude 3 Sonnet',
      provider: 'Anthropic',
      description: 'Balanced performance and speed',
      enabled: !!process.env.ANTHROPIC_API_KEY
    },
    {
      id: 'gemini-pro',
      name: 'Gemini Pro',
      provider: 'Google',
      description: 'Multimodal AI with strong capabilities',
      enabled: !!process.env.GOOGLE_API_KEY
    }
  ];

  res.json({ models });
});
