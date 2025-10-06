import { motion } from 'framer-motion';
import './FloatingBalloons.css';

const FloatingBalloons = () => {
  const balloons = [
    { color: '#F8B4B4', size: 80, left: '10%', delay: 0 },
    { color: '#FAD5C5', size: 100, left: '25%', delay: 2 },
    { color: '#A8C5DA', size: 120, left: '50%', delay: 4 },
    { color: '#C5B9E5', size: 90, left: '70%', delay: 6 },
    { color: '#F5E6B8', size: 110, left: '85%', delay: 8 },
    { color: '#F8B4B4', size: 70, left: '15%', delay: 10 },
    { color: '#A8C5DA', size: 95, left: '60%', delay: 12 },
  ];

  return (
    <div className="floating-balloons">
      {balloons.map((balloon, index) => (
        <motion.div
          key={index}
          className="balloon"
          style={{
            left: balloon.left,
            width: `${balloon.size}px`,
            height: `${balloon.size * 1.2}px`,
          }}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: ['-20vh', '-120vh'],
            x: [0, 30, -30, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0, 0.4, 0.4, 0],
          }}
          transition={{
            duration: 20,
            delay: balloon.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id={`grad-${index}`} cx="30%" cy="30%">
                <stop offset="0%" stopColor="white" stopOpacity="0.6" />
                <stop offset="50%" stopColor={balloon.color} stopOpacity="0.8" />
                <stop offset="100%" stopColor={balloon.color} stopOpacity="0.9" />
              </radialGradient>
            </defs>
            <ellipse cx="50" cy="50" rx="35" ry="45" fill={`url(#grad-${index})`} />
            <path d="M50 95 L48 115 L52 115 Z" fill={balloon.color} opacity="0.7" />
            <ellipse cx="35" cy="35" rx="12" ry="18" fill="white" opacity="0.3" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBalloons;
