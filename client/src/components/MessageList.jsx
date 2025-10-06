import { motion } from 'framer-motion';
import Message from './Message';
import TypingIndicator from './TypingIndicator';

const MessageList = ({ messages, isLoading }) => {
  return (
    <>
      {messages.map((message, index) => (
        <Message 
          key={message.id} 
          message={message}
          index={index}
        />
      ))}
      {isLoading && <TypingIndicator />}
    </>
  );
};

export default MessageList;
