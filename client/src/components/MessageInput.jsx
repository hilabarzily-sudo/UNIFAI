import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaMicrophone } from 'react-icons/fa';
import './MessageInput.css';

const MessageInput = ({ onSend, disabled }) => {
  const [input, setInput] = useState('');
  const textareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input);
      setInput('');
      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    
    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 150) + 'px';
    }
  };

  return (
    <div className="message-input-container">
      <form onSubmit={handleSubmit} className="message-input-form glass-card">
        <div className="input-wrapper">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder="כתבו את ההודעה שלכם..."
            disabled={disabled}
            className="message-textarea"
            rows="1"
          />
          
          <div className="input-actions">
            <motion.button
              type="button"
              className="voice-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              disabled={disabled}
            >
              <FaMicrophone />
            </motion.button>

            <motion.button
              type="submit"
              className="send-button"
              disabled={!input.trim() || disabled}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPaperPlane />
            </motion.button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
