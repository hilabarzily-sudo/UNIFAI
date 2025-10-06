import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './ChatInterface.css';
import MessageBubble from './MessageBubble';
import { sendMessage } from '../services/api';

const ChatInterface = ({ provider, providers }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading || !provider) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await sendMessage({
        message: userMessage.content,
        conversationId,
        provider
      });

      if (!conversationId) {
        setConversationId(response.conversationId);
      }

      const aiMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: response.message,
        timestamp: response.timestamp,
        metadata: {
          provider: response.provider,
          model: response.model
        }
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: 'מצטער, אירעה שגיאה. אנא נסה שוב.',
        timestamp: new Date().toISOString(),
        isError: true
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const currentProvider = providers.find(p => p.id === provider);
  const placeholderText = currentProvider 
    ? `כתוב את הנקסימה שלך... (${currentProvider.name})`
    : 'כתוב את הנקסימה שלך...';

  return (
    <div className="chat-interface glass">
      <div className="messages-container">
        <AnimatePresence>
          {messages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="welcome-message"
            >
              <div className="welcome-icon">✨</div>
              <h2>ברוכים הבאים ל-UNIFAI</h2>
              <p>שאל אותי כל שאלה, ואני אעזור לך עם הבינה המלאכותית המתקדמת ביותר</p>
            </motion.div>
          )}
        </AnimatePresence>

        {messages.map((message, index) => (
          <MessageBubble
            key={message.id || index}
            message={message}
            index={index}
          />
        ))}

        {isLoading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="typing-indicator glass"
          >
            <div className="typing-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="typing-text">חושב...</span>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="input-container glass-strong">
        <button 
          className="voice-button"
          aria-label="Voice input"
          title="הקלט קולי (בקרוב)"
        >
          <Mic size={20} />
        </button>

        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholderText}
          disabled={isLoading || !provider}
          className="message-input"
        />

        <button
          onClick={handleSend}
          disabled={!inputValue.trim() || isLoading || !provider}
          className="send-button"
          aria-label="Send message"
        >
          {isLoading ? (
            <Loader size={20} className="spin" />
          ) : (
            <Send size={20} />
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
