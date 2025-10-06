const express = require('express');
const router = express.Router();

// Get available AI providers
router.get('/', (req, res) => {
  const providers = [
    {
      id: 'openai',
      name: 'OpenAI',
      models: ['gpt-4-turbo-preview', 'gpt-4', 'gpt-3.5-turbo'],
      available: !!process.env.OPENAI_API_KEY,
      description: 'Advanced language models by OpenAI'
    },
    {
      id: 'anthropic',
      name: 'Anthropic',
      models: ['claude-3-opus-20240229', 'claude-3-sonnet-20240229', 'claude-3-haiku-20240307'],
      available: !!process.env.ANTHROPIC_API_KEY,
      description: 'Claude models by Anthropic'
    },
    {
      id: 'google',
      name: 'Google',
      models: ['gemini-pro', 'gemini-pro-vision'],
      available: !!process.env.GOOGLE_API_KEY,
      description: 'Gemini models by Google'
    },
    {
      id: 'cohere',
      name: 'Cohere',
      models: ['command', 'command-light'],
      available: !!process.env.COHERE_API_KEY,
      description: 'Command models by Cohere'
    }
  ];

  res.json(providers);
});

module.exports = router;
