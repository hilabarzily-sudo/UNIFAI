import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import './Header.css';

function Header() {
  return (
    <motion.header
      className="header glass"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="header-content">
        <div className="logo-section">
          <motion.div
            className="logo-icon"
            animate={{ 
              rotate: [0, 10, -10, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <Sparkles size={28} />
          </motion.div>
          <div className="logo-text">
            <h1>UNIFAI</h1>
            <span className="tagline">Advanced AI Assistant</span>
          </div>
        </div>
        
        <nav className="header-nav">
          <motion.button
            className="nav-button glass-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </motion.button>
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;
