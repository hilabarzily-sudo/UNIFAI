import { FaBars, FaRobot } from 'react-icons/fa'
import './Header.css'

function Header({ onToggleSidebar, sidebarOpen }) {
  return (
    <header className="header glass">
      <div className="header-left">
        <button 
          className="menu-button glass-button"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <FaBars />
        </button>
        <div className="header-title">
          <FaRobot className="robot-icon" />
          <h1>AI Assistant</h1>
        </div>
      </div>
      <div className="header-right">
        <div className="status-indicator">
          <span className="status-dot"></span>
          <span>Online</span>
        </div>
      </div>
    </header>
  )
}

export default Header
