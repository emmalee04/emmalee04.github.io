import React, { useState, useEffect } from 'react';
import logoInverted from '../images/logo_inverted.png';

const LoadingScreen = () => {
  // This state controls the stages of the animation: 1: start, 2: name-in, 3: swipe-out
  const [animationStage, setAnimationStage] = useState(1);

  useEffect(() => {
    // After 200ms, trigger the name entrance animation
    const nameTimer = setTimeout(() => {
      setAnimationStage(2);
    }, 200);

    // After 2200ms (2.2s), trigger the swipe-up exit animation
    const exitTimer = setTimeout(() => {
      setAnimationStage(3);
    }, 2200);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(exitTimer);
    };
  }, []); // The empty array ensures this effect runs only once

  return (
    // The main container that handles the final swipe-up animation
    <div
      className={`
        fixed inset-0 bg-white z-50 flex items-center justify-center
        transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]
        ${animationStage >= 3 ? '-translate-y-full' : 'translate-y-0'}
      `}
    >
      <div className="flex items-center text-3xl md:text-4xl font-medium text-gray-800 overflow-hidden">
        {/* Logo Span */}
        <span
          className={`
            transform transition-transform duration-1000 ease-in-out
            ${animationStage >= 2 ? 'translate-y-0' : 'translate-y-full'}
          `}
        >
          <img src={logoInverted} alt="logo" className="w-16 h-16" />
        </span>
        {/* First Name Span - with a slight delay */}
        <span
          className={`
            transform transition-transform duration-1000 ease-in-out ml-3
            ${animationStage >= 2 ? 'translate-y-0 delay-100' : 'translate-y-full'}
          `}
        >
          Emma
        </span>
        
        {/* Last Name Span - with a slight delay */}
        <span
          className={`
            transform transition-transform duration-1000 ease-in-out ml-3
            ${animationStage >= 2 ? 'translate-y-0 delay-200' : 'translate-y-full'}`}
        >
          Lee
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;

