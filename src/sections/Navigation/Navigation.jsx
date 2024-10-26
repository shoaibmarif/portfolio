import React, { useEffect, useState } from "react";
import { Toggler } from "../../shared/Toggler/Toggler.jsx";
import Profile from "../../../public/images/profile.png";
import { navLinks } from "../../config/data.ts";
import { ContentWrapper } from "../../shared/ContentWrapper.jsx";
import { useNavigate } from "react-router-dom";
import "./Navigation.css"
export const Navigation = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("/");

  const handleNavigation = (href) => {
    navigate(href);
    setActiveLink(href);

    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup
    };
  }, [navLinks]);

  return (
    <React.Fragment>

    <ContentWrapper display={"fixed"} classes="py-0 w-full z-[999] custom__nav__wrapper transition-all  shadow-[2px_2px_10px_-8px_#a78bfa]  bg-gradient-to-r from-[#101010] via-[#161616] dark:to-[#101010] " anim={"fade-down"} delay="1000">
      <div className="mx-auto  flex items-center justify-between text-white py-2 ">
        <div className="dark:bg-primary-dark bg-primary rounded-full">
          <img
            className="size-[50px]"
            src={Profile}
            alt="Shoaib Arif Profile"
          />
        </div>
        <ul className="lg:flex flex-row items-center hidden">
          {navLinks.map((nav, index) => {
            return (
              <li className="mx-2" key={index}>
                <button
                  onClick={() => handleNavigation(nav.href)}
                  className={`relative px-4 active cursor-pointer after:transition-all after:w-[0px] hover:after:w-[80%] 
                    hover:after:left-1/2 hover:after:translate-x-[-50%] transition-all after:h-[2px] dark:after:bg-slate-200
                    after:bg-black after:absolute after:left-[50%] after:bottom-0 rounded-sm flex flex-col justify-start
                    ${activeLink === nav.href ? 'text-primary-dark font-bold' : ''}`} // Active class applied here
                >
                  <span className={`font-semibold transition-all`}>
                    {nav.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <div><label class="burger" for="burger">
          <input type="checkbox" id="burger" />
          <span></span>
          <span></span>
          <span></span>
        </label>
        </div>
      </div>
    </ContentWrapper>
    </React.Fragment>
  );
};
