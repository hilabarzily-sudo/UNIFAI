import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ChatContainer from './components/ChatContainer';
import Header from './components/Header';
import BackgroundEffects from './components/BackgroundEffects';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          className="loading-content"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loading-logo">
            <div className="loading-spinner"></div>
            <h1>UNIFAI</h1>
          </div>
          <p>Initializing AI Assistant...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="app">
      <BackgroundEffects />
      <Header />
      <main className="main-content">
        <ChatContainer />
      </main>
    </div>
  );
}

export default App;
