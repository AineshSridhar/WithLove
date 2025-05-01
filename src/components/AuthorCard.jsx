import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaSpotify, FaLinkedin } from "react-icons/fa"; // Import specific icons

const AuthorCard = () => {
  return (
    <div className="max-w-sm mx-auto px-4 py-8">
      <div className="relative border-2 border-black p-6 pb-8 text-center">
        {/* Profile Image */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <img
              src="/Ainesh Sridhar.jpg"
              alt="Author"
              className="absolute inset-0 w-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Author Content - with extra top margin for image */}
        <div className="mt-12">
          <h2 className="text-xl font-serif font-bold mt-2">Ainesh Sridhar</h2>
          <p className="text-sm text-gray-600 mt-3 mb-4 max-w-xs mx-auto">
            For as long as I can remember, I've been captivated by the quiet
            strength and unwavering presence of mothers. Through my words, I
            hope to explore the depth of their love, the complexity of their
            roles, and the profound impact they have on shaping not just
            families, but entire generations.
          </p>

          <div className="mt-4">
            <p className="font-medium mb-3">Follow me</p>
            <div className="flex justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/ainesh-sridhar-17bb39251/"
                className="bg-white w-8 h-8 flex items-center justify-center rounded-full"
              >
                <FaLinkedin className="text-black" size={30} />
              </a>
              <a
                href="#"
                className="bg-white w-8 h-8 flex items-center justify-center rounded-full"
              >
                <FaYoutube className="text-black" size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
