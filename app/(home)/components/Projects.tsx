import React from 'react';
import { SiFigma, SiFirebase, SiGit, SiJavascript, SiPython, SiShadcnui, SiSqlite, SiTailwindcss, SiVercel } from 'react-icons/si';
import Title from './Title';
import Link from 'next/link';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import { cn } from '@/lib/utils';
import { FaJava } from 'react-icons/fa6';

export default function Projects() {
    const projects = [
        {
            title: "McMaster iGEM Personal Website",
            tech: [SiJavascript, SiTailwindcss, SiVercel, SiGit, SiShadcnui],
            link: "https://mcmaster-igem.vercel.app/",
            cover: "/iGEM.png",
            background: "bg-indigo-100"
        },
        {
            title: "E-Commerce Platform (BizConnect)",
            tech: [SiFigma, SiFirebase, SiPython, SiSqlite ],
            link: "https://www.figma.com/proto/r8Yj9P3CbFHpJAlNh3wq8k/RBC-BizConnect?node-id=104-79&starting-point-node-id=104%3A79&mode=design&t=QMdPKcNWPvXRnwyo-1",
            cover: "/BizConnect.png",
            background: "bg-indigo-100"
        },
        {
            title: "WaterFilter Identifier (MacWater)",
            tech: [SiFigma, SiJavascript, SiGit, SiFirebase],
            link: "https://github.com/harmanpreet-sagar/MacWater",
            cover: "/MacWater.png",
            background: "bg-indigo-100"
        },
        {
            title: "Maze Solver",
            tech: [SiGit, FaJava],
            link: "https://github.com/vanessa-laii/a1-maze-runner-vanessa-laii",
            cover: "/maze.jpg",
            background: "bg-indigo-100"
        }
    ];
    return (
        <div className="py-10 p-5 sm:p-0">
            <Title text="Projects ⚒️" className="flex flex-col items-center justify-center" />
            <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
                {projects.map((project, index) => (
                    <Link href={project.link} key={index}>
                        <div className={cn("p-5 rounded-md", project.background)}>
                            <DirectionAwareHover 
                                imageUrl={project.cover} 
                                className="w-lg space-y-5 cursor-pointer" 
                                width={550} // Set the width
                                height={400} // Set the height
                            >
                                <div className="space-y-5">
                                    <h1 className="text-2xl font-bold">{project.title}</h1>
                                    <div className="flex items-center gap-5">
                                        {project.tech.map((Icon, index) => {
                                            return <Icon className="w-8 h-8" key={index} />;
                                        })}
                                    </div>
                                </div>
                            </DirectionAwareHover>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
