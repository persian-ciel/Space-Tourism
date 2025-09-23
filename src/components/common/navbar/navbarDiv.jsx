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
    <div className="fixed right-0 w-1/2 z-50 p-6 backdrop-blur-2xl pr-[4%] backdrop-brightness-125">
      <ul className="list-none m-0 p-0 flex gap-6 text-white justify-end">
        {nav.map((navbar) => (
          <NavbarTiltle
            key={navbar.id}
            to={navbar.path}
            number={navbar.num}
            name={navbar.title}
            isActive={activePath === navbar.path} // pass boolean
          />
        ))}
      </ul>
    </div>
  );
}

export default NavbarDiv;
