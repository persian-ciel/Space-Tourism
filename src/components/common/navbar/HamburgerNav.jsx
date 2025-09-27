import React, { useState } from "react";
import Hamburger from "/shared/icon-hamburger.svg";
import NavbarTiltle from "./navbarTiltle";

function HamburgerNav({ activePath }) {
  const [showPage, setShowPage] = useState(false);

  const nav = [
    { id: 1, title: "HOME", num: "00", path: "/" },
    { id: 2, title: "DESTINATION", num: "01", path: "/destination" },
    { id: 3, title: "CREW", num: "02", path: "/crew" },
  ];

  return (
    <>
      <div className="sm:hidden block fixed right-0 mr-7 z-50">
        <button onClick={() => setShowPage(true)}>
          <img src={Hamburger} alt="menu" />
        </button>

        {showPage && (
          <div className="fixed inset-0 z-40">
            <div className="absolute top-0 right-0 h-full w-2/3 backdrop-blur-xl shadow-lg p-6">
              <button
                onClick={() => setShowPage(false)}
                className="px-4 py-2 flex-2 right-0 absolute mr-4"
              >
                <img src="/shared/icon-close.svg" alt="" />
              </button>
              <h2 className="text-xl font-bold mt-16 ">
                <ul className="list-none block text-white justify-end ">
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
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default HamburgerNav;
