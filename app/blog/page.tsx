"use client"
import React from 'react';
import Navbar from '../(home)/components/Navbar';
import Footer from '../(home)/components/Footer';

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-full flex-1">
        <Navbar />
        <div className="pt-32 px-10 flex-1">
          <div className="max-w-7xl mx-auto p-5">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-6">Blog</h1>
              <p className="text-gray-700 mb-8">
                Welcome to my blog! Here I share my experiences at McMaster University, my journey in software engineering, and recommendations for exploring Hamilton!
              </p>
            </div>
            
            {/* Blog content placeholder */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h2 className="text-2xl font-semibold mb-3">Coming Soon</h2>
                <p className="text-gray-600 mb-4">
                  I&apos;m currently working on adding some blog posts!
                </p>
                <div className="text-sm text-gray-500">
                  Stay tuned for more content...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
