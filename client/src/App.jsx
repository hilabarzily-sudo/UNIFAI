import { useState, useEffect } from 'react'
import ChatInterface from './components/ChatInterface'
import Header from './components/Header'
import ModelSelector from './components/ModelSelector'
import { fetchAvailableModels } from './services/api'
import './App.css'

function App() {
  const [selectedModel, setSelectedModel] = useState('gpt-4-turbo-preview')
  const [availableModels, setAvailableModels] = useState([])
  const [showModelSelector, setShowModelSelector] = useState(false)

  useEffect(() => {
    loadModels()
  }, [])

  const loadModels = async () => {
    try {
      const models = await fetchAvailableModels()
      setAvailableModels(models)
      if (models.length > 0 && !models.find(m => m.id === selectedModel)) {
        setSelectedModel(models[0].id)
      }
    } catch (error) {
      console.error('Failed to load models:', error)
    }
  }

  return (
    <div className="app">
      <Header 
        onModelClick={() => setShowModelSelector(!showModelSelector)}
        selectedModel={availableModels.find(m => m.id === selectedModel)}
      />
      
      {showModelSelector && (
        <ModelSelector
          models={availableModels}
          selectedModel={selectedModel}
          onSelectModel={(modelId) => {
            setSelectedModel(modelId)
            setShowModelSelector(false)
          }}
          onClose={() => setShowModelSelector(false)}
        />
      )}

      <ChatInterface selectedModel={selectedModel} />
    </div>
  )
}

export default App
