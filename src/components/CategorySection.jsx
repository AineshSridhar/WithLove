import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CategorySection = () => {
  const categories = ['Travels', 'Foods', 'Guides', 'Stories', 'Countries', 'Vlogs'];
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const visibleCards = 5;

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Move to next position, but don't exceed total categories - visible cards
    setCurrentPosition(prev => 
      Math.min(prev + 1, categories.length - visibleCards)
    );
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Move to previous position, but don't go below zero
    setCurrentPosition(prev => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    // Reset transition state after animation completes
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [currentPosition]);

  return (
    <section className="py-12 px-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Explore by category</h3>
        
        <div className="flex gap-2">
          <button 
            onClick={handlePrev}
            disabled={currentPosition === 0}
            className={`p-2 rounded-full ${currentPosition === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-black hover:bg-gray-800'} text-white flex items-center justify-center`}
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={handleNext}
            disabled={currentPosition >= categories.length - visibleCards}
            className={`p-2 rounded-full ${currentPosition >= categories.length - visibleCards ? 'bg-gray-300 cursor-not-allowed' : 'bg-black hover:bg-gray-800'} text-white flex items-center justify-center`}
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
            >
              <div className="bg-black text-white w-full aspect-square flex flex-col justify-center items-center text-center">
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