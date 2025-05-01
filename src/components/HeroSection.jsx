import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from "../components/Header";
import blogData from '../data/blogData.json';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); 

  const nextBlog = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
  };

  useEffect(() => {
    const interval = setInterval(nextBlog, 5000);
    return () => clearInterval(interval);
  }, []);

  const { id, title, imageUrl, categories,  content } = blogData[currentIndex];

  const handleReadMore = () => {
    navigate(`/blog/${id}`); // Navigate to the dynamic route using id
  };

  return (
    <section className="relative h-130 flex items-center justify-center">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: '90% 40%' }}
      />
      
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-start">
        <Header />
        
        <div className="absolute bg-white py-8 px-8 h-60 max-w-xl left-40 bottom-0 z-10">
          <small className="text-sm text-gray-500">{categories.join(', ')}</small>
          <h2 className="text-2xl font-bold my-2">{title}</h2>
          <p className="text-gray-600 mb-4 line-clamp-3">{ content}</p>
          <button
            onClick={handleReadMore}
            className="bg-black text-white px-4 py-2 cursor-pointer"
          >
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
