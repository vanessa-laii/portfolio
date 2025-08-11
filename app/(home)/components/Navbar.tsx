import React, { useState } from 'react';
import Link from 'next/link';
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { HiMenu } from "react-icons/hi";
import { cn } from "@/lib/utils";
import MobileMenu from './MobileMenu';

export default function Navbar({className}:{className?:string}){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    const links = [
        {
            href: "/",
            label: "Home"
        },
                {
            href: "/about",
            label: "About"
        },
        {
            href: "/projects",
            label: "Projects"
        },
        {
            href: "/blog",
            label: "Blog"
        }
    ];

    // Convert links format for MobileMenu component
    const mobileLinks = links.map(link => ({
        text: link.label,
        path: link.href
    }));

    return (
        <>
            <nav className={cn("w-full py-4 px-6 fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/20 animate-move-down", className)}>
              <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold">vanessa lai ❀</h1>
                
                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                  {links.map((link, index) => (
                    <Link 
                      key={index} 
                      href={link.href}
                      className="text-gray-900 hover:text-purple-300 transition-colors duration-200 font-bold"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                
                {/* Desktop Social Icons */}
                <div className="hidden md:flex items-center gap-5">
                  {socials.map((social,index)=>{
                    const Icon = social.Icon
                    return (
                      <a href={social.link} key={index} aria-label={social.label}>
                        <Icon className="w-5 h-5 hover:scale-125 transition-all"/>
                      </a>
                    )
                  })}
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden p-2"
                  onClick={() => setMobileMenuOpen(true)}
                  aria-label="Open mobile menu"
                >
                  <HiMenu className="w-6 h-6" />
                </button>
              </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <MobileMenu 
                links={mobileLinks} 
                socials={socials}
                close={() => setMobileMenuOpen(false)} 
              />
            )}
        </>
    );
}