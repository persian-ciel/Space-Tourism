import React from "react";
import NavBarCommon from "../../common/navbar/navbar";
import MainCrew from "./MainContent";

function Crew({activePath}) {
  return (
    <>
      <div className="relative lg:bg-[url(/crew/background-crew-desktop.jpg)] md:bg-[url(/crew/background-crew-tablet.jpg)] bg-[url(/crew/background-crew-mobile.jpg)] bg-cover h-screen w-screen overflow-hidden font-light">
        <NavBarCommon activePath={activePath} />
        <MainCrew />
      </div>
    </>
  );
}

export default Crew;
