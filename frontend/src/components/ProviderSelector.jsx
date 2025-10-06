import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import './ProviderSelector.css';

function ProviderSelector({ providers, selected, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { name: 'auto', displayName: 'Auto Select' },
    ...providers
  ];

  const selectedOption = options.find(opt => opt.name === selected) || options[0];

  return (
    <div className="provider-selector">
      <motion.button
        className="provider-button glass-hover"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="provider-name">{selectedOption.displayName}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="provider-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="provider-dropdown glass"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {options.map((option) => (
                <motion.button
                  key={option.name}
                  className={`provider-option ${selected === option.name ? 'selected' : ''}`}
                  onClick={() => {
                    onChange(option.name);
                    setIsOpen(false);
                  }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="option-name">{option.displayName}</span>
                  {option.model && (
                    <span className="option-model">{option.model}</span>
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProviderSelector;
