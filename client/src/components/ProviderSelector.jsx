import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './ProviderSelector.css';

const ProviderSelector = ({ providers, selected, onSelect }) => {
  return (
    <div className="provider-selector glass">
      <h3 className="selector-title">בחר ספק AI</h3>
      
      <div className="providers-grid">
        {providers.map((provider, index) => (
          <motion.button
            key={provider.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => provider.available && onSelect(provider.id)}
            disabled={!provider.available}
            className={`provider-card ${selected === provider.id ? 'selected' : ''} ${!provider.available ? 'disabled' : ''}`}
          >
            <div className="provider-header">
              <span className="provider-name">{provider.name}</span>
              {selected === provider.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="check-icon"
                >
                  <Check size={16} />
                </motion.div>
              )}
            </div>
            
            <p className="provider-description">{provider.description}</p>
            
            <div className="provider-models">
              {provider.models.slice(0, 2).map(model => (
                <span key={model} className="model-badge">
                  {model.split('-')[0]}
                </span>
              ))}
              {provider.models.length > 2 && (
                <span className="model-badge">+{provider.models.length - 2}</span>
              )}
            </div>

            {!provider.available && (
              <div className="unavailable-overlay">
                <span>לא זמין</span>
              </div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ProviderSelector;
