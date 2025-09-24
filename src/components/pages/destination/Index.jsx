import React, { useState } from "react";
import NavBarCommon from "../../common/navbar/navbar";
import MainContetn from "./Content";

function Destination({ activePath }) {
  
  return (
    <>
      <div className="relative lg:bg-[url(/destination/background-destination-desktop.jpg)] md:bg-[url(/destination/background-destination-tablet.jpg)] bg-[url(/destination/background-destination-mobile.jpg)] bg-cover h-screen w-screen overflow-hidden font-light">
        <NavBarCommon activePath={activePath} />
        <MainContetn />
      </div>
    </>
  );
}

export default Destination;
