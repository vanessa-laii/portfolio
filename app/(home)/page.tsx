"use client"
import React from 'react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const Page = () => {
  return (
    <div>

          <div className="min-h-screen overflow-hidden flex flex-col"> 
              <div className="dark:bg-white relative flex-grow">
                <div className="max-w-7xl mx-auto p-5 h-full"> 
                  <Navbar />
                  <Hero />
                  <div className=" max-w-7xl mx-auto p-5 mt-20">
                    <Projects />
                    <Skills />
                    <Footer />
                  </div>
                </div>
              </div>
          </div>
    </div>


  );
}

export default Page;
