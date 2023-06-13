import React, { useState, useEffect } from 'react';

const Widget = () => {
  const [screenTime, setScreenTime] = useState(0);
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isIdle) {
        setScreenTime(prevTime => prevTime + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isIdle]);

  const formatTime = time => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleMouseMove = () => {
    setIsIdle(false);
  };

  const handleKeyPress = () => {
    setIsIdle(false);
  };

  const handleIdle = () => {
    setIsIdle(true);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keypress', handleKeyPress);
    window.addEventListener('blur', handleIdle);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keypress', handleKeyPress);
      window.removeEventListener('blur', handleIdle);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'transparent',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: 'rgba(0, 0, 0, 0.7)',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
          pointerEvents: 'auto',
        }}
      >
        {isIdle ? 'Idle' : formatTime(screenTime)}
      </div>
    </div>
  );
};

export default Widget;
