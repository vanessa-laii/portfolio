"use client"
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AboutPage() {
      const testimonials = [
    {
      action:
        "Improving developer productivity by shipping automated architecture diagrams for host-process relationships for developers, and visualizing GitHub Actions workflows on Dynatrace.",
      name: "SWE Intern",
      designation: "Royal Bank of Canada (RBC)",
      src: "/rbc.jpg",
      skills: "Skills: TypeScript, Python, Opentelemetry, Dynatrace, Backstage",
    },
    {
      action:
        "Managed a team of 2 developers and lead the design and development of the personal iGEM website as well as the competition website. Won silver medal at the iGEM 2024 competition.",
      name: "Web Dev Lead", 
      website: "https://2024.igem.wiki/mcmaster-canada/",
      designation: "McMaster iGEM",
      src: "/iGEM.png",
      skills: "Skills: Typescript, Tailwind CSS, Node.js, Framer motion",
    },
    {
      action:
        "Focused on introducing programming concepts through interactive lessons and hands-on projects to over 500 students in Ontario.",
      name: "Software Engineering Instructor", 
      website: "http://outreach.mcmaster.ca/",
      designation: "McMaster Start Coding",
      src: "/msc.png",
      skills: "Skills: Elm",
    }
  ];

    return (
        <div>
          <div className="max-w-full"> 
            <Navbar />
            <div className="pt-32 px-10">
              <div className=" max-w-7xl mx-auto p-5">
                <h1 className="text-2xl lg:text-4xl font-bold text-center mt-8">
                    <span className="block underline underline-offset-8 decoration-green-200">Experience</span>
                </h1>
                <p className="text-lg text-gray-700 text-center m-12">
                    Currently Software Engineering Intern at RBC. Previously Web Dev Lead for McMaster iGEM. Experienced with UI/UX design, Site Reliability Engineering and Dev Ops.
                </p>
                <AnimatedTestimonials testimonials={testimonials} />
                <Footer />
              </div>
            </div>
          </div>
        </div>
    );
};


