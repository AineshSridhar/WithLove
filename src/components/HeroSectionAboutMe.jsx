import React from 'react';
import myImage from "../../public/Ainesh Sridhar.jpg"; // Replace with your actual image path

const HeroSection = () => {
  return (
    <section className="relative h-110 flex items-center justify-center">
      {/* Use an image from the public directory */}
      <img
        src="/herosectionaboutme.jpg"
        alt="Mother_with_child"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: '50% 40%' }}
      />

      {/* Overlay for darkening or lightening the image */}
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div> {/* Darken the image */}

      {/* Centralized Card with Image and Name */}
      <div className="absolute inset-0 flex flex-col items-center z-10 top-70">
        <div className="bg-white py-8 px-8 max-w-xl w-full flex flex-col items-center justify-center rounded-lg shadow-lg">
          {/* Image */}
          <img
            src={myImage}
            alt="Ainesh Sridhar"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
          {/* Name */}
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Ainesh Sridhar</h2>
          {/* Optional Short Bio or Description */}
          <p className="text-sm text-gray-600 text-center">
            Traveler, Blogger, and Storyteller. Passionate about exploring the world and sharing my experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
