import React from 'react';
import { SiGithub, SiLinkedin } from "react-icons/si";
import { cn } from "@/lib/utils";

export default function Navbar({className}:{className?:string}){

    const socials = [
        {
            link: "https://www.linkedin.com/in/vanessa-lai",
            label: "Linkedin", 
            Icon: SiLinkedin
        },

        {
            link: "https://github.com/vanessa-laii",
            label: "Github",
            Icon: SiGithub
        }

    ];

    return (
        <nav className={cn(" py-10 flex justify-between items-center animate-move-down", className)}>
            <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-200 -rotate-2">Vanessa Lai ⌨️</h1>
            <div className="flex items-center gap-5">
                {socials.map((social,index)=>{

                    const Icon = social.Icon
                    return <a href={social.link} key={index} aria-Label={social.label}>
                        <Icon className= "w-5 h-5 hover:scale-125 transition-all"/>
                    </a>

                })}
            </div> 
        </nav>
    );
}
