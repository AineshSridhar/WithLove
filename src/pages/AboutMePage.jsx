import React from "react";
import myImage from "../../public/Ainesh Sridhar.jpg"; // Replace with your image path
import Header from "../components/Header"; // Assuming Header.js is in the same directory or adjust path
import HeroSectionAboutMe from "../components/HeroSectionAboutMe";

const AboutMePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSectionAboutMe />
      <section className="flex flex-col items-center justify-center px-6 py-8 mt-16 md:mt-20 lg:mt-24">
        <div className="flex flex-col items-center mb-6 p-4 bg-white w-full max-w-4xl">
          <p className="text-gray-700 mt-10 text-lg max-w-lg leading-relaxed">
            I’ve always been captivated by the art of writing and storytelling. Whether it’s about travel, life lessons, or the beauty of human connections, my goal is to share meaningful stories that resonate with readers. I enjoy exploring different perspectives and hope to inspire others with the experiences I share here on my blog.
          </p>
          <div className="mt-6 text-left w-full max-w-md">
            <h5 className="font-semibold text-gray-800 mt-7">Quick Facts</h5>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>Writer, Traveler, and Dreamer</li>
              <li>Passionate about exploring new cultures</li>
              <li>Always seeking ways to connect with people</li>
              <li>On a mission to inspire through words</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6">
          <button
            className="text-sm text-white bg-gray-800 hover:bg-gray-900 px-5 py-3 cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={() => window.scrollTo(0, 0)} // Simple action on click
          >
            Scroll back to top
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutMePage;
