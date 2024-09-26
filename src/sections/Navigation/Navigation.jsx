import React from "react";
import { Wrapper } from "../../shared/Wrapper.tsx";
import { Toggler } from "../../shared/Toggler/Toggler.jsx";
import Profile from "../../../public/images/profile.png";
import { navLinks } from "../../config/data.ts";
import { Link } from "react-router-dom";
import { ContentWrapper } from "../../shared/ContentWrapper.jsx";

export const Navigation = ({ darkMode, setDarkMode }) => {
  return (
    <ContentWrapper classes="fixed w-full z-[9999]  ">
      <Wrapper classes="flex items-center justify-between text-white py-5">
        <div className=" bg-[#662d91] rounded-full" >
          <img
            className="size-[50px]"
            src={Profile}
            alt="Shoaib Arif Profile"
          />
        </div>
        <ul className="flex flex-row items-center">
          {navLinks.map((nav, index) => {
            return (
              <li className="mx-2">
                <Link to={nav.href} className="relative px-4 py-1 cursor-pointer after:transition-all after:w-[0px] hover:after:w-[80%]  hover:after:left-4 transition-all after:h-[2px] dark:after:bg-slate-200 after:bg-black after:absolute after:left-[50%] after:bottom-0   rounded-sm flex flex-col justify-start">
                  <span className="text-xs text-[#bb62ff] font-semibold">
                    0{index + 1}
                  </span>
                  <span className="text-base text-black dark:text-white font-semibold transition-all">{nav.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <Toggler darkMode={darkMode} setDarkMode={setDarkMode} />
      </Wrapper >
    </ContentWrapper >
  );
};
