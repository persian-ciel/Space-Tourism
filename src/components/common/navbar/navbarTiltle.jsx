import React from "react";
import { Link } from "react-router-dom";

function NavbarTiltle({ to, number, name, isActive }) {
  return (
    <li className="sm:mb-0 mb-7">
      <Link
        to={to}
        className={`cursor-pointer font-light transition-colors pb-6
          ${
            isActive
              ? "border-b-2 border-white text-white font-bold"
              : "hover:text-gray-300 text-white hover:border-b-2 hover:border-gray-300" 
          }`}
      >
        <span className="font-bold pr-1">{number}</span> {name}
      </Link>
    </li>
  );
}

export default NavbarTiltle;
