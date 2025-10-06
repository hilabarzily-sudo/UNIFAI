import React, { useState, useEffect } from 'react';
import './App.css';
import ChatInterface from './components/ChatInterface';
import Header from './components/Header';
import ProviderSelector from './components/ProviderSelector';
import BackgroundDecoration from './components/BackgroundDecoration';
import { fetchProviders } from './services/api';

function App() {
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProviders();
  }, []);

  const loadProviders = async () => {
    try {
      const data = await fetchProviders();
      setProviders(data);
      
      // Set default provider to first available one
      const availableProvider = data.find(p => p.available);
      if (availableProvider) {
        setSelectedProvider(availableProvider.id);
      }
    } catch (error) {
      console.error('Failed to load providers:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <BackgroundDecoration />
      
      <div className="app-container">
        <Header />
        
        <div className="main-content">
          {!loading && (
            <ProviderSelector
              providers={providers}
              selected={selectedProvider}
              onSelect={setSelectedProvider}
            />
          )}
          
          <ChatInterface 
            provider={selectedProvider}
            providers={providers}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
