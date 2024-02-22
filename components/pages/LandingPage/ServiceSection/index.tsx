import { data } from "@/config/data";
import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-4 divide-x-2 grid-cols-1 md:grid-cols-2 py-12">
      {data.services.map((value, index) => (
        <ServiceCard
          icon={value.icon}
          title={value.title}
          description={value.description}
          key={index}
        />
      ))}
    </div>
  );
};

export default ServiceSection;
