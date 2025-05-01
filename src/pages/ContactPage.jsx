import React from "react";
import {
  HeartIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

const imagePaths = [
  "/pic1.jpg",
  "/pic2.jpeg",
  "/pic3.jpg",
  "/pic4.jpg",
  "/pic5.avif",
  "/pic6.jpeg",
];

const ContactPage = () => {
  return (
    <div className="bg-white text-gray-800 mt-10">
      {/* Contact Section */}
      <section className="py-12 px-8 lg:px-24">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative aspect-w-16 aspect-h-9 bg-gray-100 rounded-md overflow-hidden">
            <img
              src="/contact-us-image.jpg"
              alt="Contact visual"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 p-3 border rounded-md shadow-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 p-3 border rounded-md shadow-sm"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="p-3 border rounded-md shadow-sm w-full"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-3 border rounded-md shadow-sm w-full"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
            >
              Send
            </button>
          </form>
        </div>

        {/* Follow Section */}
        <div className="mt-10 bg-gray-900 text-white rounded-md py-4 px-6 flex items-center justify-between">
          <p className="text-sm font-semibold">Follow me on LinkedIn</p>
          <button
  className="bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 cursor-pointer"
  onClick={() =>
    window.open("https://www.linkedin.com/in/ainesh-sridhar-17bb39251/", "_blank")
  }
>
            <LinkedInLogoIcon className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* Instagram Feed */}
      <div className="py-8 grid grid-cols-3 md:grid-cols-6 gap-2 bg-gray-100">
        {imagePaths.map((src, index) => (
          <div
            key={index}
            className="relative group overflow-hidden aspect-square rounded-md"
          >
            <img
              src={src}
              alt={`Post ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center text-white opacity-0 group-hover:opacity-60">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <HeartIcon className="h-5 w-5" />
                  <span>120</span>
                </div>
                <div className="flex items-center space-x-1">
                  <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  <span>35</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
