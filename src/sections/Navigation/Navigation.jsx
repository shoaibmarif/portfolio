import React, { useState } from "react";
import { Wrapper } from "../../shared/Wrapper.tsx";
import { Toggler } from "../../shared/Toggler/Toggler.jsx";
import Profile from "../../../public/images/profile.png";
import { navLinks } from "../../config/data.ts";
import { ContentWrapper } from "../../shared/ContentWrapper.jsx";
import { useNavigate } from "react-router-dom";

export const Navigation = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const currrent = useState("/");

  const handleNavigation = (href) => {
    navigate(href);
    // You can also implement smooth scrolling here if desired
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ContentWrapper classes="fixed w-full z-[9999] custom__nav__wrapper transition-all" anim={"fade-down"}>
      <Wrapper classes="flex items-center justify-between text-white py-5">
        <div className="bg-[#662d91] rounded-full">
          <img
            className="size-[50px]"
            src={Profile}
            alt="Shoaib Arif Profile"
          />
        </div>
        <ul className="flex flex-row items-center">
          {navLinks.map((nav, index) => {
            return (
              <li className="mx-2" key={index}>
                <button
                  onClick={() => handleNavigation(nav.href)}
                  className={`relative px-4  py-1 active cursor-pointer after:transition-all after:w-[0px] hover:after:w-[80%] 
                     hover:after:left-1/2 hover:after:translate-x-[-50%] transition-all after:h-[2px] dark:after:bg-slate-200
                     after:bg-black after:absolute after:left-[50%] after:bottom-0 rounded-sm flex flex-col justify-start`}
                >
                  <span className="text-base text-black dark:text-white font-semibold transition-all">{nav.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
        <Toggler darkMode={darkMode} setDarkMode={setDarkMode} />
      </Wrapper>
    </ContentWrapper>
  );
};
