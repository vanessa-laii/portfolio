"use client"
import React from 'react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Footer from './components/Footer';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-full flex-1"> 
        <Navbar />
        <div className="pt-48 px-10 flex-1">
          <div className="max-w-7xl mx-auto p-5">
            <Hero />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
