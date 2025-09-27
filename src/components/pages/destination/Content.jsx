import React, { useState } from "react";
import PageTitle from "../../common/PageTitles";
import { useSwipeable } from "react-swipeable";

function MainContetn() {
  const [activeTab, setActiveTab] = useState(0);

  const destinations = [
    {
      name: "Moon",
      image: "/destination/image-moon.png",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      dest: "384,400 km",
      travel: "3 days",
    },
    {
      name: "Mars",
      image: "/destination/image-mars.png",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      dest: "225 MIL. km",
      travel: "9 months",
    },
    {
      name: "Europa",
      image: "/destination/image-europa.png",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      dest: "628 MIL. km",
      travel: "3 years",
    },
    {
      name: "Titan",
      image: "/destination/image-titan.png",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      dest: "1.6 BIL. km",
      travel: "7 years",
    },
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setActiveTab((prev) => (prev + 1) % destinations.length),
    onSwipedRight: () =>
      setActiveTab(
        (prev) => (prev - 1 + destinations.length) % destinations.length
      ),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const { name, image, description, dest, travel } = destinations[activeTab];

  return (
    <div
      {...handlers}
      className="2xl:p-[5%] 2xl:px-[11%] xl:px-[16%] 2xl:pb-[12%] xl:p-[3%] xl:pb-[10%] h-screen relative sm:p-[8%] p-[3%]"
    >
      <PageTitle num="01" title="PICK YOUR DESTINATION" />
      <div className="xl:flex xl:justify-end xl:gap-x-12 xl:items-center h-full w-full md:block  xl:p-0 p-5">
        <div className="flex items-center justify-center w-full xl:w-[48%] xl:pt-0 sm:pt-4 pt-5">
          <img
            src={image}
            alt={name}
            className="w-[50%] xl:w-[60%] 2xl:w-[70%] sm:w-[50%]  h-auto object-contain"
          />
        </div>

        <div
          className="xl:flex xl:flex-col xl:w-[48%]  xl:text-left xl:justify-center xl:items-start xl:mt-0 
                        grid place-items-center w-full xl:px-0 sm:px-10 sm:mt-15 mt-8 text-white xl:min-h-[32rem] "
        >
          <div className="flex xl:gap-7 gap-5 xl:mb-6 mb-5 2xl:text-2xl text-sm">
            {destinations.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`uppercase tracking-widest pb-2 border-b-2 ${
                  activeTab === idx
                    ? "border-white"
                    : "border-transparent hover:border-gray-400"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <h2 className="2xl:text-9xl sm:text-7xl text-5xl uppercase xl:mb-4 mb-6">
            {name}
          </h2>
          <p className="2xl:text-2xl sm:text-lg text-gray-300 sm:mb-9 mb-5 xl:text-left text-center text-sm">
            {description}
          </p>
          <hr className="text-white border-t w-full opacity-30" />
          <div className="flex w-full px-4 py-5">
            <div className="flex-1">
              <p className="2xl:text-lg sm:text-sm text-xs sm:text-left text-center">
                AVG. DISTANCE
              </p>
              <p className="2xl:text-3xl md:text-xl sm:text-left text-center">
                {dest}
              </p>
            </div>
            <div className="flex-1">
              <p className="2xl:text-lg sm:text-sm text-xs sm:text-left text-center">
                Est. travel time
              </p>
              <p className="2xl:text-3xl md:text-xl sm:text-left text-center">
                {travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContetn;
