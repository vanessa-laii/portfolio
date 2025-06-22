import React from 'react';
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
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
        }, 
        {
            link: "mailto:laiv3@mcmaster.ca",
            label: "Email", 
            Icon: SiGmail
        }
    ];

    return (
        <nav className={cn("w-full py-10 animate-move-down", className)}>
          <div className="flex items-center justify-between w-full">
            <h1 className="text-2xl font-bold">vanessa lai ❀</h1>
            <div className="flex items-center gap-5">
              {socials.map((social,index)=>{
                const Icon = social.Icon
                return (
                  <a href={social.link} key={index} aria-label={social.label}>
                    <Icon className="w-5 h-5 hover:scale-125 transition-all"/>
                  </a>
                )
              })}
            </div> 
          </div>
        </nav>
    );
}