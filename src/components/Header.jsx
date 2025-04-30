import React, { useState } from 'react';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center px-6 py-4 bg-transparent"> {/* Changed to absolute and transparent background */}
        <button onClick={toggleNav} className="text-xl focus:outline-none">
          {isNavOpen ? <XMarkIcon className="h-6 w-6" /> : "☰"}
        </button>
        <h1 className="text-lg font-semibold">Personal Travel Blog</h1>
        <button className="text-xl focus:outline-none">
          <MagnifyingGlassIcon className="h-6 w-6" />
        </button>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 h-full w-screen bg-black text-white z-20 transform transition-transform duration-300 ease-in-out ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-start p-6">
          <button onClick={toggleNav} className="text-xl focus:outline-none">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="pl-70 my-30">
          <ul className="space-y-10">
            <li>
              <a href="/" className="text-3xl hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about-me" className="text-3xl hover:text-gray-300">
                About me
              </a>
            </li>
            <li>
              <a href="/categories" className="text-3xl hover:text-gray-300">
                Categories
              </a>
            </li>
            <li>
              <a href="/contact" className="text-3xl hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Newsletter Popup (Initially hidden) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/8 -translate-y-1/2 border-white p-8 rounded-md shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Newsletter</h2>
          <p className="text-gray-300 mb-4 text-sm">
            Subscribe to receive exclusive content updates, travel & photo tips!
          </p>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Email address"
              className="text-white border-b-3 border-white pl-2 py-2 focus:outline-none focus:ring-2 focus:ring-black-500"
            />
            <button className="bg-white text-black px-8 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;