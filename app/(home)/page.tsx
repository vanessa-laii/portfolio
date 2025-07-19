"use client"
import React from 'react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Skills from './components/Projects';
import Projects from './components/Temp'
import Footer from './components/Footer';
import Experience from './components/Experience';

const Page = () => {
  return (
    <div>
          <div className="max-w-full px-10"> 
            <Navbar />
            <div className=" max-w-7xl mx-auto p-5 mt-20">
              <Hero />
              <Experience />
              <Projects />
              <Footer />
            </div>
          </div>
    </div>

  );
}

export default Page;
