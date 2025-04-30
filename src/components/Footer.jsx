import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="py-6 px-8 bg-white text-gray-500 text-sm border-t border-gray-200 flex justify-between items-center">
        <p>© 2025 All Rights Reserved</p>
        <div className="hidden lg:flex items-center space-x-4">
          <a href="/" className="hover:text-gray-700">
            Home
          </a>
          <a href="/about-me" className="hover:text-gray-700">
            About me
          </a>
          <a href="/categories" className="hover:text-gray-700">
            Categories
          </a>
          <a href="/contact" className="font-semibold">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
