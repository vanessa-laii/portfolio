import React from 'react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Skills from './components/Skills';

const Page = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
      <div className=" max-w-7xl mx-auto p-5 ">
        <Navbar />
        <Hero/>
      </div>
      <div className=" h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full">

      </div>
      </div>
      
      <div className=" max-w-7xl mx-auto p-5 ">
        <Skills />
      </div>
    </div>
  );
}

export default Page;


// at 39.48 of vid