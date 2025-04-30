import React from 'react';
import { CalendarIcon, UserIcon, TagIcon, ShareIcon } from '@heroicons/react/24/outline';
import { InstagramLogoIcon, FacebookLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

const BlogPage = ({ blog }) => {
    // Basic HTML sanitization (for demonstration purposes).  In a real app, use a library like DOMPurify
    const createMarkup = (html) => {
        return { __html: html.replace(/<[^>]*>?/gm, (match) => {
            if (match.startsWith('<img')) {
              return match; // keep img tags
            }
            if (match.startsWith('<h')) {
              return match;
            }
            if (match.startsWith('<p')) {
                return match;
            }
            if (match.startsWith('<ul')) {
              return match;
            }
            if (match.startsWith('<li')) {
                return match;
            }
            return ''; // Remove other tags
        }) };
    };

    return (
        <div className="bg-white text-gray-800">
            {/* Image Banner */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] bg-gray-200 flex items-center justify-center">
                {/* Use a dynamic image, or a default */}
                <img
                    src={blog.imageUrl || "/default-blog-image.jpg"} // Use a property from blog, or a default
                    alt={blog.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
                        {blog.title}
                    </h1>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="container mx-auto px-4 py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Sidebar (Author, Date, Categories) */}
                <div className="lg:col-span-1">
                    <div className="bg-gray-100 rounded-md p-4 sm:p-6">
                        <div className="flex items-center mb-4">
                            <UserIcon className="h-5 w-5 mr-2 text-gray-500" />
                            <p className="text-sm font-medium">{blog.author}</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <CalendarIcon className="h-5 w-5 mr-2 text-gray-500" />
                            <p className="text-sm">{blog.date}</p>
                        </div>
                        <div className="flex items-start mb-4">
                            <TagIcon className="h-5 w-5 mt-1 mr-2 text-gray-500" />
                            <div className="flex flex-wrap gap-2">
                                {blog.categories.map((category) => (
                                    <span key={category} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                                        {category}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {/* Share buttons */}
                        <div className="flex items-center mt-6">
                            <ShareIcon className="h-5 w-5 mr-2 text-gray-500" />
                            <span className="text-sm font-medium">Share:</span>
                            <a href="#" className="ml-2 text-blue-500 hover:text-blue-700">
                                <FacebookLogoIcon className="h-6 w-6" />
                            </a>
                            <a href="#" className="ml-2 text-blue-400 hover:text-blue-600">
                                <TwitterLogoIcon className="h-6 w-6" />
                            </a>
                             <a href="#" className="ml-2 text-pink-500 hover:text-pink-600">
                                <InstagramLogoIcon className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Article Content */}
                <div className="lg:col-span-2">
                    <div className="prose prose-slate prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none">
                        {/* eslint-disable-next-line react/no-danger */}
                        <div dangerouslySetInnerHTML={createMarkup(blog.content)} />
                    </div>
                    {/* Tags Section (at the end of the article) */}
                    <div className="mt-8 flex flex-wrap gap-2">
                        <span className="text-sm font-medium">Tags:</span>
                        {blog.tags.map((tag) => (
                            <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
             <section className="py-8 bg-gray-100">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4 text-center">You May Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Map through a few other blogs (excluding the current one) */}
                    {blogData.filter(b => b.id !== blog.id).slice(0, 3).map(relatedBlog => (
                         <div key={relatedBlog.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-200 hover:shadow-lg">
                            <img
                              src={relatedBlog.imageUrl || "/default-blog-image.jpg"}
                              alt={relatedBlog.title}
                              className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                              <h3 className="text-lg font-semibold text-gray-800 mb-2">{relatedBlog.title}</h3>
                              <p className="text-gray-600 text-sm">{relatedBlog.date}</p>
                              {/* link to the full blog page. */}
                              <a href={`/blog/${relatedBlog.id}`} className="mt-2 inline-block text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                Read More
                              </a>
                            </div>
                          </div>
                    ))}
                </div>
               </div>
            </section>
        </div>
    );
};


export default BlogPage;