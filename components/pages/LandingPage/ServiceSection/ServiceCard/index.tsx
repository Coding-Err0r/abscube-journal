import Image from "next/image";
import React from "react";

interface Props {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: Props) => {
  return (
    <div className="p-8 w-full ">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center justify-center">
          <Image
            src={icon}
            alt="icon"
            className="w-12 h-12 object-cover"
            width={500}
            height={500}
          />
        </div>

        <div className="flex flex-col items-center justify-center max-w-lg space-y-2">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <div className="flex items-center w-full">
            <div className="flex-1 border-t-2 border-gray-200"></div>
            <div className="flex-1 border-t-2 border-gray-200"></div>
          </div>
          <p className="text-gray-600 text-base text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
