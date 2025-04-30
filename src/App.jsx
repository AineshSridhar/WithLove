import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage'; // Import the ContactPage component
import BlogPage from './pages/BlogPage';
import AboutMePage from './pages/AboutMePage';
import CategoriesPage from './pages/CategoriesPage';
import './index.css';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<ContactPage />} /> {/* Route for the ContactPage */}
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/about-me" element={<AboutMePage/>} />
        <Route path="/categories" element={<CategoriesPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;