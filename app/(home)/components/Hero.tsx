import { MovingBorderBtn } from '@/components/ui/moving-border';
import Typewriter from "@/components/ui/typewriter"
import Link from 'next/link';
import React from 'react';
import Title from './Title';
import Graphic from './Graphic';

export default function Hero() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse lg:flex-row gap-15 lg:gap-0 items-center justify-between px-5" animation-move-up> 
      <div className="absolute right-20 flex">
        <div className="rounded-full bg-green-300 opacity-20 w-[800px] h-[600px] blur-[100px] z-[-1]"></div>
      </div>
      <div className="space-y-10 text-center lg:text-left"> 
        <h1 className="text-4xl lg:text-7xl font-bold">
          Hi there!✌🏻 
          <br/> <span className="underline underline-offset-8 decoration-green-200">{"I'm Vanessa"}</span> 
        </h1>

        <Typewriter 
          className="md:w-96 text-lg font-mono" 
          text="Software Engineering Student at McMaster University. Passionate about accessibility and innovation." 
          speed={40}
        />


        <Link href={"mailto:laiv3@mcmaster.ca"} className="inline-block">
          <Title text="Contact Me 📨"/>
        </Link>
      </div>
      <div className="relative flex justify-center items-center w-full lg:w-auto">
        <div className="space-y-3 right-0 relative flex justify-left items-left w-full lg:w-auto">
          <Graphic />
        </div>
        <div className="absolute right-5 top-20">
          <Link href={"https://drive.google.com/file/d/1u5rZD-lbzy0M4azHsZtnum2_2_ZMNMXH/view?usp=sharing"}>
            <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
              <p>⊹  My Resume  ⊹</p>
            </MovingBorderBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}
