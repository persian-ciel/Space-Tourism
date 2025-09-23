import React from "react";
import Hamburger from "/shared/icon-hamburger.svg";

function HamburgerNav() {
  return (
    <>
      <div className="sm:hidden block fixed right-0 mr-7 ">
        <img src={Hamburger} />
      </div>
    </>
  );
}

export default HamburgerNav;
