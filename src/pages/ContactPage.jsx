import React from 'react';
import { CameraIcon, HeartIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { InstagramLogoIcon } from '@radix-ui/react-icons';

const ContactPage = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* Contact Section */}
      <section className="py-12 px-8 lg:px-24">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Placeholder */}
          <div className="relative aspect-w-16 aspect-h-9 bg-gray-100 rounded-md overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <CameraIcon className="h-16 w-16" />
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div className="flex flex-row">
              <div>
                <input type="text" id="name" placeholder="Your Name" className="mt-1 p-3 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              </div>
              <div>
                <input type="email" id="email" placeholder="Your Email" className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              </div>
            </div>
            <div>
              <input type="text" id="subject" placeholder="Subject" className="mt-1 block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
            <div>
              <textarea id="message" rows="4" placeholder="Your Message" className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
            </div>
            <div>
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Send
              </button>
            </div>
          </form>
        </div>


        {/* Follow on Instagram */}
        <div className="mt-10 bg-gray-900 text-white rounded-md py-4 px-6 flex items-center justify-between">
          <p className="text-sm font-semibold">Follow me on Instagram</p>
          <button className="bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-white">
            <InstagramLogoIcon className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* Instagram Feed Preview */}
      <div className="py-8 grid grid-cols-3 md:grid-cols-6 gap-2 bg-gray-100">
        {/* Placeholder Instagram Posts */}
        {[...Array(6)].map((_, index) => (
          <div key={index} className="relative aspect-w-1 aspect-h-1 bg-gray-200 rounded-md overflow-hidden flex items-center justify-center text-gray-400">
            {index === 1 ? (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-sm">
                <div className="flex items-center space-x-2 mb-1">
                  <HeartIcon className="h-4 w-4" />
                  <span>123</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChatBubbleLeftRightIcon className="h-4 w-4" />
                  <span>543</span>
                </div>
              </div>
            ) : (
              <CameraIcon className="h-8 w-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;