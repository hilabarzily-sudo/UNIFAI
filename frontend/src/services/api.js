import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error('API Error:', error);
    
    if (error.response) {
      // Server responded with error
      throw new Error(error.response.data.error || 'Server error');
    } else if (error.request) {
      // No response received
      throw new Error('No response from server. Please check your connection.');
    } else {
      // Request setup error
      throw new Error('Failed to send request');
    }
  }
);

/**
 * Send a message to the AI chatbot
 */
export const sendMessage = async (message, conversationHistory = [], provider = 'auto') => {
  return await api.post('/chat/message', {
    message,
    conversationHistory,
    provider,
  });
};

/**
 * Get available AI providers
 */
export const getProviders = async () => {
  return await api.get('/chat/providers');
};

/**
 * Health check
 */
export const checkHealth = async () => {
  return await api.get('/health');
};

export default api;
