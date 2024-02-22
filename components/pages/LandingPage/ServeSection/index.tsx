import { data } from "@/config/data";
import React from "react";
import ServeCard from "./ServeCard";

const ServeSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center p-12 gap-4">
      <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 ">
        Who we serve?
      </h1>
      <div className="grid lg:grid-cols-4 gap-4 py-12 grid-cols-1 md:grid-cols-2 ">
        {data.serveSections.map((value, index) => (
          <ServeCard
            key={index}
            title={value.title}
            description={value.description}
            quote={value.quote}
            partner={value.partner}
          />
        ))}
      </div>
    </div>
  );
};

export default ServeSection;
