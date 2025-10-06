import axios from 'axios'

const API_BASE_URL = '/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const sendChatMessage = async (messages, model = 'gpt-4-turbo-preview', temperature = 0.7) => {
  try {
    const response = await api.post('/chat', {
      messages,
      model,
      temperature
    })
    return response.data
  } catch (error) {
    console.error('Chat API error:', error)
    throw error
  }
}

export const fetchAvailableModels = async () => {
  try {
    const response = await api.get('/models')
    return response.data.models || []
  } catch (error) {
    console.error('Models API error:', error)
    return []
  }
}

export default api
