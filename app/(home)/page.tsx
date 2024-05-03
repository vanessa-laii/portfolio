import React from 'react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Skills from './components/Skills';
import { AuroraBackground } from '@/components/ui/aurora-background';
import Graphic from './components/Graphic';
import Projects from './components/Projects';
import Footer from './components/Footer';

const Page = () => {
  return (
    <div>
      <AuroraBackground>
          <div className="min-h-screen overflow-hidden flex flex-col"> 
    
              <div className="dark:bg-white relative flex-grow">
                <div className="max-w-7xl mx-auto p-5 h-full"> 
                  <Navbar />
                  <Hero />
                  <div className=" max-w-7xl mx-auto p-5 mt-20">
                    <Skills />
                    <Projects />
                    <Footer />
                  </div>
                </div>
              </div>
                
              
          </div>

      </AuroraBackground>
    </div>


  );
}

export default Page;
