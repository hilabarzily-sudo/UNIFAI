import React from 'react';
import { Sparkles } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header glass-strong floating">
      <div className="header-content">
        <div className="logo-section">
          <div className="logo-icon">
            <Sparkles size={32} strokeWidth={1.5} />
          </div>
          <div className="logo-text">
            <h1>unifai</h1>
            <p className="tagline">fly to the sky with thousand AI's</p>
          </div>
        </div>
        
        <div className="header-decorations">
          <div className="decoration-balloon balloon-1"></div>
          <div className="decoration-balloon balloon-2"></div>
          <div className="decoration-balloon balloon-3"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
