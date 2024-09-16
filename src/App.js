import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(null);
  const [animate, setAnimate] = useState(false);

  const handleSnap = () => {
    setAnimate(false);  // Reset animation state
    const fate = Math.random() > 0.5 ? 'spared' : 'snapped';
    
    // Set animation and result with a short delay
    setTimeout(() => {
      setResult(fate);
      setAnimate(true);
    }, 100);
  };

  return (
    <div className="App">
      <h1>Did Thanos Spare You?</h1>
      <button onClick={handleSnap}>Snap Your Fate</button>
      
      {result && (
        <div className={`result ${result} ${animate ? 'animate' : ''}`}>
          {result === 'spared' ? (
            <h2>You were spared! 🌟</h2>
          ) : (
            <h2>You were snapped! 💀</h2>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
