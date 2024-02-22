import React from "react";

interface Props {
  title: string;
  description: string;
  quote: string;
  partner: string;
}

const ServeCard = ({ title, description, quote, partner }: Props) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-xl font-semibold">{title.normalize()}</h1>
      <p className="text-base text-gray-900 flex-1">{description}</p>

      <p className="text-base text-gray-700 flex-1">
        {`″ `}
        {quote}
        {` ″`}
      </p>
      <div className="flex items-center w-full">
        <div className="flex-1 border-t-2 border-gray-200"></div>
        <div className="flex-1 border-t-2 border-gray-200"></div>
      </div>
      <p className="text-base text-amber-600 font-semibold ">{partner}</p>
    </div>
  );
};

export default ServeCard;
