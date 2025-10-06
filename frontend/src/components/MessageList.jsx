import { motion, AnimatePresence } from 'framer-motion';
import Message from './Message';
import TypingIndicator from './TypingIndicator';
import './MessageList.css';

function MessageList({ messages, isLoading }) {
  return (
    <div className="message-list">
      <AnimatePresence mode="popLayout">
        {messages.map((message, index) => (
          <Message 
            key={message.id} 
            message={message}
            index={index}
          />
        ))}
        {isLoading && <TypingIndicator key="typing" />}
      </AnimatePresence>
    </div>
  );
}

export default MessageList;
