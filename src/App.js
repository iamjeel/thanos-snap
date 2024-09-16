import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(null);

  const handleSnap = () => {
    const fate = Math.random() > 0.5 ? 'spared' : 'snapped';
    setResult(fate);
  };

  return (
    <div className="App">
      <h1>Did Thanos Spare You?</h1>
      <button onClick={handleSnap}>Snap Your Fate</button>
      
      {result && (
        <div className={`result ${result}`}>
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
