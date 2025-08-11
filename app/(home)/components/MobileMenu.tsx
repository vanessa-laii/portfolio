import React, { useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface LinkData {
    text: string;
    path: string;
}

interface SocialData {
    link: string;
    label: string;
    Icon: IconType;
}

interface MobileMenuProps {
    links: LinkData[];
    socials: SocialData[];
    close: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links, socials, close }) => {
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        setAnimation(true);
        const handleResize = (e: UIEvent) => {
            if ((e.target as Window).innerWidth >= 640) {
                close();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [close]);

    return (
        <div>
            <div className="fixed inset-0 top-0 w-full h-screen backdrop-blur-sm bg-gray-500 bg-opacity-60 sm:hidden z-40"></div>
            <div className="fixed inset-0 top-0 w-full p-5 z-50">
                <div className={`w-full bg-white rounded-xl p-5 transition-all flex flex-col h-full max-h-[80vh] ${animation ? "scale-100" : "scale-95"}`}>
                    <div className="flex justify-between items-center mb-5">
                        <h1 className="text-xl font-bold font-italic">Navigation</h1>
                        <IoCloseOutline className="w-7 h-7 hover:scale-110 transition-all cursor-pointer" onClick={close} />
                    </div>
                    <div className="mt-5 divide-y flex-1">
                        {links.map(({ text, path }: LinkData, index: number) => (
                            <Link
                                key={index}
                                href={path}
                                className="block py-3 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                                onClick={close}
                            >
                                {text}
                            </Link>
                        ))}
                    </div>
                    
                    {/* Social Icons at Bottom */}
                    <div className="mt-8 pt-4 border-t border-gray-200">
                        <div className="flex justify-center items-center gap-6">
                            {socials.map((social, index) => {
                                const Icon = social.Icon;
                                return (
                                    <a 
                                        href={social.link} 
                                        key={index} 
                                        aria-label={social.label}
                                        className="p-2 hover:scale-110 transition-all"
                                    >
                                        <Icon className="w-6 h-6 text-gray-600 hover:text-purple-600" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;