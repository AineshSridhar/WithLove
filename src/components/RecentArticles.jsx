// RecentArticles.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import blogData from "../data/blogData.json";

const RecentArticles = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-8">
      <h3 className="text-xl font-semibold mb-4">Recent articles</h3>
      {blogData.slice(0, 3).map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          category={article.categories[0]}
          time="5"
          excerpt={article.content.replace(/<[^>]+>/g, '').slice(0, 100) + "..."}
          imageUrl={article.imageUrl}
          onClick={() => navigate(`/blog/${article.id}`)}
        />
      ))}
    </section>
  );
};

export default RecentArticles;
