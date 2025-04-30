import React from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

const ArticleCard = ({ title, category, time, excerpt, imageUrl, id }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleReadMore = () => {
    // Navigate to the dynamic page (could be a detailed article page)
    navigate(`/article/${id}`);
  };

  return (
    <div
      className="flex gap-6 mb-6 w-[700px] p-4 hover:bg-gray-200 transition-colors" // Add hover background highlight
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-64 h-64 object-cover flex-shrink-0 rounded"
      />
      <div className="pt-7">
        <small className="text-sm font-semibold">
          #{category}
          <span className="text-sm text-gray-500"> • {time} min read</span>
        </small>
        <h4 className="text-3xl font-semibold mt-1">{title}</h4>
        <p className="text-gray-600 mt-1 text-sm">{excerpt}</p>
        <button
          onClick={handleReadMore}
          className="mt-2 text-sm text-white bg-black px-5 py-3 cursor-pointer"
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
