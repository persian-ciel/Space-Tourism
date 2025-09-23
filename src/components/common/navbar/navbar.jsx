import React from "react";
import NavbarDiv from "./navbarDiv";
import Logo from "/shared/logo.svg";
import HamburgerNav from "./HamburgerNav";

function NavBarCommon({ activePath }) {
  return (
    <div className="flex sm:mt-[3%] mt-[5%]  2xl:pt-0 xl:pt-0 md:pt-5 items-center ">
      <NavbarDiv activePath={activePath} />
      <HamburgerNav />
      <img src={Logo} alt="Logo" className="pl-[4%] sm:w-[12%] xl:w-[7%] w-14 " />
      <hr className="text-white border-t sm:w-5/12 2xl:w-5/11 ml-10 z-50 opacity-20 2xl:inline xl:inline hidden" />
    </div>
  );
}

export default NavBarCommon;
