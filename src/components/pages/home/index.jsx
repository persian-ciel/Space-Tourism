import React from "react";
import NavBarCommon from "../../common/navbar/navbar";
import MainContent from "./MianContent";

function Home({ activePath }) {
  return (
    <div className="relative lg:bg-[url(/home/background-home-desktop.jpg)] md:bg-[url(/home/background-home-tablet.jpg)] bg-[url(/home/background-home-mobile.jpg)] bg-cover h-screen w-screen overflow-hidden font-light">
      <NavBarCommon activePath={activePath} />
      <MainContent />
    </div>
  );
}

export default Home;
