"use client";
import images from "@/config/images";
import Image from "next/image";
import React, { useState } from "react";
import SimpleSearch from "./SimpleSearch";
import AdvanceSearch from "./AdvanceSearch";

const HeroSection = () => {
  const [isAdvanceSearch, setIsAdvanceSearch] = useState<boolean>(false);
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full">
        <div className="w-full h-full bg-black/50 absolute z-0" />
        <Image
          src={images.heroBackground}
          alt={images.heroBackground}
          fill
          className="w-full h-full absolute -z-10"
        />
        <div className="flex flex-col justify-center items-center w-full h-full relative">
          {isAdvanceSearch === true ? <AdvanceSearch /> : <SimpleSearch />}
          <button
            className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
            onClick={() => setIsAdvanceSearch(!isAdvanceSearch)}
          >
            <span
              className={`absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2  group-hover:w-full ease ${
                isAdvanceSearch === true
                  ? "border-red-600"
                  : "border-yellow-600"
              }`}
            ></span>
            <span
              className={`absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2  group-hover:w-full ease ${
                isAdvanceSearch === true
                  ? "border-red-600"
                  : "border-yellow-600"
              }`}
            ></span>
            <span
              className={`absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200  group-hover:h-full ease ${
                isAdvanceSearch === true ? "bg-red-600" : "bg-yellow-600"
              }`}
            ></span>
            <span
              className={`absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200  group-hover:h-full ease ${
                isAdvanceSearch === true ? "bg-red-600" : "bg-yellow-600"
              }`}
            ></span>
            <span
              className={`absolute inset-0 w-full h-full duration-300 delay-300  opacity-0 group-hover:opacity-100 ${
                isAdvanceSearch === true ? "bg-red-700" : "bg-yellow-700"
              }`}
            ></span>
            <span
              className={`relative transition-colors duration-300 delay-200 group-hover:text-white ease`}
            >
              {isAdvanceSearch === true ? "Simple Search" : "Advance Search"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
