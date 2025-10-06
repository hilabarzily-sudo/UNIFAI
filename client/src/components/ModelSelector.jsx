import { motion, AnimatePresence } from 'framer-motion'
import { X, Check } from 'lucide-react'
import './ModelSelector.css'

function ModelSelector({ models, selectedModel, onSelectModel, onClose }) {
  return (
    <AnimatePresence>
      <motion.div 
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="model-selector glass"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="selector-header">
            <h2>Select AI Model</h2>
            <motion.button 
              className="close-button"
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={20} />
            </motion.button>
          </div>

          <div className="models-grid">
            {models.map((model) => (
              <motion.div
                key={model.id}
                className={`model-card glass-hover ${selectedModel === model.id ? 'selected' : ''}`}
                onClick={() => onSelectModel(model.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                layout
              >
                <div className="model-card-header">
                  <h3>{model.name}</h3>
                  {selectedModel === model.id && (
                    <motion.div 
                      className="check-icon"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <Check size={16} />
                    </motion.div>
                  )}
                </div>
                <p className="model-provider">{model.provider}</p>
                <p className="model-description">{model.description}</p>
              </motion.div>
            ))}
          </div>

          {models.length === 0 && (
            <div className="no-models">
              <p>No models available. Please configure your API keys.</p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ModelSelector
