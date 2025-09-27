import React, { useState } from "react";
import PageTitle from "../../common/PageTitles";
import { useSwipeable } from "react-swipeable";

const crewData = [
  {
    role: "Commander",
    name: "Douglas Hurley",
    image: "/crew/image-douglas-hurley.png",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    image: "/crew/image-mark-shuttleworth.png",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    role: "Pilot",
    name: "Victor Glover",
    image: "/crew/image-victor-glover.png",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  },
  {
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    image: "/crew/image-anousheh-ansari.png",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  },
];

function MainCrew() {
  const [activeTab, setActiveTab] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setActiveTab((prev) => (prev + 1) % crewData.length),
    onSwipedRight: () =>
      setActiveTab((prev) => (prev - 1 + crewData.length) % crewData.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const { role, name, image, bio } = crewData[activeTab];

  return (
    <div
      {...handlers}
      className="2xl:p-[5%] 2xl:px-[11%] xl:px-[16%] 2xl:pb-[12%] xl:p-[3%] xl:pb-[10%] h-screen relative sm:p-[8%] p-[3%]"
    >
      <PageTitle num="02" title="MEET YOUR CREW" />
      <div className="relative xl:flex xl:justify-end xl:gap-x-12 xl:items-center h-full w-full md:block xl:p-0 p-5 text-white">
        <div className="flex-1 items-center w-full xl:w-[48%] xl:pt-0 sm:pt-4 pt-5 xl:text-left text-center">
          <p className="text-gray-400 2xl:text-4xl xl:text-2xl uppercase relative font-serif tracking-wider xl:mb-2">
            {role}
          </p>
          <span className="uppercase 2xl:text-7xl xl:text-4xl">{name}</span>
          <p className="2xl:text-2xl xl:text-lg mt-2">{bio}</p>
          <div
            className="
    flex justify-center mt-5
    xl:absolute xl:bottom-0 xl:left-0 xl:justify-start
    w-full
  "
          >
            {crewData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`h-2.5 w-2.5 rounded-full mr-8 cursor-pointer ${
                  activeTab === idx ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        <div
          className="xl:flex xl:w-[48%] xl:justify-center xl:items-center xl:mt-0 
            md:grid md:place-items-center md:w-full md:max-h-[45%] md:mb-0
            grid place-items-center w-full max-h-[45%] mb-0
            xl:px-0 sm:px-10 sm:mt-15 mt-8 text-white xl:min-h-[32rem]"
        >
          <img
            src={image}
            className="2xl:w-xl xl:w-xs max-h-[70%] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default MainCrew;
