import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../data/blogData.json";

const BlogPage = () => {
  const { id } = useParams();
  const article = blogData.find((a) => a.id === id);

  if (!article) return <p className="p-6 text-center text-gray-500">Article not found.</p>;

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto bg-white text-black font-serif">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-3 tracking-tight">{article.title}</h1>

      {/* Meta Information */}
      <p className="text-sm text-gray-500 italic mb-6">
        By {article.author} • {article.date} • <span className="uppercase">#{article.categories[0]}</span>
      </p>

      {/* Image */}
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full max-h-[500px] object-cover rounded-md mb-8 shadow-md"
      />

      {/* Content */}
      <div
        className="prose prose-lg max-w-none text-gray-800"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Footer Line */}
      <hr className="my-10 border-black" />
      <p className="text-center text-xs text-gray-400">Thanks for reading ♥</p>
    </div>
  );
};

export default BlogPage;
