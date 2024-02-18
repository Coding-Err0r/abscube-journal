import React from "react";

const SimpleSearch = () => {
  return (
    <div className="flex items-center justify-center p-6  w-full">
      <div className="w-full max-w-xl">
        <form className="mt-5 sm:flex sm:items-center">
          <input
            id="search"
            name="search"
            className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-yellow-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-500 sm:text-sm"
            placeholder="Search"
            type="text"
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
  );
};

export default SimpleSearch;
