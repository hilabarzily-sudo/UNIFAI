import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatContainer from './components/ChatContainer';
import FloatingBalloons from './components/FloatingBalloons';
import Header from './components/Header';
import ModelSelector from './components/ModelSelector';
import './App.css';

function App() {
  const [selectedModel, setSelectedModel] = useState('gpt-4');
  const [availableModels, setAvailableModels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch available models
    fetch('http://localhost:3001/api/models')
      .then(res => res.json())
      .then(data => {
        setAvailableModels(data.models.filter(m => m.enabled));
        // Set first enabled model as default
        const firstEnabled = data.models.find(m => m.enabled);
        if (firstEnabled) {
          setSelectedModel(firstEnabled.id);
        }
      })
      .catch(err => {
        console.error('Failed to fetch models:', err);
        // Set default models if API fails
        setAvailableModels([
          { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', provider: 'OpenAI' }
        ]);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="app">
      <FloatingBalloons />
      
      <motion.div 
        className="app-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Header />
        
        <div className="main-content">
          <ModelSelector
            models={availableModels}
            selectedModel={selectedModel}
            onSelectModel={setSelectedModel}
            isLoading={isLoading}
          />
          
          <ChatContainer selectedModel={selectedModel} />
        </div>
      </motion.div>
    </div>
  );
}

export default App;
