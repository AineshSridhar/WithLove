import React from "react";
import blogData from "../data/blogData.json";
import { useNavigate } from "react-router-dom";

const CategoriesPage = () => {
  const navigate = useNavigate();

  // Group blogs by category
  const categoriesMap = blogData.reduce((acc, blog) => {
    blog.categories.forEach((category) => {
      if (!acc[category]) acc[category] = [];
      acc[category].push(blog);
    });
    return acc;
  }, {});

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto text-black font-serif bg-white">
      <h1 className="text-4xl font-bold mb-10 text-center">Explore by Categories</h1>

      {Object.entries(categoriesMap).map(([category, blogs]) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold border-b border-black inline-block mb-4">
            #{category}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-black text-white p-4 rounded shadow-md hover:scale-[1.02] transition-all cursor-pointer"
                onClick={() => navigate(`/blog/${blog.id}`)}
              >
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <h3 className="text-lg font-bold mb-1">{blog.title}</h3>
                <p className="text-sm text-gray-300 mb-2">{blog.author} • {blog.date}</p>
                <p className="text-sm text-gray-400">
                  {blog.content.replace(/<[^>]+>/g, '').slice(0, 100)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesPage;
