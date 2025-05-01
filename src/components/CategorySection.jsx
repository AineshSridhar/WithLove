import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import blogData from '../data/blogData.json';

const CategorySection = () => {
  const navigate = useNavigate();
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const visibleCards = 5;

  // Extract unique categories from blog data
  const categories = Array.from(new Set(blogData.flatMap(blog => blog.categories)));

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPosition(prev => Math.min(prev + 1, categories.length - visibleCards));
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPosition(prev => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [currentPosition]);

  const handleCategoryClick = (category) => {
    navigate(`/categories?cat=${encodeURIComponent(category)}`);
  };

  return (
    <section className="py-12 px-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Explore by category</h3>
        <div className="flex gap-2">
          <button 
            onClick={handlePrev}
            disabled={currentPosition === 0}
            className={`p-2 rounded-full ${currentPosition === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-black hover:bg-gray-800'} text-white`}
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={handleNext}
            disabled={currentPosition >= categories.length - visibleCards}
            className={`p-2 rounded-full ${currentPosition >= categories.length - visibleCards ? 'bg-gray-300 cursor-not-allowed' : 'bg-black hover:bg-gray-800'} text-white`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentPosition * (100 / visibleCards)}%)` }}
        >
          {categories.map((cat) => (
            <div 
              key={cat} 
              className="w-1/5 flex-shrink-0 pr-4 transform hover:scale-110 transition duration-300 ease-in-out"
              onClick={() => handleCategoryClick(cat)}
            >
              <div className="bg-black text-white w-full aspect-square flex flex-col justify-center items-center text-center cursor-pointer">
                <div className="bg-gray-400 w-12 h-12 mb-2 rounded-md" />
                <span className="text-sm">{cat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
