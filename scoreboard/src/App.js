import React, { useState } from 'react';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {

  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const reset = () => {
    setStrikes(0);
    setBalls(0);
  }

  return (
    <div className="App">
      <h1>Scoreboard Dashboard</h1>
      <Dashboard reset={reset} strikes={strikes} balls={balls} setStrikes={setStrikes} setBalls={setBalls} />
      <Display strikes={strikes} balls={balls} />
    </div>
  );
}

export default App;
