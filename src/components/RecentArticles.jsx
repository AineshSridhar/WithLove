import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import blogData from "../data/blogData.json";

const ARTICLES_PER_PAGE = 3;

const RecentArticles = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(blogData.length / ARTICLES_PER_PAGE);
  const startIndex = (page - 1) * ARTICLES_PER_PAGE;
  const currentArticles = blogData.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  return (
    <section className="px-6 py-4">
      <h3 className="text-xl font-semibold mb-4">Recent Articles</h3>

      {currentArticles.map((article) => (
        <ArticleCard
          key={article.id}
          id={article.id}
          title={article.title}
          category={article.categories[0]}
          time="5"
          excerpt={article.content.replace(/<[^>]+>/g, "").slice(0, 100) + "..."}
          imageUrl={article.imageUrl}
          onClick={() => navigate(`/blog/${article.id}`)}
        />
      ))}

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 border rounded-md text-sm ${
              page === i + 1
                ? "bg-black text-white"
                : "bg-white text-black border-gray-300 hover:bg-gray-100 cursor-pointer"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default RecentArticles;
