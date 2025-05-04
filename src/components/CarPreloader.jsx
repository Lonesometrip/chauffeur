import React, { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';
import logo from '../assets/premium_chauffeur_logo.svg';

const CarPreloader = () => {
  const { progress, active } = useProgress();
  const [isVisible, setIsVisible] = useState(true);
  const [internalProgress, setInternalProgress] = useState(0);

  // Smooth out the progress updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (internalProgress < progress) {
        setInternalProgress(prev => Math.min(prev + 1, 100));
      }
    }, 20);

    return () => clearInterval(interval);
  }, [progress, internalProgress]);

  // Handle hiding the preloader when loading is complete
  useEffect(() => {
    if (progress === 100 && !active) {
      // Add a small delay before hiding to ensure everything is ready
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [progress, active]);

  if (!isVisible) return null;

  return (
    <div className={`car-preloader ${progress === 100 ? 'loaded' : ''}`}>
      <img src={logo} alt="Premium Chauffeur Logo" className="car-preloader-logo" />
      <div className="car-preloader-text">
        Premium Chauffeur Experience
      </div>
      <div className="car-preloader-progress-container">
        <div 
          className="car-preloader-progress-bar" 
          style={{ width: `${internalProgress}%` }}
        />
      </div>
      <p style={{ color: '#aaa', marginTop: '15px', fontSize: '14px' }}>
        {internalProgress < 100 ? 'Loading luxury vehicle...' : 'Ready to explore'}
      </p>
    </div>
  );
};

export default CarPreloader;
