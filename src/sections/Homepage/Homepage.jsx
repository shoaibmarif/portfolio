import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { ContentWrapper } from "../../shared/ContentWrapper";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaStackOverflow,
} from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import CountUp from "react-countup";
import Profile from "../../../public/images/profile.png";

export const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <React.Fragment>
      <ContentWrapper
        classes={
          "bg-gradient-to-r from-[#101010] via-[#161616] dark:to-[#101010] relative "
        }
      >
        <div className="absolute left-16 top-1/2 translate-y-[-50%] z-[10] hidden xl:block ">
          <div
            data-aos="zoom-in-right"
            data-aos-delay="1500"
            data-aos-duration="700"
          >
            <span
              className={`w-[2px] bg-white bottom-[-45%] left-1/2 translate-x-[-50%] absolute rounded-full
                    transition-all duration-700  delay-1000 ease-out ${
                      isVisible ? "h-24" : "h-0"
                    }`}
            ></span>
            <span
              className={`w-[2px] bg-white top-[-45%] left-1/2 translate-x-[-50%] absolute rounded-full
                    transition-all duration-700  delay-1000 ease-out ${
                      isVisible ? "h-24" : "h-0"
                    }`}
            ></span>
            <SocialIcon
              color={"#0A66C2"}
              url="https://www.linkedin.com/in/shoaibmarif/"
              icon={<FaLinkedinIn size={18} className="dark:text-white " />}
            />
            <SocialIcon
              color={"#4d4d4d"}
              url="https://github.com/shoaibmarif"
              icon={<FaGithub size={18} className="dark:text-white " />}
            />

            <SocialIcon
              color={"#E4405F"}
              url="https://www.instagram.com/shoaibmarif/"
              icon={<FaInstagram size={18} className="dark:text-white " />}
            />
            <SocialIcon
              color={"#1DA1F2"}
              url="https://x.com/mshoaibmarif"
              icon={<FaTwitter size={18} className="dark:text-white " />}
            />
            <SocialIcon
              color={"#E7700D"}
              url="https://stackoverflow.com/users/7770942/shoaib-arif"
              icon={<FaStackOverflow size={18} className="dark:text-white " />}
            />
          </div>
        </div>

        <div className="relative flex items-center  w-full min-h-[100vh] ">
          <div className="flex lg:basis-1/2">
            <div className="flex items-start justify-start text-white flex-col z-[10]">
              <h1
                className="mt-8 uppercase font-extrabold text-7xl  bg-gradient-to-r bg-indigo-500 from-violet-800 via-secondary-dark to-purple-500 inline-block text-transparent bg-clip-text"
                data-aos="zoom-in-right"
                data-aos-duration="1000"
                data-aos-delay={800}
              >
                Shoaib Arif
              </h1>
              <div
                className="text-2xl lg:text-2xl flex font-bold mt-4 lg:mt-8 "
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <Typewriter
                  options={{
                    strings: [
                      "Frontend Developer",
                      "React Developer",
                      "Full Stack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p
                className="max-w-[800px]  text-base lg:text-base mt-5 text-black dark:text-gray-300  transition-all"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                Bringing Innovative Ideas to Life through Engaging Digital
                Experiences and Custom Software Solutions that Empower
                Businesses.
              </p>

              <div className="mt-7 lg:mt-10 flex items-center  ">
                <span
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="1200"
                >
                  <button
                    className=" duration-500 flex items-center justify-center min-w-[200px] px-2 transition-all py-4 md:py-3 lg:py-4 rounded-sm  dark:bg-primary-dark hover:dark:bg-transparent bg-primary  text-white  overflow-hidden  
                shadow-[5px_5px_0px_0px_#dedede] hover:shadow-[5px_5px_0px_0px_#5b21b6]"
                  >
                    <LuDownload size={"20px"} className="relative z-[10]" />{" "}
                    <span className="ml-1 font-semibold relative z-[10] text-base lg:text-base uppercase">
                      Resume
                    </span>
                  </button>
                </span>
              </div>
              <div className="flex items-center justify-center mt-5 lg:hidden">
                <SocialIcon
                  color={"#0A66C2"}
                  classes="mx-2"
                  url="https://www.linkedin.com/in/shoaibmarif/"
                  icon={<FaLinkedinIn size={18} className="dark:text-white " />}
                />
                <SocialIcon
                  color={"#4d4d4d"}
                  url="https://github.com/shoaibmarif"
                  classes="mx-2"
                  icon={<FaGithub size={18} className="dark:text-white " />}
                />
                <SocialIcon
                  color={"#E4405F"}
                  url="https://www.instagram.com/shoaibmarif/"
                  classes="mx-2"
                  icon={<FaInstagram size={18} className="dark:text-white " />}
                />
                <SocialIcon
                  color={"#1DA1F2"}
                  url="https://x.com/mshoaibmarif"
                  classes="mx-2"
                  icon={<FaTwitter size={18} className="dark:text-white " />}
                />
                <SocialIcon
                  color={"#E7700D"}
                  url="https://stackoverflow.com/users/7770942/shoaib-arif"
                  classes="mx-2"
                  icon={
                    <FaStackOverflow size={18} className="dark:text-white " />
                  }
                />
              </div>
            </div>
          </div>

          <div className="flex lg:basis-1/2 items-center justify-center">
            <div
              className="border-4 border-white p-8 rounded-full relative"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay={1200}
            >
              <div className="absolute size-[26px] left-[-13px] top-1/2 rounded-full bg-primary-dark "></div>
              <div className="absolute size-[26px] left-[-13px] top-1/2 rounded-full bg-primary-dark animate-ping  "></div>
              <div className="absolute size-[26px] right-[9%] top-[80%] rounded-full bg-primary-dark "></div>
              <div className="absolute size-[26px] right-[9%] top-[80%] rounded-full bg-primary-dark animate-ping "></div>
              <div className="absolute size-[26px] right-[20%] top-[5%] rounded-full bg-primary-dark "></div>
              <div className="absolute size-[26px] right-[20%] top-[5%] rounded-full bg-primary-dark animate-ping "></div>
              <img
                className="rounded-full max-w-[400px]"
                src={Profile}
                alt="Shoaib Arif Profile"
              />
            </div>
          </div>
          <div
            className="absolute right-0 top-40 z-[0] size-[150px] bg-[#252525] rounded-full rotating-bouncing-element"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay={1000}
          ></div>
          <div
            className="absolute left-0 rotate-45 bottom-20 z-[0] size-[120px] bg-[#252525] rounded-lg rotating-element "
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay={1000}
          ></div>
        </div>
        <div
          className=" h-[170px] w-full absolute z-[999] left-0 bottom-[20px] "
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-delay={1000}
        >
          <div className="container mx-auto h-full">
            <div className="bg-[#181818] rounded-lg h-full flex items-center justify-evenly text-center shadow-lg ">
              <div className="">
                <h1 className="text-xl font-semibold text-primary-dark">
                  Happy Clients
                </h1>
                <span className="text-4xl font-bold mt-3 block text-white">
                  20+
                </span>
              </div>
              <span className="block h-[40%] bg-white w-[3px] rounded-full "></span>
              <div>
                <h1 className="text-xl font-semibold text-primary-dark">
                  Projects
                </h1>
                <span className="text-4xl font-bold mt-3 block text-white">
                  50+
                </span>
              </div>
              <span className="block h-[40%] bg-white w-[3px] rounded-full"></span>

              <div>
                <h1 className="text-xl font-semibold text-primary-dark">
                  Experience
                </h1>
                <span className="text-4xl font-bold mt-3 block text-white">
                  5+
                </span>
              </div>
              <span className="block h-[40%] bg-white w-[3px] rounded-full"></span>

              <div>
                <h1 className="text-xl font-semibold text-primary-dark">
                  Certifications
                </h1>
                <span className="text-4xl font-bold mt-3 block text-white">
                  25+
                </span>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </React.Fragment>
  );
};

const SocialIcon = ({ icon, color, url, classes }) => {
  return (
    <Link
      to={url}
      style={{ "--hover-color": color }}
      className={`${classes} bg-[--hover-color] hover:scale-125 mt-4 block rounded-full p-3 cursor-pointer   transition-all duration-300 `}
    >
      {icon}
    </Link>
  );
};

const ExperienceSvg = ({ color, size }) => {
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="m14.25 9.25v-3.25l-6.25-3.25-6.25 3.25 6.25 3.25 3.25-1.5v3.5c0 1-1.5 2-3.25 2s-3.25-1-3.25-2v-3.5" />
      </svg>
    </div>
  );
};

const ProjectSvg = ({ color, size }) => {
  return (
    <div>
      <svg width={size} height={size} viewBox="0 0 512 512" version="1.1">
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Combined-Shape"
            fill={color}
            transform="translate(64.000000, 34.346667)"
          >
            <path d="M192,-7.10542736e-15 L384,110.851252 L384,242.986 L341.333,242.986 L341.333,157.655 L213.333,231.555 L213.333,431.088 L192,443.405007 L0,332.553755 L0,110.851252 L192,-7.10542736e-15 Z M341.333333,264.32 L341.333,328.32 L405.333333,328.32 L405.333333,370.986667 L341.333,370.986 L341.333333,434.986667 L298.666667,434.986667 L298.666,370.986 L234.666667,370.986667 L234.666667,328.32 L298.666,328.32 L298.666667,264.32 L341.333333,264.32 Z M42.666,157.654 L42.6666667,307.920144 L170.666,381.82 L170.666,231.555 L42.666,157.654 Z M192,49.267223 L66.1333333,121.936377 L192,194.605531 L317.866667,121.936377 L192,49.267223 Z"></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

const HappySvg = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM9.375 10.5C9.99632 10.5 10.5 9.99632 10.5 9.375C10.5 8.75368 9.99632 8.25 9.375 8.25C8.75368 8.25 8.25 8.75368 8.25 9.375C8.25 9.99632 8.75368 10.5 9.375 10.5ZM15.75 9.375C15.75 9.99632 15.2463 10.5 14.625 10.5C14.0037 10.5 13.5 9.99632 13.5 9.375C13.5 8.75368 14.0037 8.25 14.625 8.25C15.2463 8.25 15.75 8.75368 15.75 9.375ZM12 15C10.1783 15 9 13.8451 9 12.75H7.5C7.5 14.9686 9.67954 16.5 12 16.5C14.3205 16.5 16.5 14.9686 16.5 12.75H15C15 13.8451 13.8217 15 12 15Z"
        fill={color}
      />
    </svg>
  );
};

const OpenSourceSvg = ({ color, size }) => {
  return (
    <div>
      <svg
        fill={color}
        width={size}
        height={size}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-0.136 16.708c0.152-8.765 6.287-15.005 13.797-16.015 8.959-1.199 16.495 4.895 17.943 12.979 1.375 7.667-2.839 14.844-9.787 17.688-0.599 0.244-0.927 0.109-1.156-0.5l-3.453-8.969c-0.197-0.527-0.063-0.855 0.453-1.088 1.563-0.709 2.536-1.896 2.797-3.6 0.411-2.64-1.5-5.077-4.161-5.307-2.423-0.235-4.609 1.453-5 3.853-0.339 2.131 0.713 4.115 2.697 5.016 0.62 0.281 0.745 0.557 0.505 1.188l-3.469 9.031c-0.167 0.443-0.531 0.6-1 0.417-3.661-1.432-6.667-4.167-8.437-7.677-1.609-3.177-1.624-5.661-1.729-7.021zM1.213 16.584c0.027 0.427 0.041 0.921 0.084 1.427 0.405 4.64 3.197 9.26 8.452 11.817 0.209 0.093 0.287 0.052 0.365-0.145 0.959-2.527 1.927-5.052 2.901-7.579 0.083-0.208 0.041-0.307-0.152-0.427-2.041-1.287-3.057-3.131-2.943-5.552 0.063-1.391 0.6-2.615 1.537-3.636 1.932-2.109 4.968-2.568 7.453-1.135 2.052 1.187 3.197 3.484 2.916 5.839-0.235 1.968-1.244 3.479-2.953 4.5-0.172 0.104-0.224 0.187-0.145 0.389 0.979 2.532 1.953 5.063 2.916 7.595 0.079 0.203 0.157 0.244 0.36 0.145 2.297-1.068 4.208-2.599 5.688-4.64 2.244-3.115 3.171-6.579 2.728-10.391-0.88-7.584-7.703-13.865-16.489-12.781-6.844 0.839-12.604 6.615-12.719 14.573z" />
      </svg>
    </div>
  );
};
