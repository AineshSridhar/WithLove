import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Import specific icons

const AuthorCard = () => {
  return (
    <div className="max-w-sm mx-auto px-4 py-8">
      <div className="relative border-2 border-black p-6 pb-8 text-center">
        {/* Profile Image */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <img
              src="/Ainesh Sridhar.jpg"
              alt="Mother_with_child"
              className="absolute inset-0 w-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Author Content - with extra top margin for image */}
        <div className="mt-12">
          <h2 className="text-xl font-serif font-bold mt-2">Ainesh Sridhar</h2>
          <p className="text-sm text-gray-600 mt-3 mb-4 max-w-xs mx-auto">
            For as long as I can remember I've been obsessed with the idea of
            travel. I was always that person who was forever daydreaming of
            foreign lands and unfamiliar cultures; coming up with travel
            itineraries that would challenge my perceptions and help me gain a
            deeper understanding of the world.
          </p>

          <div className="mt-4">
            <p className="font-medium mb-3">Follow me</p>
            <div className="flex justify-center gap-3">
              <a
                href="#"
                className="bg-black w-8 h-8 flex items-center justify-center"
              >
                <span className="text-white text-sm">
                  <FaFacebook size={30} />
                </span>
              </a>
              <a
                href="#"
                className="bg-black w-8 h-8 flex items-center justify-center"
              >
                <span className="text-white text-sm">📷</span>
              </a>
              <a
                href="#"
                className="bg-black w-8 h-8 flex items-center justify-center"
              >
                <span className="text-white text-sm">▶</span>
              </a>
              <a
                href="#"
                className="bg-black w-8 h-8 flex items-center justify-center"
              >
                <span className="text-white text-sm">S</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
