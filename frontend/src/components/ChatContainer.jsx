import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import ProviderSelector from './ProviderSelector';
import { sendMessage, getProviders } from '../services/api';
import './ChatContainer.css';

function ChatContainer() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      content: 'שלום! אני UNIFAI, עוזר AI מתקדם. איך אני יכול לעזור לך היום? 🌟',
      timestamp: new Date(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState('auto');
  const [providers, setProviders] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    loadProviders();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const loadProviders = async () => {
    try {
      const data = await getProviders();
      setProviders(data.providers || []);
    } catch (error) {
      console.error('Failed to load providers:', error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (content) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Prepare conversation history
      const conversationHistory = messages.map(msg => ({
        role: msg.role,
        content: msg.content,
      }));

      // Send message to backend
      const response = await sendMessage(
        content,
        conversationHistory,
        selectedProvider
      );

      // Add AI response
      const aiMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: response.data.message,
        provider: response.data.provider,
        model: response.data.model,
        timestamp: new Date(response.data.timestamp),
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message
      const errorMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: 'מצטער, אירעה שגיאה. אנא נסה שוב. 🔄',
        isError: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="chat-container glass"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="chat-header">
        <div className="chat-header-content">
          <h2>Chat with UNIFAI</h2>
          <ProviderSelector
            providers={providers}
            selected={selectedProvider}
            onChange={setSelectedProvider}
          />
        </div>
      </div>

      <div className="chat-messages">
        <MessageList messages={messages} isLoading={isLoading} />
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-container">
        <MessageInput onSend={handleSendMessage} disabled={isLoading} />
      </div>
    </motion.div>
  );
}

export default ChatContainer;
