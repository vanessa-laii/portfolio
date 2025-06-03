"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function Experience() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const RBC = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        SWE Intern @ RBC
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const DeltaHacks = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        DeltaHacks 9 McMaster 
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Won 1st place 
      </p>
    </div>
  );
};
const CodingInstructor = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Coding Instructor for grades 5-12 
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Delivered lesson plans teaching front-end programming to over 200 elementary students in the Summer Workshops, delivering sessions in English and French.
      </p>
    </div>
  );
};
const BatteryChallenge = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Algorithms Member for Battery Workforce Challenge (BWC)
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        3 year EV battery challenge across North America! My responsibilities were to design the coulomb counting 
        algorithm for battery State of Charge estimation.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <RBC />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <DeltaHacks />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <CodingInstructor />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <BatteryChallenge />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
