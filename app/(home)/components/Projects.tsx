"use client";
import React from 'react';
import Title from './Title';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { SiC, SiFigma, SiFlask, SiGit, SiJavascript, SiNextdotjs, SiPython, SiReact, SiSqlite, SiTailwindcss } from 'react-icons/si';
import { FaJava } from "react-icons/fa6";

export default function Projects() {
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
    {
        text: "Python",
        Icon: SiPython,
    },
    {
        text: "C",
        Icon: SiC,
    },
    {
        text: "Figma",
        Icon: SiFigma,
    },
    {
        text: "Java",
        Icon: FaJava,
    }, 
    {
        text: "SQL",
        Icon: SiSqlite,
    }, 
    {
        text: "Flask",
        Icon: SiFlask,
    }
    ]

    return(
        <div className="max-w-5xl mx-auto mt-32 px-8">
            < Title text="Skills 🖥️" className="flex flex-col items-center justify-center "/>
            <HoverEffect items={skills}/>
        </div>

    ) 

}
