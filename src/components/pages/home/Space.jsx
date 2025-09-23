import React from "react";

function SpaceContent() {
  return (
    <div className="xl:flex xl:justify-end h-full w-full md:block">
      <div className="xl:w-[48%] xl:flex-1 xl:text-left md:block md:w-full md:text-center">
        <p className="text-white xl:text-lg xl:pb-4 font-light md:text-2xl md:pb-8">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <span className="font-serif font-bold xl:text-7xl text-white md:text-9xl">SPACE</span>
        <p className="text-white pt-10 text-sm ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="xl:flex xl:w-[48%] xl:justify-center xl:items-center xl:mt-0 md:grid md:place-items-center md:w-full md:mt-20  ">
        <button
          className="bg-white rounded-full xl:w-44 xl:h-44 xl:text-lg md:text-2xl md:w-56 md:h-56  cursor-pointer hover:shadow-[0_0_40px_10px_rgba(255,255,255,0.7)] 
               transition duration-300 "
        >
          Explore
        </button>
      </div>
    </div>
  );
}

export default SpaceContent;
