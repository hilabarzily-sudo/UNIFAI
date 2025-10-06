import { FaRocket, FaLightbulb, FaCode, FaComments } from 'react-icons/fa'
import './WelcomeScreen.css'

function WelcomeScreen({ onStartChat }) {
  const features = [
    {
      icon: <FaRocket />,
      title: 'Advanced AI',
      description: 'Powered by state-of-the-art language models'
    },
    {
      icon: <FaLightbulb />,
      title: 'Smart Responses',
      description: 'Context-aware and intelligent conversations'
    },
    {
      icon: <FaCode />,
      title: 'Code Assistance',
      description: 'Help with programming and technical questions'
    },
    {
      icon: <FaComments />,
      title: 'Natural Dialogue',
      description: 'Engaging and human-like interactions'
    }
  ]

  return (
    <div className="welcome-screen">
      <div className="welcome-content glass">
        <div className="welcome-header">
          <div className="logo-container">
            <div className="logo-circle glass-strong">
              <FaRocket className="logo-icon" />
            </div>
          </div>
          <h1 className="welcome-title">Welcome to AI Assistant</h1>
          <p className="welcome-subtitle">
            Your intelligent companion for conversations, coding, and creative thinking
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <button className="start-chat-button" onClick={onStartChat}>
          <span>Start Chatting</span>
          <FaComments />
        </button>

        <div className="quick-prompts">
          <p className="prompts-label">Try asking:</p>
          <div className="prompts-list">
            <button className="prompt-chip glass" onClick={onStartChat}>
              "Help me write better code"
            </button>
            <button className="prompt-chip glass" onClick={onStartChat}>
              "Explain a complex topic"
            </button>
            <button className="prompt-chip glass" onClick={onStartChat}>
              "Brainstorm creative ideas"
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeScreen
