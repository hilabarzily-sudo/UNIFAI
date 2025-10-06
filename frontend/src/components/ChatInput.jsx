import { useState, useRef, useEffect } from 'react'
import { FaPaperPlane, FaMicrophone } from 'react-icons/fa'
import './ChatInput.css'

function ChatInput({ onSendMessage, disabled }) {
  const [message, setMessage] = useState('')
  const textareaRef = useRef(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
    }
  }, [message])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim() && !disabled) {
      onSendMessage(message)
      setMessage('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div className="chat-input-container glass">
      <form onSubmit={handleSubmit} className="chat-input-form">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          disabled={disabled}
          className="chat-input glass"
          rows="1"
        />
        <div className="input-actions">
          <button
            type="button"
            className="voice-button glass-button"
            disabled={disabled}
            title="Voice input (coming soon)"
          >
            <FaMicrophone />
          </button>
          <button
            type="submit"
            className="send-button"
            disabled={disabled || !message.trim()}
          >
            <FaPaperPlane />
          </button>
        </div>
      </form>
      <p className="input-hint">
        Press <kbd>Enter</kbd> to send, <kbd>Shift + Enter</kbd> for new line
      </p>
    </div>
  )
}

export default ChatInput
