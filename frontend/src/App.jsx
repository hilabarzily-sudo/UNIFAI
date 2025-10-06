import { useState, useEffect } from 'react'
import ChatContainer from './components/ChatContainer'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import WelcomeScreen from './components/WelcomeScreen'
import './App.css'

function App() {
  const [conversations, setConversations] = useState([])
  const [currentConversationId, setCurrentConversationId] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Load conversations from API
  useEffect(() => {
    fetchConversations()
  }, [])

  const fetchConversations = async () => {
    try {
      const response = await fetch('/api/conversations')
      const data = await response.json()
      if (data.success) {
        setConversations(data.conversations)
      }
    } catch (error) {
      console.error('Failed to fetch conversations:', error)
    }
  }

  const handleNewChat = () => {
    setCurrentConversationId(null)
  }

  const handleSelectConversation = (id) => {
    setCurrentConversationId(id)
  }

  const handleDeleteConversation = async (id) => {
    try {
      const response = await fetch(`/api/conversations/${id}`, {
        method: 'DELETE'
      })
      const data = await response.json()
      if (data.success) {
        fetchConversations()
        if (currentConversationId === id) {
          setCurrentConversationId(null)
        }
      }
    } catch (error) {
      console.error('Failed to delete conversation:', error)
    }
  }

  const handleMessageSent = () => {
    // Refresh conversations list after sending a message
    fetchConversations()
  }

  const currentConversation = conversations.find(c => c.id === currentConversationId)

  return (
    <div className="app">
      <Sidebar 
        conversations={conversations}
        currentConversationId={currentConversationId}
        onNewChat={handleNewChat}
        onSelectConversation={handleSelectConversation}
        onDeleteConversation={handleDeleteConversation}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      
      <div className={`main-content ${sidebarOpen ? '' : 'sidebar-closed'}`}>
        <Header 
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          sidebarOpen={sidebarOpen}
        />
        
        {currentConversation ? (
          <ChatContainer 
            conversation={currentConversation}
            conversationId={currentConversationId}
            onMessageSent={handleMessageSent}
          />
        ) : (
          <WelcomeScreen onStartChat={handleNewChat} />
        )}
      </div>
    </div>
  )
}

export default App
