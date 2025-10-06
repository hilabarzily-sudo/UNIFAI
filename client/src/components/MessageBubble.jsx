import { motion } from 'framer-motion'
import { User, Bot } from 'lucide-react'
import './MessageBubble.css'

function MessageBubble({ message, index }) {
  const isUser = message.role === 'user'

  return (
    <motion.div
      className={`message-wrapper ${isUser ? 'user' : 'assistant'}`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.3,
        delay: index * 0.05,
        ease: "easeOut"
      }}
      layout
    >
      <div className="message-avatar glass">
        {isUser ? <User size={18} /> : <Bot size={18} />}
      </div>
      <div className={`message-bubble glass ${isUser ? 'user' : 'assistant'}`}>
        <div className="message-content">
          {message.content}
        </div>
      </div>
    </motion.div>
  )
}

export default MessageBubble
