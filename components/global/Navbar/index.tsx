import React from "react";
import DesktopNavbar from "./Desktop";
import MobileNavbar from "./Mobile";

const Navbar = () => {
  return (
    <div>
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
