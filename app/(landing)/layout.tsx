"use client";

import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      {children}
      <Footer />
    </div>
  );
};

export default LandingLayout;
