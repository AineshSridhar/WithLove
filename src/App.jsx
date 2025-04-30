import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage'; // Import the ContactPage component
import './index.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<ContactPage />} /> {/* Route for the ContactPage */}
      </Routes>
    </div>
  );
};

export default App;