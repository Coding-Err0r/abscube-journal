import { ChevronRight, MoveRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  setSidebarOpen?: (event: boolean) => void;
}

const GetInTouch = ({ setSidebarOpen }: Props) => {
  const pathname = usePathname();
  return (
    <a
      href="#_"
      className="relative inline-flex items-center justify-center p-4 w-32 py-3 overflow-hidden font-medium text-yellow-500 transition duration-300 ease-out border-2 border-yellow-500 rounded-full shadow-md group"
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-500 group-hover:translate-x-0 ease">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="absolute flex items-center justify-center lg:text-xl text-md  w-full h-full text-yellow-500 transition-all duration-300 transform group-hover:translate-x-full ease">
        Sign In
      </span>
      <span className="relative invisible">Sign In</span>
    </a>
  );
};

export default GetInTouch;
