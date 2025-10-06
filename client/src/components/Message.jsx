import { motion } from 'framer-motion';
import { FaUser, FaRobot } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import './Message.css';

const Message = ({ message, index }) => {
  const isUser = message.role === 'user';
  const isError = message.error;

  return (
    <motion.div
      className={`message ${isUser ? 'user-message' : 'ai-message'} ${isError ? 'error-message' : ''}`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.4,
        delay: index * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
    >
      <div className="message-avatar">
        {isUser ? (
          <div className="avatar user-avatar">
            <FaUser />
          </div>
        ) : (
          <div className="avatar ai-avatar">
            <FaRobot />
          </div>
        )}
      </div>

      <div className="message-content-wrapper">
        <motion.div 
          className={`message-bubble glass-card ${isUser ? 'user-bubble' : 'ai-bubble'}`}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="message-content">
            {isUser ? (
              <p>{message.content}</p>
            ) : (
              <ReactMarkdown>{message.content}</ReactMarkdown>
            )}
          </div>
          
          {!isUser && message.provider && (
            <div className="message-meta">
              <span className="model-badge">{message.provider}</span>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Message;
