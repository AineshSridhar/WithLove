import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import blogData from "../data/blogData.json";

const FrequentlyRead = () => {
  const navigate = useNavigate();
  const scrollRef = useRef();
  const frequentlyRead = blogData.slice(1, 6); // Pick 5 articles

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="my-2 p-6 rounded-lg relative bg-gray-200">
      <h3 className="text-2xl font-bold mb-4 border-b border-white pb-2">
        Frequently Read
      </h3>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full z-10 shadow cursor-pointer"
      >
        &lt;
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full z-10 shadow cursor-pointer"
      >
        &gt;
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex gap-4 w-max">
          {frequentlyRead.map((article) => (
            <div
              key={article.id}
              onClick={() => {
                navigate(`/blog/${article.id}`);
                window.scrollTo(0, 0);
              }}
              
              className="min-w-[280px] max-w-xs p-4 flex-shrink-0 rounded-md hover:bg-white cursor-pointer transition-transform hover:scale-[1.02]"
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h4 className="text-lg font-semibold mb-2">{article.title}</h4>
              <p className="text-sm text-gray-700">
                {article.content.replace(/<[^>]+>/g, "").slice(0, 100)}...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyRead;
