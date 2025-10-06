import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Loader } from 'lucide-react'
import MessageBubble from './MessageBubble'
import { sendChatMessage } from '../services/api'
import './ChatInterface.css'

function ChatInterface({ selectedModel }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m UNIFAI, your advanced AI assistant. How can I help you today?'
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const textareaRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    adjustTextareaHeight()
  }, [inputValue])

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px'
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!inputValue.trim() || isLoading) return

    const userMessage = {
      role: 'user',
      content: inputValue.trim()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const response = await sendChatMessage([...messages, userMessage], selectedModel)
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: response.message
      }])
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please make sure your API keys are configured correctly.'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div className="chat-interface">
      <motion.div 
        className="chat-container glass"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="messages-area">
          <AnimatePresence mode="popLayout">
            {messages.map((message, index) => (
              <MessageBubble
                key={index}
                message={message}
                index={index}
              />
            ))}
          </AnimatePresence>

          {isLoading && (
            <motion.div 
              className="loading-indicator"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="loading-bubble glass">
                <Loader className="loading-spinner" size={20} />
                <span>Thinking...</span>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <motion.form 
          className="input-area glass"
          onSubmit={handleSubmit}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message here... (Shift+Enter for new line)"
            className="message-input"
            rows="1"
            disabled={isLoading}
          />
          <motion.button
            type="submit"
            className="send-button"
            disabled={!inputValue.trim() || isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send size={20} />
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  )
}

export default ChatInterface
