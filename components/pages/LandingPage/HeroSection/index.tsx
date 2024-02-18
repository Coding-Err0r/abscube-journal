import images from "@/config/images";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
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
        <div className="flex flex-col justify-center items-center w-full h-full relative z-10 ">
          <div className="flex items-center justify-center p-6  w-full">
            <div className="w-full max-w-lg">
              <form className="mt-5 sm:flex sm:items-center">
                <input
                  id="search"
                  name="search"
                  className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-yellow-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-500 sm:text-sm"
                  placeholder="Keyword"
                  type="search"
                  value=""
                />
                <button
                  type="submit"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          <button className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Advance Search
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
