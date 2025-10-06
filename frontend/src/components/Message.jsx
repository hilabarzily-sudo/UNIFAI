import { FaUser, FaRobot } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import './Message.css'

function Message({ message }) {
  const isUser = message.role === 'user'
  const isError = message.isError

  return (
    <div className={`message ${isUser ? 'user-message' : 'assistant-message'} ${isError ? 'error-message' : ''}`}>
      <div className="message-avatar glass">
        {isUser ? <FaUser /> : <FaRobot />}
      </div>
      <div className="message-content glass">
        <div className="message-text">
          {isUser ? (
            <p>{message.content}</p>
          ) : (
            <ReactMarkdown>{message.content}</ReactMarkdown>
          )}
        </div>
        <span className="message-timestamp">
          {new Date(message.timestamp).toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </span>
      </div>
    </div>
  )
}

export default Message
