# 🔌 UNIFAI API Documentation

Complete API documentation for the UNIFAI Chatbot backend.

## Base URL

```
http://localhost:5000/api
```

## Authentication

Currently, no authentication is required. API keys are configured server-side through environment variables.

---

## Endpoints

### 1. Health Check

**GET** `/api/health`

Check if the server is running and healthy.

#### Request

```bash
curl http://localhost:5000/api/health
```

#### Response

```json
{
  "status": "ok",
  "message": "UNIFAI Chatbot Server is running"
}
```

#### Status Codes
- `200` - Server is healthy

---

### 2. Get Available Models

**GET** `/api/models`

Retrieve a list of available AI models based on configured API keys.

#### Request

```bash
curl http://localhost:5000/api/models
```

#### Response

```json
{
  "success": true,
  "models": [
    {
      "id": "gpt-4-turbo-preview",
      "name": "GPT-4 Turbo",
      "provider": "OpenAI",
      "description": "Most capable GPT-4 model with 128K context",
      "enabled": true
    },
    {
      "id": "gpt-4",
      "name": "GPT-4",
      "provider": "OpenAI",
      "description": "Advanced reasoning and complex tasks",
      "enabled": true
    },
    {
      "id": "claude-3-opus-20240229",
      "name": "Claude 3 Opus",
      "provider": "Anthropic",
      "description": "Most capable Claude model",
      "enabled": true
    }
  ]
}
```

#### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `success` | boolean | Whether the request was successful |
| `models` | array | Array of available model objects |
| `models[].id` | string | Unique model identifier |
| `models[].name` | string | Human-readable model name |
| `models[].provider` | string | AI provider (OpenAI, Anthropic) |
| `models[].description` | string | Model description |
| `models[].enabled` | boolean | Whether the model is available |

#### Status Codes
- `200` - Success

---

### 3. Send Chat Message

**POST** `/api/chat`

Send a message to the AI and receive a response.

#### Request Headers

```
Content-Type: application/json
```

#### Request Body

```json
{
  "messages": [
    {
      "role": "system",
      "content": "You are a helpful assistant."
    },
    {
      "role": "user",
      "content": "Hello, how are you?"
    }
  ],
  "model": "gpt-4-turbo-preview",
  "temperature": 0.7
}
```

#### Request Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `messages` | array | Yes | - | Array of message objects |
| `messages[].role` | string | Yes | - | `system`, `user`, or `assistant` |
| `messages[].content` | string | Yes | - | Message content |
| `model` | string | No | `gpt-4-turbo-preview` | Model ID to use |
| `temperature` | number | No | `0.7` | Creativity (0.0-1.0) |

#### Example Request (curl)

```bash
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {"role": "user", "content": "What is artificial intelligence?"}
    ],
    "model": "gpt-4-turbo-preview",
    "temperature": 0.7
  }'
```

#### Example Request (JavaScript)

```javascript
const response = await fetch('http://localhost:5000/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    messages: [
      { role: 'user', content: 'What is artificial intelligence?' }
    ],
    model: 'gpt-4-turbo-preview',
    temperature: 0.7
  })
});

const data = await response.json();
console.log(data.message);
```

#### Response

```json
{
  "success": true,
  "message": "Artificial intelligence (AI) is a branch of computer science...",
  "model": "gpt-4-turbo-preview",
  "timestamp": "2024-10-06T12:34:56.789Z"
}
```

#### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `success` | boolean | Whether the request was successful |
| `message` | string | AI's response message |
| `model` | string | Model that generated the response |
| `timestamp` | string | ISO timestamp of the response |

#### Status Codes
- `200` - Success
- `400` - Invalid request (missing/invalid parameters)
- `500` - Server error (API error, configuration issue)

#### Error Response

```json
{
  "error": "Invalid request: messages array is required"
}
```

---

## Supported Models

### OpenAI Models

| Model ID | Name | Context | Best For |
|----------|------|---------|----------|
| `gpt-4-turbo-preview` | GPT-4 Turbo | 128K | Complex reasoning, long documents |
| `gpt-4` | GPT-4 | 8K | High-quality responses |
| `gpt-3.5-turbo` | GPT-3.5 Turbo | 16K | Fast, everyday tasks |

### Anthropic Models

| Model ID | Name | Context | Best For |
|----------|------|---------|----------|
| `claude-3-opus-20240229` | Claude 3 Opus | 200K | Complex analysis, creative writing |
| `claude-3-sonnet-20240229` | Claude 3 Sonnet | 200K | Balanced performance |
| `claude-3-haiku-20240307` | Claude 3 Haiku | 200K | Fast responses |

---

## Message Format

### Roles

- **system**: Sets the behavior and context for the AI
- **user**: Messages from the user
- **assistant**: Previous responses from the AI

### Example Conversation

```json
{
  "messages": [
    {
      "role": "system",
      "content": "You are a helpful coding assistant."
    },
    {
      "role": "user",
      "content": "How do I use async/await in JavaScript?"
    },
    {
      "role": "assistant",
      "content": "Async/await is a way to handle asynchronous operations..."
    },
    {
      "role": "user",
      "content": "Can you show me an example?"
    }
  ]
}
```

---

## Temperature Parameter

Controls the randomness of the AI's responses:

| Value | Behavior |
|-------|----------|
| `0.0` | Deterministic, focused, consistent |
| `0.3` | Slightly varied, mostly predictable |
| `0.7` | Balanced (default) |
| `1.0` | Creative, diverse, unpredictable |
| `1.5+` | Very creative, may be inconsistent |

**Recommendations:**
- **Code generation**: 0.0 - 0.3
- **General chat**: 0.7
- **Creative writing**: 1.0 - 1.5

---

## Rate Limits

Rate limits depend on your API provider:

### OpenAI
- Varies by tier and model
- Check: https://platform.openai.com/account/limits

### Anthropic
- Varies by plan
- Check: https://console.anthropic.com/settings/limits

---

## Error Handling

### Common Errors

#### 400 - Bad Request

```json
{
  "error": "Invalid request: messages array is required"
}
```

**Cause**: Missing or invalid parameters  
**Solution**: Check request format

#### 500 - Server Error

```json
{
  "error": "OpenAI API error: Incorrect API key provided"
}
```

**Cause**: API configuration issue  
**Solution**: Check `.env` file and API keys

```json
{
  "error": "OpenAI API key is not configured"
}
```

**Cause**: Missing API key  
**Solution**: Add API key to `.env` file

---

## Best Practices

### 1. Message Management

```javascript
// Keep track of conversation history
const conversationHistory = [];

// Add user message
conversationHistory.push({
  role: 'user',
  content: userInput
});

// Send to API
const response = await sendMessage(conversationHistory);

// Add assistant response
conversationHistory.push({
  role: 'assistant',
  content: response.message
});
```

### 2. Error Handling

```javascript
try {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages })
  });
  
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  
  const data = await response.json();
  return data.message;
} catch (error) {
  console.error('Chat error:', error);
  return 'Sorry, an error occurred.';
}
```

### 3. Context Management

```javascript
// Keep last 10 messages to stay within token limits
const recentMessages = conversationHistory.slice(-10);
```

---

## Integration Examples

### React

```jsx
import { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]);
  
  const sendMessage = async (content) => {
    const newMessage = { role: 'user', content };
    const updatedMessages = [...messages, newMessage];
    
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: updatedMessages,
        model: 'gpt-4-turbo-preview'
      })
    });
    
    const data = await response.json();
    setMessages([
      ...updatedMessages,
      { role: 'assistant', content: data.message }
    ]);
  };
  
  return (/* UI components */);
}
```

### Python

```python
import requests

def send_message(messages, model='gpt-4-turbo-preview'):
    response = requests.post(
        'http://localhost:5000/api/chat',
        json={
            'messages': messages,
            'model': model,
            'temperature': 0.7
        }
    )
    return response.json()

# Usage
messages = [
    {'role': 'user', 'content': 'Hello!'}
]
result = send_message(messages)
print(result['message'])
```

---

## Security Considerations

1. **Never expose API keys** in client-side code
2. **Use environment variables** for sensitive data
3. **Implement rate limiting** in production
4. **Validate all inputs** server-side
5. **Use HTTPS** in production
6. **Implement authentication** for production use

---

## Support

For issues or questions:
- Check this documentation
- Review error messages
- Check API provider status pages
- Open an issue on GitHub

---

**Last Updated**: October 2024  
**Version**: 1.0.0
