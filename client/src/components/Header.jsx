import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  return (
    <motion.header 
      className="header glass-card"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="header-content">
        <motion.div 
          className="logo-container"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="logo-icon">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="balloonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F8B4B4" />
                  <stop offset="50%" stopColor="#FAD5C5" />
                  <stop offset="100%" stopColor="#A8C5DA" />
                </linearGradient>
              </defs>
              <ellipse cx="50" cy="45" rx="30" ry="35" fill="url(#balloonGradient)" opacity="0.8" />
              <path d="M50 80 L48 95 L52 95 Z" fill="#A8C5DA" opacity="0.6" />
              <circle cx="35" cy="35" r="8" fill="white" opacity="0.4" />
            </svg>
          </div>
          <div className="logo-text">
            <h1 className="text-gradient">UNIFAI</h1>
            <p className="tagline">עוף אל השמיים עם אלפי AI's</p>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
