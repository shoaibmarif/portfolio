import React, { useEffect, useState, useRef } from "react";
import { Toggler } from "../../shared/Toggler/Toggler.jsx";
import Profile from "../../../public/images/profile.png";
import { navLinks } from "../../config/data.ts";
import { ContentWrapper } from "../../shared/ContentWrapper.jsx";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoPricetagsSharp } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { MdOutlineRateReview } from "react-icons/md";


export const Navigation = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("/");
  const [panelFlag, setPanelFlag] = useState(false);
  const checkboxRef = useRef(null);
  const [navShow, setNavShow] = useState(false);

  const handleNavigation = (href) => {
    navigate(href);
    setActiveLink(href);

    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  const handleClick = () => {
    if (checkboxRef.current) {
      setPanelFlag(checkboxRef.current.checked);
    }
  };

  useEffect(() => {
    const existingRef = window.location.pathname.trim().split("/")[1];
    handleNavigation(existingRef);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let currentLink = activeLink;

      navLinks.forEach((nav) => {
        const element = document.getElementById(nav.href.replace("#", ""));
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 50; // Adjust this based on your navbar height

          if (rect.top >= 0 && rect.top < window.innerHeight - offset) {
            currentLink = nav.href; // Update currentLink if in viewport
          }
        }
      });

      setActiveLink(currentLink);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, [navLinks]);

  return (
    <React.Fragment>
      <div className={`animate-nav bg-gradient-to-r from-[#962cff] via-[#df5dff] to-[#962cff] absolute top-0 right-0 translate-x-1/2 -translate-y-1/2  transition-all z-[20] w-[220px] h-[220px] rounded-full duration-500 ${navShow ? "w-[600px] h-[600px]" :""}`}></div>
      <div className="w-[51px] h-[51px] rounded-full flex items-center justify-center text-white absolute top-5 right-5 bg-[#222]  z-50 cursor-pointer" onClick={() => setNavShow(!navShow)}>
        <RxHamburgerMenu size={24} />
      </div>
      <div className={`w-[50px] h-[50px] rounded-full flex items-center justify-center text-white duration-500 delay-200  absolute top-5 bg-[#222] ${navShow ? "right-28" : "right-5"}  transition-all z-40 `}>
        <IoHome size={24} />
      </div>
      <div className={`w-[50px] h-[50px] rounded-full flex items-center justify-center text-white duration-500 delay-200  absolute  bg-[#222]  ${navShow ? "top-[83px]" : "top-5"} ${navShow ? "right-20" : "right-5"}  transition-all z-40 `}>
        <GrServices size={24} />
      </div>
     <div className={`w-[50px] h-[50px] rounded-full flex items-center justify-center text-white duration-500 delay-200  absolute  bg-[#222] ${navShow ? "top-[120px]" : "top-5"} ${navShow ? "right-5" : "right-5"}  transition-all z-40 `}>
        <FaUser size={24} />
      </div>

      <div className={`w-[50px] h-[50px] rounded-full flex items-center justify-center text-white duration-500 delay-400  absolute  bg-[#222] top-5 ${navShow ? "right-[180px]" : "right-5"}  transition-all z-40 `}>
        <LiaCertificateSolid size={24} />
      </div>

     <div className={`w-[50px] h-[50px] rounded-full flex items-center justify-center text-white duration-500 delay-400 absolute  bg-[#222] ${navShow ? "top-24" : "top-5"} ${navShow ? "right-[150px]" : "right-5"}  transition-all z-40 `}>
        <MdOutlineRateReview size={24} />
      </div>
 
      <div className={`w-[50px] h-[50px] rounded-full flex items-center justify-center text-white duration-500 delay-400 absolute  bg-[#222] ${navShow ? "top-40" : "top-5"} ${navShow ? "right-24" : "right-5"}  transition-all z-40 `}>
        <RiCustomerService2Line size={24} />
      </div>

     <div className={`w-[50px] h-[50px] rounded-full flex items-center justify-center text-white duration-500 delay-400  absolute  bg-[#222] ${navShow ? "top-[200px]" : "top-5"} right-5  transition-all z-40 `}>
        <RiCustomerService2Line size={24} />
      </div>
      {/* <ContentWrapper
        display={"fixed"}
        classes="py-4 w-full z-[999] transition-all  "
        anim={"fade-down"}
        delay="1000"
      >
        <div className="mx-auto flex items-center justify-center py-3.5 rounded-full text-white bg-[#252525] ">
     
          <ul className="lg:flex flex-row items-center hidden">
            {navLinks.map((nav, index) => {
              return (
                <li className="mx-2" key={index}>
                  <button
                    onClick={() => handleNavigation(nav.href)}
                    className={`relative px-4 active cursor-pointer after:transition-all after:w-[0px] hover:after:w-[80%] 
                    hover:after:left-1/2 hover:after:translate-x-[-50%] transition-all after:h-[2px] dark:after:bg-slate-200
                    after:bg-black after:absolute after:left-[50%] after:bottom-0 rounded-sm flex flex-col justify-start
                    ${
                      activeLink === nav.href
                        ? "text-primary-dark font-bold"
                        : ""
                    }`} // Active class applied here
                  >
                    <span className={`font-semibold transition-all`}>
                      {nav.name}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <div onClick={handleClick} className="lg:hidden">
            <label className="burger" htmlFor="burger">
              <input type="checkbox" id="burger" ref={checkboxRef} />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
        <div
          className={`fixed w-[300px] h-[100vh] bg-[#1a1a1a] top-0 transition-all duration-700`}
          style={{ left: `${panelFlag ? "0px" : "-300px"}` }}
        >
          <ul className="p-5 text-xl ">
            {navLinks.map((nav, index) => {
              return (
                <li className="mx-2 py-5 text-white text-center " key={index}>
                  <button
                    onClick={() => handleNavigation(nav.href)}
                    className={`
                    ${
                      activeLink === nav.href
                        ? "text-primary-dark font-bold"
                        : ""
                    }`} // Active class applied here
                  >
                    <span className={`font-semibold transition-all`}>
                      {nav.name}
                    </span>
                    <div className="w-[150px] mx-auto bg-white h-[1px] mt-2"></div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </ContentWrapper> */}
    </React.Fragment>
  );
};
