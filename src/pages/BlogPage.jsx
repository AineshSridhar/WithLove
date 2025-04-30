// BlogPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../data/blogData.json";

const BlogPage = () => {
  const { id } = useParams();
  const article = blogData.find((a) => a.id === id);

  if (!article) return <p className="p-6">Article not found.</p>;

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-2">
        {article.author} • {article.date} • #{article.categories[0]}
      </p>
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full max-h-[400px] object-cover rounded mb-6"
      />
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
};

export default BlogPage;
