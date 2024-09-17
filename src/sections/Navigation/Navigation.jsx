import React from "react";
import { Wrapper } from "../../shared/Wrapper.tsx";
import { Toggler } from "../../shared/Toggler/Toggler.jsx";
import Profile from "../../../public/images/profile.png";
import { navLinks } from "../../config/data.ts";
import {Link} from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="">
      <Wrapper classes="flex items-center justify-between text-white py-5">
        <div className="bg-white rounded-full">
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
                <Link to={nav.href} className="relative px-4 py-1 cursor-pointer after:transition-all after:w-[0px] hover:after:w-[80%]  hover:after:left-4 transition-all after:h-[2px] after:bg-slate-200 after:absolute after:left-[50%] after:bottom-0   rounded-sm flex flex-col justify-start">
                <span className="text-xs text-red-500 font-semibold">
                  0{index + 1}
                </span>
                <span className="text-base font-semibold">{nav.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <Toggler />
      </Wrapper>
    </div>
  );
};
