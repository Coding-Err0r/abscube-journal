import React from "react";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import CoreSection from "./CoreSection";
import ServeSection from "./ServeSection";
import RecentSection from "./RecentSection";

const LandingPage = () => {
  return (
    <div className="overflow-hidden ">
      <HeroSection />
      <ServiceSection />
      <CoreSection />
      <ServeSection />
      <RecentSection />
    </div>
  );
};

export default LandingPage;
