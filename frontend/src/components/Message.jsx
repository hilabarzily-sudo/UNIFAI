import { motion } from 'framer-motion';
import { User, Bot } from 'lucide-react';
import './Message.css';

function Message({ message, index }) {
  const isUser = message.role === 'user';
  const isError = message.isError;

  return (
    <motion.div
      className={`message ${isUser ? 'message-user' : 'message-assistant'} ${isError ? 'message-error' : ''}`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ 
        duration: 0.3,
        delay: index * 0.05,
        ease: 'easeOut'
      }}
    >
      <div className="message-avatar glass">
        {isUser ? <User size={20} /> : <Bot size={20} />}
      </div>
      
      <div className="message-content">
        <div className="message-bubble glass">
          <p className="message-text">{message.content}</p>
          
          {message.provider && (
            <div className="message-meta">
              <span className="provider-badge">
                {message.provider} • {message.model}
              </span>
            </div>
          )}
        </div>
        
        <div className="message-timestamp">
          {message.timestamp.toLocaleTimeString('he-IL', {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Message;
