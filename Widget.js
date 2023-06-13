import React, { useState, useEffect } from 'react';

const DraggableWidget = () => {
  const [screenTime, setScreenTime] = useState(0);
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const isUserIdle = /* implement user idleness detection logic */;

      if (isUserIdle) {
        setIsIdle(true);
        return;
      }

      setIsIdle(false);

      setScreenTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = time => {
    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 20,
        left: 20,
        padding: 10,
        borderRadius: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        zIndex: 9999,
        userSelect: 'none',
        cursor: 'move',
        fontFamily: 'Arial, sans-serif',
        fontSize: 16,
      }}
    >
      <div style={{ opacity: isIdle ? 0.5 : 1 }}>
        {isIdle ? 'Idle' : formatTime(screenTime)}
      </div>
    </div>
  );
};

export default DraggableWidget;
