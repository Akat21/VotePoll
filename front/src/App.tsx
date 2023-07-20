import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './navbar/Navbar';
import CreatePoolPage from './createPool/CreatePoolPage';
import Pool from './pool/Pool';
import './style.css'

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CreatePoolPage />} />
          <Route path="/:id" element={<Pool />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
