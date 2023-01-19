import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

function NavBar(props) {
  return (
    <div className="">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons dark:text-teal-50">
          edwardpassagi
        </h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => props.setDarkMode(!props.darkMode)}
              className="cursor-pointer text-2xl dark:text-teal-50"
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500
         text-white px-4 py-2 rounded-md ml-8"
              href="#"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
