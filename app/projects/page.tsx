"use client"
import React from 'react';
import Navbar from '../(home)/components/Navbar';
import Projects from '../(home)/components/Projects';
import Footer from '../(home)/components/Footer';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-full flex-1">
        <Navbar />
        <div className="pt-32 px-10 flex-1">
          <div className="max-w-7xl mx-auto p-5">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-6">Projects</h1>
              <p className="text-gray-700 mb-8">
                coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
