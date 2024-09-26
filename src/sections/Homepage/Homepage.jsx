import React, { useEffect, useState } from "react";
import { Wrapper } from "../../shared/Wrapper";
import Typewriter from "typewriter-effect";
import { ContentWrapper } from "../../shared/ContentWrapper";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaStackOverflow,
} from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

import CountUp from "react-countup";
export const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Delay of 1 second before expanding

    return () => clearTimeout(timer); // Cleanup timer
  }, []);
  return (
    <React.Fragment>
      <ContentWrapper>
        <div className="relative h-full w-full">
          <Wrapper classes="text-white flex items-center h-[100vh] justify-center flex-col">
            <p
              className="text-start font-semibold tracking-[4px] text-xl"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              Hi, I'm
            </p>
            <h1
              className="font-extrabold  uppercase leading-[6rem] main__heading inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-[#E4405F] text-transparent bg-clip-text"
            >
              Shoaib Arif
            </h1>
            <h2
              className="font-bold text-[3rem]  transition-all dark:text-white text-black"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <Typewriter
                options={{
                  strings: [
                    `Frontend Developer`,
                    "React Developer",
                    "Full Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  pauseFor: 1500,
                  cursorClassName:
                    " bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text",
                }}
              />
            </h2>

            <p
              className="max-w-[700px] text-center mt-5 text-black dark:text-white transition-all"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people I break down
              complex user experinece problems to create integritiy focussed
              solutions that connect billions of people
            </p>

            {/* Social Icons  */}

            <div className="absolute top-1/2 translate-y-[-50%] left-14">
              <span
                className={`w-1 bg-white absolute left-1/2 translate-x-[-50%] top-[-30%] rounded-full 
                    transition-all duration-700 ease-out ${
                      isVisible ? "h-20" : "h-0"
                    }`}
              ></span>

              <span
                className={`w-1 bg-white absolute left-1/2 translate-x-[-50%] bottom-[-35%] rounded-full
                    transition-all duration-700 ease-out ${
                      isVisible ? "h-20" : "h-0"
                    }`}
              ></span>
              <span>
                <span className="mt-3 block rounded-full p-2 cursor-pointer social__wrapper  transition-all duration-300 hover:bg-[#1877F2]">
                  <FaFacebookF className="dark:text-white " />
                </span>
              </span>
              <span>
                <span className="mt-3 block rounded-full p-2 cursor-pointer social__wrapper  transition-all duration-300  hover:bg-[#0A66C2]">
                  <FaLinkedinIn className="dark:text-white " />
                </span>
              </span>
              <span>
                <span className="mt-3 block rounded-full p-2 cursor-pointer social__wrapper  transition-all duration-300   hover:bg-[#000]">
                  <FaGithub className=" dark:text-white  " />
                </span>
              </span>
              <span>
                <span className="mt-3 block rounded-full p-2 cursor-pointer social__wrapper  transition-all duration-300  hover:bg-[#1DA1F2]">
                  <FaTwitter className="dark:text-white" />
                </span>
              </span>
              <span>
                <span className="mt-3 block rounded-full p-2 cursor-pointer social__wrapper  transition-all duration-300  hover:bg-[#E4405F]">
                  <FaInstagram className="dark:text-white" />
                </span>
              </span>
              <span>
                <span className="mt-3 block rounded-full p-2 cursor-pointer social__wrapper  transition-all duration-300  hover:bg-[#E7700D]">
                  <FaStackOverflow className="dark:text-white" />
                </span>
              </span>
            </div>
            <div className="mt-10 flex items-center ">    
              <button
                data-aos="fade-right"
                data-aos-duration="1000"
                className="relative mr-4  text-white min-w-48 px-14 py-4 rounded-full font-semibold
                after:absolute after:w-0 after:h-full transition-all after:duration-300 after:transition-all
                 hover:after:w-[105%] hover:after:h-[105%] after:bg-[#] after:left-[-1%] after:top-[-1%] after:-z-10 overflow-hidden after:rounded-full shadow-[0_0px_5px_0px_#A2A2A2]"
                  
                  >
                Hire Me
              </button>

              <button
                data-aos="fade-left"
                data-aos-duration="1000"
                className="flex items-center justify-center mr-4 text-[#fff] min-w-48 px-14 py-4 rounded-full font-semibold bg-[#6665F1]  shadow-[0_1px_5px_0px_#A2A2A2]
                
                "
              >
                <LuDownload size={15} /> <span className="ml-1">Resume</span>
              </button>
            </div>
          </Wrapper>
          <Wrapper classes="absolute bottom-0  left-1/2 translate-x-[-50%]  ">
            <div className="flex items-center justify-between px-24  py-8 rounded-xl dark:bg-[#1f1f1f] transition-all  from-red-50 to-orange-50  ">
              <div className="text-white flex items-center">
                <div>
                  <svg
                    width="60px"
                    height="60px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    fill="none"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  >
                    <path d="m14.25 9.25v-3.25l-6.25-3.25-6.25 3.25 6.25 3.25 3.25-1.5v3.5c0 1-1.5 2-3.25 2s-3.25-1-3.25-2v-3.5" />
                  </svg>
                </div>
                <div className="flex items-start flex-col ml-2">
                  <span className="font-extrabold text-3xl  ">
                    <CountUp
                      scrollSpyOnce={true}
                      enableScrollSpy={true}
                      end={4}
                    />
                    +
                  </span>
                  Experience
                </div>
              </div>
              <span className="bg-white w-[4px] rounded-full counter__line  "></span>
              <div className="text-white flex items-center  ">
                <div>
                  <svg
                    width="60px"
                    height="60px"
                    viewBox="0 0 512 512"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Combined-Shape"
                        fill="#fff"
                        transform="translate(64.000000, 34.346667)"
                      >
                        <path d="M192,-7.10542736e-15 L384,110.851252 L384,242.986 L341.333,242.986 L341.333,157.655 L213.333,231.555 L213.333,431.088 L192,443.405007 L0,332.553755 L0,110.851252 L192,-7.10542736e-15 Z M341.333333,264.32 L341.333,328.32 L405.333333,328.32 L405.333333,370.986667 L341.333,370.986 L341.333333,434.986667 L298.666667,434.986667 L298.666,370.986 L234.666667,370.986667 L234.666667,328.32 L298.666,328.32 L298.666667,264.32 L341.333333,264.32 Z M42.666,157.654 L42.6666667,307.920144 L170.666,381.82 L170.666,231.555 L42.666,157.654 Z M192,49.267223 L66.1333333,121.936377 L192,194.605531 L317.866667,121.936377 L192,49.267223 Z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                
                <div className="flex items-start flex-col ml-2">
                  <span className="font-extrabold text-3xl  ">
                    <CountUp
                      scrollSpyOnce={true}
                      enableScrollSpy={true}
                      end={50}
                    />
                    +
                  </span>
                  Project Completed
                </div>
              </div>
              <span className="bg-white w-[4px] rounded-full counter__line  "></span>

              <div className="text-white flex items-center  ">
                <div>
                  <svg
                    width="60px"
                    height="60px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM9.375 10.5C9.99632 10.5 10.5 9.99632 10.5 9.375C10.5 8.75368 9.99632 8.25 9.375 8.25C8.75368 8.25 8.25 8.75368 8.25 9.375C8.25 9.99632 8.75368 10.5 9.375 10.5ZM15.75 9.375C15.75 9.99632 15.2463 10.5 14.625 10.5C14.0037 10.5 13.5 9.99632 13.5 9.375C13.5 8.75368 14.0037 8.25 14.625 8.25C15.2463 8.25 15.75 8.75368 15.75 9.375ZM12 15C10.1783 15 9 13.8451 9 12.75H7.5C7.5 14.9686 9.67954 16.5 12 16.5C14.3205 16.5 16.5 14.9686 16.5 12.75H15C15 13.8451 13.8217 15 12 15Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                
                <div className="flex items-start flex-col ml-2">
                  <span className="font-extrabold text-3xl  ">
                    <CountUp
                      scrollSpyOnce={true}
                      enableScrollSpy={true}
                      end={20}
                    />
                    +
                  </span>
                  Happy Clients
                </div>
              </div>
              <span className="bg-white w-[4px] rounded-full counter__line "></span>
              <div className="text-white flex items-center  ">
                <div>
                <svg fill="#fff" width="60px" height="60px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path d="M-0.136 16.708c0.152-8.765 6.287-15.005 13.797-16.015 8.959-1.199 16.495 4.895 17.943 12.979 1.375 7.667-2.839 14.844-9.787 17.688-0.599 0.244-0.927 0.109-1.156-0.5l-3.453-8.969c-0.197-0.527-0.063-0.855 0.453-1.088 1.563-0.709 2.536-1.896 2.797-3.6 0.411-2.64-1.5-5.077-4.161-5.307-2.423-0.235-4.609 1.453-5 3.853-0.339 2.131 0.713 4.115 2.697 5.016 0.62 0.281 0.745 0.557 0.505 1.188l-3.469 9.031c-0.167 0.443-0.531 0.6-1 0.417-3.661-1.432-6.667-4.167-8.437-7.677-1.609-3.177-1.624-5.661-1.729-7.021zM1.213 16.584c0.027 0.427 0.041 0.921 0.084 1.427 0.405 4.64 3.197 9.26 8.452 11.817 0.209 0.093 0.287 0.052 0.365-0.145 0.959-2.527 1.927-5.052 2.901-7.579 0.083-0.208 0.041-0.307-0.152-0.427-2.041-1.287-3.057-3.131-2.943-5.552 0.063-1.391 0.6-2.615 1.537-3.636 1.932-2.109 4.968-2.568 7.453-1.135 2.052 1.187 3.197 3.484 2.916 5.839-0.235 1.968-1.244 3.479-2.953 4.5-0.172 0.104-0.224 0.187-0.145 0.389 0.979 2.532 1.953 5.063 2.916 7.595 0.079 0.203 0.157 0.244 0.36 0.145 2.297-1.068 4.208-2.599 5.688-4.64 2.244-3.115 3.171-6.579 2.728-10.391-0.88-7.584-7.703-13.865-16.489-12.781-6.844 0.839-12.604 6.615-12.719 14.573z"/>
</svg>
                </div>
                <div className="flex items-start flex-col ml-2">
                  <span className="font-extrabold text-3xl  ">
                    <CountUp
                      scrollSpyOnce={true}
                      enableScrollSpy={true}
                      end={25}
                    />
                    +
                  </span>
                  Open Source
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </ContentWrapper>
    </React.Fragment>
  );
};


