import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 60000, // 60 seconds for AI responses
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
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.error?.message || error.message || 'An error occurred';
    return Promise.reject(new Error(message));
  }
);

// API Functions
export const sendMessage = async (data) => {
  return await api.post('/chat/message', data);
};

export const fetchProviders = async () => {
  return await api.get('/providers');
};

export const getConversations = async () => {
  return await api.get('/conversations');
};

export const getConversation = async (id) => {
  return await api.get(`/conversations/${id}`);
};

export const clearConversation = async (id) => {
  return await api.delete(`/chat/conversation/${id}`);
};

export const checkHealth = async () => {
  return await api.get('/health');
};

export default api;
