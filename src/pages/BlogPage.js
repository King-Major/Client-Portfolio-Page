import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/shared/AnimatedSection';

const BlogPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    
    const blogPosts = [
      {
        title: "Modern Web Development Practices",
        category: "development",
        date: "2025-01-01",
        excerpt: "Exploring the latest trends in web development...",
        image: "/api/placeholder/400/250"
      },
      // Add more blog posts
    ];
  
    return (
      <div className="min-h-screen py-20">
        <AnimatedSection>
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-12">Blog</h1>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {['all', 'development', 'design', 'career'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <AnimatedSection key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
                  <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <div className="text-sm text-gray-600 mb-2">{post.date}</div>
                      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <Link 
                        to={`/blog/${index}`}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    );
  };
  

 export default BlogPage;