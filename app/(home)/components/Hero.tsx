import { MovingBorderBtn } from '@/components/ui/moving-border';
import Link from 'next/link';
import React from 'react';
import Title from './Title';
import Graphic from './Graphic';

export default function Hero() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse lg:flex-row gap-15 lg:gap-0 items-center justify-between px-5" animation-move-up> {/* Added px-5 for padding */}
      <div className="space-y-10 text-center lg:text-left"> {/* Adjusted text alignment for larger screens */}
        <h1 className="text-4xl lg:text-7xl font-bold">
          Hi there!✌🏻 
          <br/> <span className="underline underline-offset-8 decoration-green-200">{"I'm Vanessa"}</span> 
        </h1>

        <p className="md:w-96 text-lg"> {/* Removed text color class */}
          {"Software Engineering Student at McMaster University. I'm passionate about designing for accessibility!"}
        </p>

        <Link href={"mailto:laiv3@mcmaster.ca"} className="inline-block">
          <Title text="Contact Me 📨"/>
        </Link>
      </div>
      <div className="relative flex justify-center items-center w-full lg:w-auto">
        <div className="space-y-3 right-0 relative flex justify-left items-left w-full lg:w-auto">
          <Graphic />
        </div>
        {/* Button container */}
        <div className="absolute right-5 top-20">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <p>⊹ Looking for Co-op ⊹</p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}
