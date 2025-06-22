import { MovingBorderBtn } from '@/components/ui/moving-border';
import Typewriter from "@/components/ui/typewriter"
import Link from 'next/link';
import React from 'react';
import Title from './Title';
import Graphic from './Graphic';

export default function Hero() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse lg:flex-row items-center justify-between p-5 gap-20" animation-move-up>
      {/* Left Section */}
      <div className="space-y-10 text-left lg:w-3/5">
        <h1 className="text-3xl lg:text-6xl font-bold">
          <span className="block underline underline-offset-8 decoration-purple-100 text-left">Engineering</span>
          <span className="block underline underline-offset-8 decoration-green-200 text-center">Creativity</span>
          <span className="block underline underline-offset-8 decoration-purple-200 text-right">Curiosity.</span>
        </h1>

        <div className="text-lg font-mono"> 
          Software engineering student navigating the world of code and design. 『••✎••』
          <br />
          <br />
           Currently Software Engineering Intern at RBC. Previously Web Dev Lead for McMaster iGEM. Experienced with UI/UX design, Site Reliability Engineering, Dev Ops. 
        </div>

        {/* <Link href={"mailto:laiv3@mcmaster.ca"} className="inline-block">
          <Title text="Let's chat! 📨" />
        </Link> */}
      </div>

      {/* Vertical Divider */}
      <div className="block w-px h-[60%] bg-gray-300 mx-6" />

      {/* Right Section */}
      <div className="relative flex justify-center items-center w-full lg:w-2/5">
        <div className="space-y-3 right-0 relative flex justify-left items-left w-full lg:w-auto">
          <Graphic />
        </div>
        <div className="absolute right-5 top-20">
          <Link
            href={"https://drive.google.com/file/d/1u5rZD-lbzy0M4azHsZtnum2_2_ZMNMXH/view?usp=sharing"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
              <p>⊹ My Resume ⊹</p>
            </MovingBorderBtn> */}
          </Link>
        </div>
      </div>
    </div>
  );
}

