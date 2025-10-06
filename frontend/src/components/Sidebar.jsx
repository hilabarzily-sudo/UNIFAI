import { FaPlus, FaTrash, FaComments } from 'react-icons/fa'
import './Sidebar.css'

function Sidebar({ 
  conversations, 
  currentConversationId, 
  onNewChat, 
  onSelectConversation, 
  onDeleteConversation,
  isOpen 
}) {
  
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    if (diffInHours < 48) return 'Yesterday'
    return date.toLocaleDateString()
  }

  const getConversationTitle = (conversation) => {
    if (!conversation.messages || conversation.messages.length === 0) {
      return 'New Conversation'
    }
    const firstUserMessage = conversation.messages.find(m => m.role === 'user')
    return firstUserMessage ? firstUserMessage.content.slice(0, 30) + '...' : 'New Conversation'
  }

  return (
    <aside className={`sidebar glass ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <button className="new-chat-button glass-button" onClick={onNewChat}>
          <FaPlus />
          <span>New Chat</span>
        </button>
      </div>

      <div className="conversations-list">
        {conversations.length === 0 ? (
          <div className="empty-state">
            <FaComments className="empty-icon" />
            <p>No conversations yet</p>
            <p className="empty-subtitle">Start a new chat to begin</p>
          </div>
        ) : (
          conversations.map(conversation => (
            <div
              key={conversation.id}
              className={`conversation-item glass ${
                currentConversationId === conversation.id ? 'active' : ''
              }`}
              onClick={() => onSelectConversation(conversation.id)}
            >
              <div className="conversation-content">
                <FaComments className="conversation-icon" />
                <div className="conversation-text">
                  <h4>{getConversationTitle(conversation)}</h4>
                  <p className="conversation-date">{formatDate(conversation.updatedAt)}</p>
                </div>
              </div>
              <button
                className="delete-button"
                onClick={(e) => {
                  e.stopPropagation()
                  onDeleteConversation(conversation.id)
                }}
                aria-label="Delete conversation"
              >
                <FaTrash />
              </button>
            </div>
          ))
        )}
      </div>
    </aside>
  )
}

export default Sidebar
