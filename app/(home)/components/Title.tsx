import React from 'react';

export default function Title({text, className}: {text:string, className?:string}){
    return (
        <div className={className}>
                <div>
                    <h1 className = "text-2xl font-bold group-hover:text-green-400 transition-all">
                        {text}
                    </h1>
                    <div className="w-40 h-2 bg-green-200 rounded-full"></div>
                    <div className="w-40 h-2 bg-purple-100 rounded-full translate-x-2"></div>
                </div>
        </div>
    )
}
