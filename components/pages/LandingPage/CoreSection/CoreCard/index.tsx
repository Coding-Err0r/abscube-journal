import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  icon: string;
  title: string;
  href: string;
}

const CoreCard = ({ icon, title, href }: Props) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Image
        src={icon}
        alt={title}
        className="md:w-20 md:h-20 w-16 h-16"
        width={500}
        height={500}
      />
      <a
        href={href}
        className="flex items-center justify-center bg-yellow-400  hover:bg-yellow-600 md:w-80 w-64 py-2"
      >
        <h1 className="md:text-lg font-semibold text-gray-800 text-sm">
          {title.toUpperCase()}
        </h1>
        <ChevronRight className="md:w-8 md:h-8 text-gray-800 w-5 h-5" />
      </a>
    </div>
  );
};

export default CoreCard;
