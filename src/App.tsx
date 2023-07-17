import React from 'react';
import Navbar from './navbar/Navbar';
import CreatePoolPage from './createPool/CreatePoolPage';
import './style.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <CreatePoolPage />
      </div>
    </div>
  );
}

export default App;
