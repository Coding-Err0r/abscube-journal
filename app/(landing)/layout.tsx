"use client";

import Navbar from "@/components/global/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-600 w-full h-[800rem]" />
      <ToastContainer />
      {children}
    </div>
  );
};

export default LandingLayout;
