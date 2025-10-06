import { motion } from 'framer-motion';
import { FaRobot } from 'react-icons/fa';
import './TypingIndicator.css';

const TypingIndicator = () => {
  return (
    <motion.div
      className="message ai-message"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="message-avatar">
        <div className="avatar ai-avatar">
          <FaRobot />
        </div>
      </div>

      <div className="message-content-wrapper">
        <div className="message-bubble glass-card ai-bubble typing-bubble">
          <div className="typing-indicator">
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.4, repeat: Infinity, delay: 0 }}
            />
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.4, repeat: Infinity, delay: 0.2 }}
            />
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.4, repeat: Infinity, delay: 0.4 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TypingIndicator;
