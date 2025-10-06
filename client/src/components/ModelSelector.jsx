import { motion } from 'framer-motion';
import { FaRobot, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import './ModelSelector.css';

const ModelSelector = ({ models, selectedModel, onSelectModel, isLoading }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedModelData = models.find(m => m.id === selectedModel);

  if (isLoading) {
    return (
      <div className="model-selector glass-card">
        <div className="loading-skeleton"></div>
      </div>
    );
  }

  return (
    <div className="model-selector-container">
      <motion.div 
        className="model-selector glass-card"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <button 
          className="model-selector-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="selected-model">
            <FaRobot className="model-icon" />
            <div className="model-info">
              <span className="model-name">{selectedModelData?.name || 'בחר מודל'}</span>
              <span className="model-provider">{selectedModelData?.provider}</span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaChevronDown className="dropdown-icon" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="model-dropdown glass-card"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {models.map((model) => (
                <motion.button
                  key={model.id}
                  className={`model-option ${selectedModel === model.id ? 'selected' : ''}`}
                  onClick={() => {
                    onSelectModel(model.id);
                    setIsOpen(false);
                  }}
                  whileHover={{ scale: 1.02, x: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="model-option-content">
                    <span className="model-option-name">{model.name}</span>
                    <span className="model-option-provider">{model.provider}</span>
                    {model.description && (
                      <span className="model-option-description">{model.description}</span>
                    )}
                  </div>
                  {selectedModel === model.id && (
                    <motion.div 
                      className="selected-indicator"
                      layoutId="selected-indicator"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ModelSelector;
