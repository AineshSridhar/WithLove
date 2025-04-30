import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage'; // Import the ContactPage component
import BlogPage from './pages/BlogPage';
import AboutMePage from './pages/AboutMePage';
import './index.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<ContactPage />} /> {/* Route for the ContactPage */}
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/about-me" element={<AboutMePage/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;