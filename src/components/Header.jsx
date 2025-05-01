import React, { useState } from 'react';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      {/* Main Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-6 py-4 bg-transparent text-white">
        <button onClick={toggleNav} className="text-xl focus:outline-none cursor-pointer">
          {isNavOpen ? <XMarkIcon className="h-6 w-6" /> : "☰"}
        </button>
        <h1 className="text-lg font-semibold">With Love</h1>
        <button className="text-xl focus:outline-none">
          <MagnifyingGlassIcon className="h-6 w-6" />
        </button>
      </header>

      {/* Mobile Navigation */}
      {isNavOpen && (
        <div className="fixed top-0 left-0 h-full w-screen bg-black text-white z-50 transform transition-transform duration-300 ease-in-out">
          <div className="flex justify-start p-6">
            <button onClick={toggleNav} className="text-xl focus:outline-none">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <nav className="pl-10 mt-20">
            <ul className="space-y-10">
              {["Home", "About me", "Categories", "Contact"].map((label, index) => (
                <li key={index}>
                  <a
                    href={`/${label.toLowerCase().replace(" ", "-")}`}
                    className="text-3xl transition-colors duration-300 hover:text-red-500"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter Popup */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white p-8 rounded-md shadow-lg max-w-md w-full bg-black">
            <h2 className="text-2xl font-semibold mb-4">Newsletter</h2>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe to receive exclusive content updates, travel & photo tips!
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-b border-white text-white w-full px-2 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-white text-black px-4 py-2 font-medium rounded hover:bg-red-500 hover:text-white transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
