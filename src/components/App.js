import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      {/* Other components go here */}
    </div>
  );
}

export default App;
