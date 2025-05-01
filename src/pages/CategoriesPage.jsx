import React, { useEffect, useRef } from "react";
import blogData from "../data/blogData.json";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";

const CategoriesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the category from URL query
  const queryParams = new URLSearchParams(location.search);
  const targetCategory = queryParams.get("cat");

  const categoryRefs = useRef({});

  useEffect(() => {
    if (targetCategory && categoryRefs.current[targetCategory]) {
      categoryRefs.current[targetCategory].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [targetCategory]);

  // Group blogs by category
  const categoriesMap = blogData.reduce((acc, blog) => {
    blog.categories.forEach((category) => {
      if (!acc[category]) acc[category] = [];
      acc[category].push(blog);
    });
    return acc;
  }, {});

  return (
    <>
      <Header />
      <div className="px-6 py-16 max-w-7xl mx-auto text-black font-serif bg-white">
        <h1 className="text-4xl font-bold mb-12 text-center">Explore by Categories</h1>

        {/* Category Navigation (Sticky on top) */}
        <nav className="mb-10 flex gap-6 justify-center sticky top-14 z-10 bg-white p-4 shadow-lg rounded-md">
          {Object.keys(categoriesMap).map((category) => (
            <button
              key={category}
              onClick={() => {
                window.scrollTo(0, categoryRefs.current[category]?.offsetTop);
              }}
              className="text-lg text-gray-700 hover:text-black font-semibold transition-colors"
            >
              #{category}
            </button>
          ))}
        </nav>

        {/* Category Sections */}
        {Object.entries(categoriesMap).map(([category, blogs]) => (
          <div
            key={category}
            ref={(el) => (categoryRefs.current[category] = el)}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-4 mb-6">
              #{category}
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => {
                    navigate(`/blog/${blog.id}`);
                    window.scrollTo(0, 0);
                  }}
                >
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{blog.author} • {blog.date}</p>
                  <p className="text-sm text-gray-600">{blog.content.replace(/<[^>]+>/g, "").slice(0, 120)}...</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoriesPage;
