"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Navbar from '../(home)/components/Navbar';
import Footer from '../(home)/components/Footer';

const About = () => {
      const data = [
      {
        title: "2025",
        content: (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="md:col-span-1">
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">Role</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-neutral-800 dark:text-neutral-200">12 month co-op at Royal Bank of Canada (RBC) as a Full Stack Developer Intern on Innovation & Technology DevOps.</p>
              </div>
              
              <div className="md:col-span-1">
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">Used</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-neutral-800 dark:text-neutral-200">TypeScript, Python, Opentelemetry, Dynatrace, Backstage, Ansible</p>
              </div>
              
              <div className="md:col-span-1">
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">To</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-neutral-800 dark:text-neutral-200">Implement Site Reliability Practices for 30+ services across RBC&apos;s platform to ensure complete and healthy systems. Improve developer productivity by automating workflows, enhancing observability and reducing debugging time.</p>
              </div>
              
              <div className="md:col-span-1">
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">Shipped</p>
              </div>
              <div className="md:col-span-3">
                <div className="space-y-2 font-semibold">
                  <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                    ✅ Automated architecture diagrams for microservices and hosts & processes from Dynatrace data.
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                    ✅ Synthetic Pipelines to monitor the health of RBC&apos;s tools and house CI/CD platform.
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                    ✅ GitHub Health Check Reports to review high usage and pulling frequencies across all lines of businesses.
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                    ✅ Developed GitHub actions to visualize CI/CD workflow job outcomes in a waterfall visualization manner.
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="grid grid-cols-2 gap-4">
              <img
                src="https://assets.aceternity.com/templates/startup-1.webp"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="https://assets.aceternity.com/templates/startup-2.webp"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="https://assets.aceternity.com/templates/startup-3.webp"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="https://assets.aceternity.com/templates/startup-4.webp"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </div> */}
          </div>
        ),
      },
      {
        title: "2024",
        content: (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="md:col-span-1">
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">Role</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-neutral-800 dark:text-neutral-200">Web Dev Lead for McMaster iGEM</p>
              </div>
              
              <div className="md:col-span-1">
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">Used</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-neutral-800 dark:text-neutral-200">TypeScript, React, Node.js, Vercel, Git, TailwindCSS</p>
              </div>
              
              <div className="md:col-span-1">
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">To</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-neutral-800 dark:text-neutral-200">Collaborate with researchers to develop a wiki page winning Silver award in the overgrad category in Paris, France.</p>
              </div>
              
              <div className="md:col-span-1">
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">Shipped</p>
              </div>
              <div className="md:col-span-3">
                <div className="space-y-2 font-semibold">
                  <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                    ✅ Personal website to showcase the team&apos;s research and achievements, and develop the personal branding
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                    ✅ 2024 Wiki page to document research of multiple subteams 
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://2024.igem.wiki/mcmaster-canada/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:scale-105 transition-transform duration-200"
              >
                <img
                  src="/iGEM-wiki.png"
                  alt="iGEM 2024 Wiki"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
              </a>
              <a 
                href="https://www.mcmaster-igem.ca/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:scale-105 transition-transform duration-200"
              >
                <img
                  src="/iGEM-personal.png"
                  alt="iGEM Personal Website"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
              </a>
            </div>
          </div>
        ),
      },
      {
        title: "DeltaHacks 2023",
        content: (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="md:col-span-1">
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">Hackathon</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-neutral-800 dark:text-neutral-200">DeltaHacks 2023</p>
              </div>
              <div className="md:col-span-1">
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">Used</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-neutral-800 dark:text-neutral-200">Figma, JavaScript, HTML/CSS, Python, Firebase, SQL</p>
              </div>
              
              <div className="md:col-span-1">
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">To</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-neutral-800 dark:text-neutral-200">Lead the front-end and UI/UX design for a small business partnership platform</p>
              </div>
              
              <div className="md:col-span-1">
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">Won</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-neutral-800 dark:text-neutral-200">🏆 1st place for RBC Sponsorship prize </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://devpost.com/software/rbc-bizconnect" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:scale-105 transition-transform duration-200"
              >
                <img
                  src="/BizConnect.png"
                  alt="BizConnect"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
              </a>
                <img
                  src="/delta.JPG"
                  alt="iGEM Personal Website"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
            </div>
          </div>
        ),
      },
    ];
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative w-full overflow-clip flex-1">
        <Navbar />
        <Timeline data={data} />
      </div>
      <Footer />
    </div>
  );
}

export default About;
