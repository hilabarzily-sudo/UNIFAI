import React from 'react';
import './BackgroundDecoration.css';

const BackgroundDecoration = () => {
  return (
    <div className="background-decoration">
      {/* Floating balloons */}
      <div className="floating-balloon balloon-lg balloon-1"></div>
      <div className="floating-balloon balloon-md balloon-2"></div>
      <div className="floating-balloon balloon-sm balloon-3"></div>
      <div className="floating-balloon balloon-lg balloon-4"></div>
      <div className="floating-balloon balloon-md balloon-5"></div>

      {/* Cloud shapes */}
      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="cloud cloud-3"></div>

      {/* Gradient orbs */}
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
    </div>
  );
};

export default BackgroundDecoration;
