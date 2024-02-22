import { data } from "@/config/data";
import React from "react";
import CoreCard from "./CoreCard";

const CoreSection = () => {
  return (
    <div className="py-24">
      <div className="w-full md:h-[12cm] bg-[#eeeeee] flex flex-col gap-4 h-full py-8 md:py-0">
        <div className="flex flex-col items-center p-8 gap-4">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-800">
            Join ABSCUBE
          </h1>
          <p className="md:text-base text-center">
            An open scholarly infrastructure for researchers by researchers|
            Committed to the POSI
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4  h-full place-items-center grid-cols-1">
          {data.coreSerctions.map((value, index) => (
            <CoreCard
              key={index}
              icon={value.icon}
              title={value.title}
              href={value.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreSection;
