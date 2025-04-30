import React from 'react';
import Header from "../components/Header"

const HeroSection = () => {
  return (
    <section className="relative h-130 flex items-center justify-center">
      {/* Use an image from the public directory */}
      <img
        src="/hero1.webp"
        alt="Mother_with_child"
        className="absolute inset-0 w-full h-full object-cover"
        style = {{objectPosition: '90% 40%'}}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-start"> {/* Changed justify-content to justify-start */}
        <Header /> {/* Include Header here */}
        <div className="absolute bg-white py-8 px-8 h-60 max-w-xl left-40 bottom-0 z-10"> {/* Added z-index */}
        <small className="text-sm text-gray-500">Travels</small>
        <h2 className="text-2xl font-bold my-2">When Is The Best Time of Year To Visit Japan?</h2>
        <p className="text-gray-600 mb-4">
          The good news for travelers is that there is no single best time of year to travel to Japan...
        </p>
        <button className="bg-black text-white px-4 py-2">Read more</button>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
