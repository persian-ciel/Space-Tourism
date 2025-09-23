import React from "react";
import NavbarTiltle from "./navbarTiltle";

function NavbarDiv({ activePath }) {
  const nav = [
    { id: 1, title: "HOME", num: "00", path: "/" },
    { id: 2, title: "DESTINATION", num: "01", path: "/destination" },
    { id: 3, title: "CREW", num: "02", path: "/crew" },
    { id: 4, title: "TECHNOLOGY", num: "03", path: "/technology" },
  ];

  return (
    <div className="hidden sm:block sm:fixed right-0 2xl:w-1/2 xl:w-1/2 md:w-10/12 z-50 2xl:p-6 xl:p-6 md:p-6  xl:backdrop-blur-2xl xl:bg-transparent md:bg-gray-800  sm:pr-[4%] 2xl:pr-[8%] backdrop-brightness-125">
      <ul className="list-none m-0 p-0 flex sm:gap-6 2xl:gap-24 text-white justify-end">
        {nav.map((navbar) => (
          <NavbarTiltle
            key={navbar.id}
            to={navbar.path}
            number={navbar.num}
            name={navbar.title}
            isActive={activePath === navbar.path}
          />
        ))}
      </ul>
    </div>
  );
}

export default NavbarDiv;
