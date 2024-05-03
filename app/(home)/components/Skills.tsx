"use client";
import React from 'react';
import Title from './Title';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { SiGit, SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si';

export default function Skills() {
    const skills = [
    {   
        text: "React",
        Icon: SiReact,
    },
    {
        text: "Next.js",
        Icon: SiNextdotjs,
    },
    {
        text: "Tailwind",
        Icon: SiTailwindcss,
    },
    {
        text: "Git",
        Icon: SiGit,
    },
    ]

    return(
        <div className="max-w-5xl mx-auto px-8">
            < Title text="Skills 🖥️" className="flex flex-col items-center justify-center "/>
            <HoverEffect items={skills}/>
        </div>

    ) 

}
