import { motion } from 'framer-motion'
import { Bot, Sparkles } from 'lucide-react'
import './Header.css'

function Header({ onModelClick, selectedModel }) {
  return (
    <motion.header 
      className="header glass"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header-content">
        <div className="logo-section">
          <motion.div 
            className="logo-icon"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Bot size={32} />
          </motion.div>
          <div className="logo-text">
            <h1>UNIFAI</h1>
            <p className="tagline">Advanced AI Assistant</p>
          </div>
        </div>

        <motion.button 
          className="model-button glass-hover"
          onClick={onModelClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Sparkles size={18} />
          <span>{selectedModel?.name || 'Select Model'}</span>
        </motion.button>
      </div>
    </motion.header>
  )
}

export default Header
