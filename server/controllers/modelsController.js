export const getAvailableModels = (req, res) => {
  const models = [
    {
      id: 'gpt-4-turbo-preview',
      name: 'GPT-4 Turbo',
      provider: 'OpenAI',
      description: 'Most capable GPT-4 model with 128K context',
      enabled: !!process.env.OPENAI_API_KEY
    },
    {
      id: 'gpt-4',
      name: 'GPT-4',
      provider: 'OpenAI',
      description: 'Advanced reasoning and complex tasks',
      enabled: !!process.env.OPENAI_API_KEY
    },
    {
      id: 'gpt-3.5-turbo',
      name: 'GPT-3.5 Turbo',
      provider: 'OpenAI',
      description: 'Fast and efficient for most tasks',
      enabled: !!process.env.OPENAI_API_KEY
    },
    {
      id: 'claude-3-opus-20240229',
      name: 'Claude 3 Opus',
      provider: 'Anthropic',
      description: 'Most capable Claude model',
      enabled: !!process.env.ANTHROPIC_API_KEY
    },
    {
      id: 'claude-3-sonnet-20240229',
      name: 'Claude 3 Sonnet',
      provider: 'Anthropic',
      description: 'Balanced performance and speed',
      enabled: !!process.env.ANTHROPIC_API_KEY
    },
    {
      id: 'claude-3-haiku-20240307',
      name: 'Claude 3 Haiku',
      provider: 'Anthropic',
      description: 'Fastest Claude model',
      enabled: !!process.env.ANTHROPIC_API_KEY
    }
  ];

  res.json({
    success: true,
    models: models.filter(m => m.enabled)
  });
};
