import React from "react";
import NavbarDiv from "./navbarDiv";
import Logo from "/shared/logo.svg";

function NavBarCommon({ activePath }) {
  return (
    <div className="flex mt-[3%] items-center ">
      <NavbarDiv activePath={activePath} />
      <img src={Logo} alt="Logo" className="pl-[4%]" />
      <hr className="text-white border-t w-5/12 ml-10 z-50 opacity-20" />
    </div>
  );
}

export default NavBarCommon;
